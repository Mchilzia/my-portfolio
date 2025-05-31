import type { ReactNode } from "react";


import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: ReactNode;    
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Welcome" name="DevLuco" />
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <Footer date={new Date()} name="LucoDev" />
        </div>
    );
};

