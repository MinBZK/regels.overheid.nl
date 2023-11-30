import { Container } from '@/components/container';
import { Notification } from '@/components/notification';
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import packageJson from '../../package.json';

interface FooterLinkProps extends React.PropsWithChildren {
  href: string;
  isBlank?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href, isBlank }) => {
  const LinkComponent = !href.startsWith('/') || isBlank ? 'a' : Link;

  return (
    <li className="mt-4 first:mt-0">
      <LinkComponent
        href={href}
        target={isBlank ? '_blank' : '_self'}
        className="flex items-center gap-x-4 text-base text-primary-dark"
      >
        <span>&gt;</span>
        {children}
        {isBlank && <IconExternalLink size={18} />}
      </LinkComponent>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t-8 border-t-primary-light bg-primary-lighter py-6">
      <Container className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-between lg:flex-col lg:items-center lg:gap-y-6">
        <Notification severity="warning" className="mb-6 sm:w-[300px] lg:w-[664px]">
          Deze website heeft nog géén officiele status. Dit is work in progress. Heb je vragen of wil je met ons
          samenwerken? Neem dan contact met{' '}
          <a href="mailto:steven.gort@ictu.nl" className="underline">
            Steven Gort
          </a>
          .
        </Notification>
        <nav aria-label="Footer Navigatie" className="flex flex-col gap-y-12 lg:flex-row lg:justify-center lg:gap-x-9">
          <ul>
            <FooterLink href="/over">Over deze website</FooterLink>
            <FooterLink href="mailto:steven.gort@ictu.nl">Contact</FooterLink>
            <FooterLink href="https://github.com/MinBZK/regels.overheid.nl" isBlank>
              Github
            </FooterLink>
          </ul>
          <ul>
            <FooterLink href="https://regels.dexcat.nl/">Regelregister</FooterLink>
            <FooterLink href="https://regels.overheid.nl/docs">Documentatie </FooterLink>
            <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
          </ul>
          <ul>
            <FooterLink href="/methoden">Methoden</FooterLink>
            <FooterLink href="https://www.overheid.nl/">Overheid.nl</FooterLink>
            <FooterLink href="https://linkeddata.overheid.nl/front/portal/">Linked Data Overheid</FooterLink>
            <FooterLink href="https://puc.overheid.nl/mijno">PUC Open Data</FooterLink>
          </ul>
          <ul>
            <FooterLink href="https://mijn.overheid.nl/">MijnOverheid.nl</FooterLink>
            <FooterLink href="https://www.rijksoverheid.nl/" isBlank>
              Rijksoverheid.nl
            </FooterLink>
            <FooterLink href="https://ondernemersplein.kvk.nl/" isBlank>
              Ondernemersplein
            </FooterLink>
            <FooterLink href="https://www.werkenbijdeoverheid.nl/" isBlank>
              Werkenbijdeoverheid
            </FooterLink>
          </ul>
        </nav>
      </Container>
      <Container component="p" className="sm:w-100% mt-12 text-center text-base text-primary-dark lg:mt-8">
        Onze website is voortdurend in ontwikkeling. Laatste{' '}
        <a className="font-bold underline" target="_blank" href="https://github.com/MinBZK/regels.overheid.nl/releases">
          live-versie {packageJson.version}
        </a>
      </Container>
    </footer>
  );
};
