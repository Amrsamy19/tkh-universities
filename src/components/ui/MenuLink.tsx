import React from "react";

interface MenuLinkProps {
  children: React.ReactNode;
  href?: string;
}

export const MenuLink = ({ children, href = "#" }: MenuLinkProps) => {
  return (
    <a
      href={href}
      className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors py-xs"
    >
      {children}
    </a>
  );
};
