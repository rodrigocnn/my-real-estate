import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    color?: string;
  };
  size?: string; // <-- agora é opcional
}

export function CustomModal({
  show,
  onClose,
  title,
  children,
  primaryAction,
  size = "2xl",
}: CustomModalProps) {
  return (
    <Modal size={size} dismissible show={show} onClose={onClose}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Body>
        <div className="space-y-6 ">{children}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Fechar
        </Button>
        {primaryAction && (
          <Button onClick={primaryAction.onClick}>{primaryAction.label}</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
