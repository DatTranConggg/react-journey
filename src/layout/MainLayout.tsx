import { Footer, Header } from "components/common";
import { ReactNode } from "react";

export interface MainLayoutProps {
    children?: ReactNode
}

export default function MainLayout ({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div>
        { children }
      </div>
      <Footer />
    </div>
  );
}
