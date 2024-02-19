import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from './button';
import { PageNotFoundIllustrationDesktop } from './page-not-found/page-not-found-illustration-desktop';
import { PageNotFoundIllustrationMobile } from './page-not-found/page-not-found-illustration-mobile';
import Link from 'next/link';

export const PageNotFound = () => {
  return (
    <div className="flex md:items-center md:justify-center md:gap-x-12">
      <div className="hidden md:block">
        <PageNotFoundIllustrationDesktop />
      </div>
      <div className="flex flex-col items-center text-center md:w-[355px]">
        <h1 className="text-3xl text-primary-main md:mb-6">Error 404</h1>
        <div className="h-[300px] md:hidden">
          <PageNotFoundIllustrationMobile />
        </div>
        <h2 className="mb-3 text-4xl font-bold text-primary-dark md:mb-6">Pagina niet gevonden</h2>
        <p className="mb-3 text-base text-black md:mb-6">
          Helaas is dit niet de pagina waarnaar je op zoek was. Ga alsjeblieft door met zoeken binnen de wettelijke
          grenzen.
        </p>
        <Button component={Link} href="/" startIcon={<IconArrowLeft />}>
          Terug naar home
        </Button>
      </div>
    </div>
  );
};
