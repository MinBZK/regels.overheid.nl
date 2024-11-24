import { Typography } from '@/components/typography';

interface Props extends React.PropsWithChildren {
  title?: string;
}

export const CardIllustration: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="flex aspect-square flex-col overflow-hidden rounded-md border border-grey-lighter px-12 py-6 shadow-sm">
      <Typography variant="h2" className="text-center text-2xl">
        {title}
      </Typography>
      {children}
    </div>
  );
};
