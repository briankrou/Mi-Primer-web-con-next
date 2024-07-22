'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Home', 
    href: '/dashboard', 
    icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { 
    name: 'Customers', 
    href: '/dashboard/customers', 
    icon: UserGroupIcon 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              clsx(
                'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out',
                {
                  'bg-gray-200 border-r-4 border-gray-300': pathname === link.href,
                  'border-r-4 border-blue-500': pathname === link.href,
                }
              )
            }
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
