import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 ease-premium hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-champagne-400 text-ink-950 shadow-[0_8px_30px_rgba(217,180,109,0.16)] hover:bg-champagne-300 hover:shadow-[0_12px_36px_rgba(217,180,109,0.24)]",
  secondary:
    "border border-white/20 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.09]",
  ghost: "text-zinc-200 hover:bg-white/[0.08] hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-base",
  icon: "size-11 p-0",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const className = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { children, href, ...linkProps } = props;

    return (
      <a className={className} href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  const {
    children,
    type = "button",
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button className={className} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
