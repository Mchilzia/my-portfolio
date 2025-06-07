import type { ReactNode } from "react";


import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: ReactNode;    
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Header title="Welcome" name="Chilzia" />
            <main className="flex-1 flex-col ">
                <div className="flex-1 p-4 m-0">{children}</div>
            </main>
            <Footer name="Chilzia" date={new Date()} />
        </div>
    );
};

