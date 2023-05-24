import Logo from '@/assets/logo.png';
import { IconMenu2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { useRouter } from 'next/router';

interface Item {
  href: string;
  label: string;
}

interface Props {
  items: Item[];
  activeHref: string;
}

export const Navbar: React.FC<Props> = ({ items, activeHref }) => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = 'hidden';

    if (isOpen === false) document.body.style.overflow = '';
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [asPath]);

  return (
    <>
      <header className="border-b-8 border-primary-light">
        <div className="h-24 sm:h-auto container flex justify-between items-center">
          <figure className="w-[170px] sm:w-[300px] aspect-[540/190] relative">
            <Image src={Logo} alt="regels.overheid.nl logo" fill />
          </figure>
          <button
            className="h-14 bg-primary-light rounded-lg flex items-center px-3 gap-x-2 border-black border-2 sm:hidden"
            onClick={() => setIsOpen((state) => !state)}
          >
            <IconMenu2 />
            <span className="text-base font-bold">Menu</span>
          </button>
        </div>
        <div className="h-16 bg-primary-main hidden sm:block">
          <nav className="container flex items-center gap-x-2">
            {items.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`h-16 flex items-center px-4 hover:bg-primary-light hover:text-primary-main ${clsx(
                  href !== activeHref && ' text-white',
                  href === activeHref && 'bg-primary-light text-black'
                )}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {isOpen && (
          <div className="fixed top-24 bottom-0 bg-primary-main left-0 right-0 mt-2 z-10">
            <nav className="container flex flex-col gap-y-2">
              {items.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`h-[70px] text-white flex items-center ${clsx(
                    href !== activeHref && ' text-white',
                    href === activeHref && 'bg-primary-light text-black border-black border-2 px-4'
                  )}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
