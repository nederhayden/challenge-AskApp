import { ReactNode } from "react";
import { Header } from "../Header/Header.component";
import { LayoutContainer } from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};
