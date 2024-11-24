import { Container } from '@/components/container';
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
      <Container>
        <div className="flex flex-col sm:items-center lg:gap-y-6">
          <nav
            aria-label="Footer Navigatie"
            className="flex flex-col gap-y-12 sm:flex-row sm:justify-center sm:gap-x-9"
          >
            <ul>
              <FooterLink href="/over">Over deze website</FooterLink>
              <FooterLink href="mailto:steven.gort@ictu.nl">Contact</FooterLink>
              <FooterLink href="https://github.com/MinBZK/regels.overheid.nl" isBlank>
                Github
              </FooterLink>
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
        </div>
      </Container>
      <Container>
        <p className="sm:w-100% mt-12 text-center text-base text-primary-dark lg:mt-8">
          Deze website is nog volop in ontwikkeling. Laatste release is{' '}
          <a
            className="font-bold underline"
            target="_blank"
            href="https://github.com/MinBZK/regels.overheid.nl/releases"
          >
            web@{packageJson.version}
          </a>
          <br></br>Mocht er iets niet kloppen, laat het ons weten via{' '}
          <a className="underline" target="_blank" href="https://github.com/MinBZK/regels.overheid.nl/issues">
            github
          </a>
          .
        </p>
      </Container>
    </footer>
  );
};
