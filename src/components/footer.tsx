import type { FooterProps } from "../types/footerprops";

export const Footer = (props: FooterProps) => {
    return (
        <footer className="bg-gray-800 h-14 text-white text-center flex justify-between p-4 mt-4">
            <p>&copy; {props.date.getFullYear()} {props.name}. All rights reserved.</p>
        </footer>
    );
} 