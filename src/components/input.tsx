import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: "bg-transparent placeholder-zinc-400 outline-none",
  variants: {
    textSize: {
      base: "text-base",
      large: "text-lg",
    },
    ofSize: {
      default: "flex-1",
      small: "w-40",
    },
  },

  defaultVariants: {
    textSize: "base",
    ofSize: "default",
  },
});

interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

export function Input({ textSize, ofSize, ...props }: InputProps) {
  return <input {...props} className={inputVariants({ textSize, ofSize })} />;
}
