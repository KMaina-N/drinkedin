'use client';
import { House, UsersThree, Martini, Bell, UserCircle } from "@phosphor-icons/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-14 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around px-2">
      <NavItem href="/" icon={<House size={26} weight={pathname === '/' ? 'fill' : 'regular'} />} active={pathname === '/'} />
      <NavItem href="/network" icon={<UsersThree size={26} weight={pathname === '/network' ? 'fill' : 'regular'} />} active={pathname === '/network'} />
      <NavItem href="/happy-hours" icon={<Martini size={26} weight={pathname === '/happy-hours' ? 'fill' : 'regular'} />} active={pathname === '/happy-hours'} />
      <NavItem href="/notifications" icon={<Bell size={26} weight={pathname === '/notifications' ? 'fill' : 'regular'} />} active={pathname === '/notifications'} />
      <NavItem href="/messages" icon={<UserCircle size={26} weight={pathname === '/messages' ? 'fill' : 'regular'} />} active={pathname === '/messages'} />
    </div>
  );
}

function NavItem({ href, icon, active = false }: { href: string, icon: React.ReactNode, active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center p-2 cursor-pointer ${active ? 'text-zinc-100' : 'text-zinc-500'}`}>
      {icon}
    </Link>
  );
}
