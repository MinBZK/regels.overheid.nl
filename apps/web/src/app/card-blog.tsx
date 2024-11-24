import { resolveCmsImage } from '@/common/resolve-cms-image';
import { Chip } from '@/components/chip';
import { Typography } from '@/components/typography';
import { cx } from '@/cva.config';
import { getBlogArticles } from '@/services/cms/get-blog-articles';
import slugify from '@sindresorhus/slugify';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  className?: string;
  article: Awaited<ReturnType<typeof getBlogArticles>>[number];
}

export const CardBlog: React.FC<Props> = ({ className, article }) => {
  return (
    <Link
      href={`/blog/${article.id}/${slugify(article.title!)}`}
      className={cx('overflow-hidden rounded-sm', className)}
    >
      <article className="relative flex h-full w-full flex-col items-start justify-end overflow-hidden">
        <figure className="absolute bottom-0 left-0 right-0 top-0 -z-20">
          <Image
            fill
            objectFit="cover"
            alt={article.cover.alt || article.title!}
            src={resolveCmsImage({ ext: article.cover!.ext!, hash: article.cover!.hash! }).toString()}
          />
        </figure>
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-gradient-to-b from-transparent to-black opacity-50" />

        <div className="p-4">
          {article.category && <Chip label={article.category} />}

          <header>
            <Typography variant="h3" className="mt-2 text-xl font-normal text-white">
              {article.title}
            </Typography>
          </header>
        </div>
      </article>
    </Link>
  );
};
