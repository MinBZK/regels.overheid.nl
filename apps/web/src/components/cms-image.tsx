import Image from 'next/image';

export const CmsImage: React.FC<React.ComponentProps<typeof Image>> = ({ src, ...rest }) => {
  const cmsRootUrl = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_ROOT_URL;

  const _src = `${cmsRootUrl}${src}`;

  return <Image src={_src} {...rest} />;
};
