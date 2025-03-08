import { Card } from "flowbite-react";

export function PropertyCard() {
  return (
    <Card
      imgSrc="http://res.cloudinary.com/digaxe3sc/image/upload/v1671495190/real-estate-menn/listings/address-%5Bobject%20Object%5D/ogcus6ezglduwznu5fks.jpg"
      href="#"
      className="mx-4 "
    >
      <h6 className="block antialiased tracking-normal font-sans text-base leading-relaxed  text-start poppins text-green-500 font-bold">
        Rs 50000<span>/month</span>
      </h6>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Apartamento Confortável
      </h5>

      <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit text-start poppins">
        Massa tempor nec feugiat nisl ...
      </p>
    </Card>
  );
}
