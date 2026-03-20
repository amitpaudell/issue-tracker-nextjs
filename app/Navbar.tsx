'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';
const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  const currentPath = usePathname();
  return (
    <div>
      <nav className="flex space-x-6  border-b border-black/25  mb-5 px-5 h-14 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true,
              })}

              // className="text-zinc-400 hover:text-zinc-800 transition-colors "
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
