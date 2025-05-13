import { MouseEventHandler, useState } from "react";
import { PropertyType } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { propertyTypesCreate } from "../api";
import { PropertyTypeSchema } from "../validation";

export function useCreatePropertyType() {
  const props = {
    queryKey: "get-property-types",
    onSuccessMsg: "Tipo de Imóvel criado com sucesso",
    mutationFn: (type: PropertyType) => propertyTypesCreate(type),
  };

  const { mutate, isPending, status } = useCreateMutation<PropertyType>(props);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openModal, setOpenModal] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyType((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseModal = () => {
    setErrors({});
    setOpenModal(false);
  };

  const createPropertyType = async () => {
    try {
      await PropertyTypeSchema.validate(propertyType, { abortEarly: false });
      mutate(propertyType as PropertyType);
      if (status === "idle" || status === "success") {
        setPropertyType(undefined);
        setErrors({});
        setOpenModal(false);
      }
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors = error.inner.reduce((acc: any, err: any) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      }
    }
  };

  return {
    openModal,
    setOpenModal,
    handleCloseModal,
    handleClick,
    handleChange,
    createPropertyType,
    isPending,
    errors,
    propertyType,
  };
}
