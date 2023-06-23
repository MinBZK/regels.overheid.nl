import { Notification } from '@/components/notification';
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import packageDotJson from '../../package.json';
import { Container } from './container';

interface FooterLinkProps extends React.PropsWithChildren {
  href: string;
  isBlank?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href, isBlank }) => {
  const LinkComponent = !href.startsWith('/') || isBlank ? 'a' : Link;

  return (
    <li className="first:mt-0 mt-4">
      <LinkComponent href={href} className="text-base flex gap-x-4 text-primary-dark items-center">
        <span>&gt;</span>
        {children}
        {isBlank && <IconExternalLink size={18} />}
      </LinkComponent>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-primary-lighter border-t-primary-light border-t-8 py-6 mt-auto">
      <Container>
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-start lg:flex-col lg:items-center lg:gap-y-6">
          <Notification severity="warning" className="mb-6 sm:w-[300px] lg:w-[664px]">
            Deze website heeft nog géén officiele status. Dit is work in progress. Heb je vragen of wil je met ons
            samenwerken? Neem dan contact met{' '}
            <a href="mailto:steven.gort@ictu.nl" className="underline">
              Steven Gort
            </a>
            .
          </Notification>
          <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-center lg:gap-x-20">
            <ul>
              <FooterLink href="/over">Over deze website</FooterLink>
              <FooterLink href="mailto:steven.gort@ictu.nl">Contact</FooterLink>
              <FooterLink href="https://github.com/MinBZK/regels.overheid.nl" isBlank>
                Github
              </FooterLink>
              <FooterLink href="https://regels.dexcat.nl/">Regelregister</FooterLink>
            </ul>
            <ul>
              <FooterLink href="https://regels.overheid.nl/docs">Documentatie </FooterLink>
              <FooterLink href="#">Privacy en cookies</FooterLink>
              <FooterLink href="#">Toegankelijkheid</FooterLink>
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
          </div>
        </div>
        <p className="text-base text-center sm:w-100% mt-12 text-primary-dark lg:mt-8">
          Onze website is voortdurend in ontwikkeling. Laatste{' '}
          <a className="underline font-bold" href="https://github.com/MinBZK/regels.overheid.nl/releases">
            live-versie v{packageDotJson.version}
          </a>
        </p>
      </Container>
    </div>
  );
};
