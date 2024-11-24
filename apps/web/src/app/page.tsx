import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { getBlogArticles } from '@/services/cms/get-blog-articles';
import { getEvents } from '@/services/cms/get-events';
import { Metadata } from 'next';
import { CardBlog } from './card-blog';
import { CardIllustration } from './card-illustration';
import { CardLink } from './card-link';
import { IllustrationCollaboration } from './illustration-collaboration';
import { IllustrationQuestion } from './illustration-question';
import { IllustrationTrack } from './illustration-track';
import { CardEvent } from './card-event';

export default async function Home() {
  const events = await getEvents();
  const blogArticles = await getBlogArticles();

  return (
    <>
      <Container className="mb-6">
        <Typography variant="h1">Register Open Regels</Typography>
        <Typography variant="p">
          Regels omzetten in actie: ontdek hoe Open Regels helpt bij inzicht en uitvoering.
        </Typography>
      </Container>

      <Container bleed>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <CardIllustration title="Welke regels zijn er?">
            <IllustrationQuestion />
          </CardIllustration>
          <CardIllustration title="Hoe komen we daar?">
            <IllustrationTrack />
          </CardIllustration>
          <CardIllustration title="Welk doel dienen ze?">
            <IllustrationCollaboration />
          </CardIllustration>
        </div>
      </Container>
      <Container className="mb-6 mt-14">
        <Typography variant="h2" className="border-b border-b-primary-dark">
          In de Spotlight
        </Typography>
      </Container>
      <Container bleed>
        <div className="grid auto-cols-[85%] grid-flow-col gap-4 overflow-x-auto pb-2 sm:h-[400px] md:auto-cols-[minmax(250px,1fr)]  md:grid-rows-2">
          {blogArticles.map((article, i) => {
            return (
              <CardBlog
                key={article.id}
                article={article}
                className={(i + 1) % 3 === 0 ? 'aspect-square md:row-span-2 md:aspect-auto' : ''}
              />
            );
          })}
        </div>
      </Container>
      <Container className="mb-6 mt-12">
        <Typography variant="h2" className="border-b border-b-primary-dark">
          Op de planning
        </Typography>
      </Container>
      <Container bleed>
        <div className="flex flex-row gap-x-4 overflow-x-auto pb-2">
          {events.map((event) => {
            return <CardEvent key={event.id} event={event} />;
          })}
        </div>
      </Container>
      <Container className="mt-12">
        <Typography variant="h2">Wensen of feedback?</Typography>
        <Typography>
          Iedereen die geïnteresseerd is in dit product kan de roadmap bekijken of zelf ideën aandragen.
        </Typography>
        <div className="mt-6 flex w-full justify-center gap-6">
          {/* <CardLink href="#">Deel je wens of idee op het forum!</CardLink> */}
          <CardLink href="https://www.figma.com/proto/miuXp5zu2JNhG2t3c29KBS/Design?page-id=74%3A712&node-id=4477-35003&node-type=canvas&viewport=27%2C388%2C0.02&t=MHrQhFB8hKldUU0Y-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4477%3A35003">
            Test de beta en geef je feedback!
          </CardLink>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid',
};
