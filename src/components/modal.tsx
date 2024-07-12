import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  toggleModal: () => void;
}

export function Modal({ title, subtitle, toggleModal, children }: ModalProps) {
  return (
    <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
      <div className="bg-zinc-900 shadow-shape w-[640px] rounded-xl px-6 py-5 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">{title}</h2>
            <button type="button" onClick={toggleModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
