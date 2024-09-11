import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import {
  IconFileTypeXml,
  IconId,
  IconLock,
  IconMail,
  IconScale,
  IconStatusChange,
  IconTag,
  IconTagStarred,
  IconUsersGroup,
} from '@tabler/icons-react';
import cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { Entry, InfoCard } from './info-card';
import * as Section from './section';

function formatDocument(document: string) {
  const $ = cheerio.load(document);

  $('.title').addClass('text-lg font-semibold mb-2 mt-2');
  $('.spraak').addClass('p-4 bg-gray-100 rounded-lg mb-10');

  $('table').addClass(
    'w-full bg-gray-100 rounded-lg mb-10 first:[&_td]:pl-4 last:[&_td]:pr-4 [&_tr:first-child_td]:pt-4 [&_tr:last-child_td]:pb-4'
  );

  $('a').replaceWith((_, el) => {
    return `<span class="text-blue-500 underline">${$(el).text()}</span>`;
  });

  return $.html();
}

export default async function IndividueleInkomenstoeslagPage() {
  const dataPath = path.join(process.cwd(), 'src/app/register/indInkToesl/data');

  const regelgroepen = await fs.readFile(path.join(dataPath, 'regelgroepen.html'), 'utf-8').then(formatDocument);
  const parameters = await fs.readFile(path.join(dataPath, 'parameters.html'), 'utf-8').then(formatDocument);
  const gegevensmodel = await fs.readFile(path.join(dataPath, 'gegevensmodel.html'), 'utf-8').then(formatDocument);

  return (
    <Container>
      <div className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-[auto_20rem]">
        <div>
          <Typography variant="h1">Individuele inkomenstoeslag - regelgroepen in ALEF</Typography>
          <Typography>
            Verzameling regels voor &quot;Individuele inkomenstoeslag&quot; - <br />
            Gemeente Utrecht Betreft het object: &quot;Aanvraag&quot; <br />
          </Typography>
          <Typography>Drie regelgroepen met in ALEF uitgewerkte HTML pagina&apos;s.</Typography>
          <Typography>Bronnen</Typography>
          <ul className="mb-7 list-disc pl-5">
            <li>
              <Link component="a" href="https://loket.digitaal.utrecht.nl/nl/form/individuele-inkomenstoeslag-aanvragen/startpagina">
                Individuele inkomenstoeslag aanvragen
              </Link>
            </li>
            <li>
              <Link component="a" href="https://lokaleregelgeving.overheid.nl/CVDR642743/2">
                Beleidsregel | Individuele Inkomenstoeslag gemeente Utrecht
              </Link>
            </li>
          </ul>
          <div className="flex gap-x-7">
            <Pill label="ALEF" />
            <Pill label="Inkomentoeslag" />
          </div>
          <Section.Root title="Webservices (1)">
            <Section.Item
              title="Blueriq - SOAP service IIT"
              href="https://viloketdemo.blueriq.com/runtime/webservices/aaas/BerekenInkomensToeslag/Berekenen_IIT/aaas.wsdl"
            >
              <Section.ItemDescription>
                Service &apos;Berekenen_IIT&apos; op onderstaand endpoint. Let op: credentials nodig!
              </Section.ItemDescription>
              <Section.ItemBadges>
                <Pill startIcon={<IconFileTypeXml />} />
                <Pill startIcon={<IconScale />} label="CC-0 (1.0)" />
                <Pill label="2024" />
              </Section.ItemBadges>
            </Section.Item>
          </Section.Root>
          <Section.Root title="Documentatie (2)">
            <Section.Item title='ALEF regelgroep "Uit te keren individuele inkomenstoeslag"' html={regelgroepen}>
              <Section.ItemDescription>
                Dit is een HTML weergave van de ALEF regels voor groep Uit te keren individuele inkomenstoeslag.
              </Section.ItemDescription>
              <Section.ItemBadges>
                <Pill startIcon={<IconFileTypeXml />} />
                <Pill startIcon={<IconScale />} label="CC-0 (1.0)" />
                <Pill label="2024" />
              </Section.ItemBadges>
            </Section.Item>

            <Section.Item title="Parameters van de regelgroep" html={parameters}>
              <Section.ItemDescription>
                Dit is een HTML weergave van de parameters van de ALEF regels voor groep Uit te keren individuele
                inkomenstoeslag.
              </Section.ItemDescription>
              <Section.ItemBadges>
                <Pill startIcon={<IconFileTypeXml />} />
                <Pill startIcon={<IconScale />} label="CC-0 (1.0)" />
                <Pill label="2024" />
              </Section.ItemBadges>
            </Section.Item>
          </Section.Root>
          <Section.Root title="Dataschemas (1)">
            <Section.Item title="Gegevensmodel van de regelgroep" html={gegevensmodel}>
              <Section.ItemDescription>Model voor het objecttype &quot;Aanvraag&quot;</Section.ItemDescription>
              <Section.ItemBadges>
                <Pill startIcon={<IconFileTypeXml />} />
                <Pill startIcon={<IconScale />} label="CC-0 (1.0)" />
                <Pill label="2024" />
              </Section.ItemBadges>
            </Section.Item>
          </Section.Root>
        </div>
        <div className="flex gap-3 overflow-x-scroll pb-2 lg:flex-col lg:overflow-x-auto">
          <InfoCard title="Toegankelijkheid">
            <Entry name="Status" value="Beschikbaar" icon={<IconStatusChange />} />
            <Entry name="Openbaarheid" value="Publiek" icon={<IconLock />} />
            <Entry name="Licentie" value="CC-0 (1.0)" icon={<IconScale />} />
          </InfoCard>

          <InfoCard title="Kenmerk">
            <Entry name="Classificaties" value="Geen" icon={<IconTagStarred />} />
            <Entry name="Thema" value="Sociale zekerheid" icon={<IconTag />} />
          </InfoCard>

          <InfoCard title="Contactgegevens">
            <Entry name="Naam" value="Steven Gort" icon={<IconId />} />
            <Entry
              name="Email"
              value={
                <Link component="a" href="mailto:steven.gort@ictu.nl" className="ml-auto text-right">
                  Steven.Gort@ictu.nl
                </Link>
              }
              icon={<IconMail />}
            />
          </InfoCard>

          <InfoCard title="Eigenaarschap">
            <Entry name="Bronhouder" value="Gemeente Utrecht" icon={<IconUsersGroup />} />
          </InfoCard>
        </div>
      </div>
    </Container>
  );
}
