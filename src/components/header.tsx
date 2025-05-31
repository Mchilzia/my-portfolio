import { Link, useLocation } from 'react-router-dom';
import { House, Folder, User, Envelope } from 'phosphor-react';

import type { HeaderProps } from '../types/headerprops';


const navItems = [
    { name: 'Home', path: '/', icon: <House size={24} /> },
    { name: 'About', path: '/about', icon: <Folder size={24} /> },
    { name: 'Contact', path: '/contact', icon: <Envelope size={24} /> },
    { name: 'Login', path: '/login', icon: <User size={24} /> },
    { name: 'Register', path: '/register', icon: <User size={24} /> }
]

export const Header = (props: HeaderProps) => {
    const location = useLocation();

    return (
        <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <h1 className='text-lg font-bold text-blue-600'>{props.title}</h1>
            <h3 className='text-md font-medium text-blue-600'>{props.title}</h3>
            <nav className='flex space-x-4'>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center space-x-2 ${location.pathname === item.path ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </header>
    );
}