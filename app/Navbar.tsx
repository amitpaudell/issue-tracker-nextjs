import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issue' },
  ];
  return (
    <div>
      <nav>
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul>
          {links.map((link) => (
            <Link href={link.href}>{link.label}</Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
