import { Typography } from '@/components/typography';

interface InfoCardProps extends React.PropsWithChildren {
  title: string;
}

interface EntryProps {
  name: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
}

export const Entry: React.FC<EntryProps> = ({ icon, name, value }) => {
  return (
    <li className="flex items-center">
      <span className="text-primary-dark">{icon}</span>
      <span className="ml-2 font-bold text-primary-dark">{name}</span>
      {typeof value === 'string' ? <span className="ml-auto text-right">{value}</span> : value}
    </li>
  );
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="w-80 shrink-0 rounded-md bg-primary-lighter p-4">
      <Typography variant="h4" className="m-0 mb-5 text-base text-primary-main">
        {title}
      </Typography>
      <ul className="flex flex-col gap-y-8">{children}</ul>
    </div>
  );
};
