'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  HomeModernIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Empresas', href: '/dashboard/empresas', icon: HomeModernIcon },
  {
    name: 'Clientes',
    href: '/dashboard/clientes',
    icon: UserGroupIcon,
  },
  { name: 'Productos', href: '/dashboard/productos', icon: ShoppingBagIcon },
  { name: 'Factura', href: '/dashboard/maefactura', icon: DocumentDuplicateIcon },
  { name: 'Detalle Factura', href: '/dashboard/detfactura', icon: UserGroupIcon},
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
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
