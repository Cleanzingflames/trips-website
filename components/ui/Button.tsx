import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base = "btn";
  const variantClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <a href={href} className={`${base} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}