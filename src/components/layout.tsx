import type { ReactNode } from "react";


import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: ReactNode;    
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Welcome" name="Chilzia" />
            <main className="flex-1 p-4">
                {children}
            </main>
            <Footer name="Chilzia" date={new Date()} />
        </div>
    );
};

