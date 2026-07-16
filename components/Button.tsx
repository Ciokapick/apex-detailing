import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "circle" | "icon";

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
  "group inline-flex shrink-0 items-center justify-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.13em] transition duration-200 ease-premium hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-signal-500 text-carbon hover:bg-signal-400 active:bg-signal-600",
  secondary:
    "border border-carbon/30 bg-transparent text-carbon hover:border-carbon hover:bg-carbon hover:text-paper",
  ghost:
    "border border-paper/25 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-carbon",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 rounded-sm px-4",
  md: "h-12 rounded-sm px-5",
  lg: "h-14 rounded-sm px-7",
  circle: "size-28 rounded-full px-5 text-center leading-4 sm:size-32",
  icon: "size-11 rounded-full p-0",
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
