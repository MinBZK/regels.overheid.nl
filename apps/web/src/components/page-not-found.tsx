import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from './button';
import { PageNotFoundIllustrationDesktop } from './page-not-found/page-not-found-illustration-desktop';
import { PageNotFoundIllustrationMobile } from './page-not-found/page-not-found-illustration-mobile';

export const PageNotFound = () => {
  return (
    <div className="flex md:gap-x-12 md:justify-center md:items-center">
      <div className="hidden md:block">
        <PageNotFoundIllustrationDesktop />
      </div>
      <div className="flex flex-col text-center items-center md:w-[355px]">
        <h1 className="text-3xl text-primary-main md:mb-6">Error 404</h1>
        <div className="md:hidden h-[300px]">
          <PageNotFoundIllustrationMobile />
        </div>
        <h2 className="text-4xl font-bold text-primary-dark mb-3 md:mb-6">Pagina niet gevonden</h2>
        <p className="text-base text-black mb-3 md:mb-6">
          Helaas is dit niet de pagina waarnaar je op zoek was. Ga alsjeblieft door met zoeken binnen de wettelijke
          grenzen.
        </p>
        <Button variant="text" startIcon={<IconArrowLeft />}>
          Terug
        </Button>
      </div>
    </div>
  );
};
