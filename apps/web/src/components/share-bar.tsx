'use client';

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconDotsCircleHorizontal,
  IconMail,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  title: string;
}

export const ShareBar: React.FC<Props> = ({ title }) => {
  const pathName = usePathname();
  const [showNavigatorShare, setShowNavigatorShare] = useState(false);

  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${pathName}`;

  const handleShare = async () => {
    await navigator.share({ url, title });
  };

  useEffect(() => {
    setShowNavigatorShare('share' in navigator);
  }, []);

  return (
    <ul className="flex gap-x-6 text-2xl text-black">
      <li>
        <a href={`mailto:?subject=${title}&body=${url}`} title="Delen via email">
          <IconMail />
        </a>
      </li>
      <li>
        <a
          href={`whatsapp://send?text=Bekijk dit artikel op regels.overheid.nl%0A%0A${url}`}
          title="Delen via Whatsapp"
        >
          <IconBrandWhatsapp />
        </a>
      </li>
      <li>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`} title="Delen via Facebook">
          <IconBrandFacebook />
        </a>
      </li>
      <li>
        <a href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}`} title="Delen via Twitter">
          <IconBrandTwitter />
        </a>
      </li>
      {showNavigatorShare && (
        <li>
          <button onClick={handleShare}>
            <IconDotsCircleHorizontal />
          </button>
        </li>
      )}
    </ul>
  );
};
