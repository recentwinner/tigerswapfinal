import React, { AnchorHTMLAttributes, useContext } from "react";
// import { NavLink } from "react-router-dom";
import Link from 'next/link';


const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  // const { linkComponent } = useContext(MenuContext);
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : Link;
  const props = isHttpLink ? { href } : { href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
