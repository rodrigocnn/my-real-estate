import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryAction: {
    label: string; // texto do botão principal
    onClick: () => void; // ação executada ao clicar
    color?: string; // cor do botão principal (opcional)
  };
}

export function CustomModal({
  show,
  onClose,
  title,
  children,
  primaryAction,
}: CustomModalProps) {
  return (
    <Modal dismissible show={show} onClose={onClose}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Body>
        <div className="space-y-6">{children}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Fechar
        </Button>
        <Button onClick={primaryAction.onClick}>{primaryAction.label}</Button>
      </Modal.Footer>
    </Modal>
  );
}
