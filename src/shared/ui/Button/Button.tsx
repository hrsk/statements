import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";

type Variants = "filled" | "outlined" | "link";
type BaseProperties = {
  loading?: boolean;
  variant: Variants;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

type ButtonProperties = BaseProperties &
  Omit<
    ComponentProps<typeof BaseButton>,
    "render" | "className" | "children"
  > & {
    href?: never;
  };

type LinkProperties = BaseProperties &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
    onClick?: never;
    loading?: never;
  };

type BaseButtonProperties = ButtonProperties | LinkProperties;

export const Button = (properties: BaseButtonProperties) => {
  if ("href" in properties && properties.href !== undefined) {
    const {
      href,
      children,
      variant,

      loading: _loading,
      ...linkProperties
    } = properties;

    return (
      <BaseButton
        nativeButton={false}

        render={
          <Link
            className={clsx(styles.link, styles[variant])}
            href={href}
            {...linkProperties}
          />
        }
        // className={clsx(styles.button, styles[variant])}
      >
        {children}
      </BaseButton>
    );
  }
  const { variant, children, onClick, ...buttonProperties } =
    properties as ButtonProperties;

  return (
    <BaseButton
      {...buttonProperties}
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
  // return (
  //   <BaseButton
  //     {...rest}
  //     className={clsx(styles.button, styles[variant])}
  //     onClick={onClick}
  //   >
  //     {children}
  //   </BaseButton>
  // );
  // return (
  //   <BaseButton
  //     className={clsx(styles.button, styles[variant])}
  //     onClick={onClick}
  //   >
  //     {title}
  //   </BaseButton>
  // );
};
