'use client';

import { Breadcrumbs as BreadcrumbsComponent } from '@/components/breadcrumbs';
import { getBlogArticle } from '@/services/cms/get-blog-article';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumbs = async () => {
  const [, , id] = usePathname().split('/');

  const blogArticle = await getBlogArticle({ args: { id: Number(id) } });

  return (
    <BreadcrumbsComponent>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <span>{blogArticle.data.attributes.title}</span>
    </BreadcrumbsComponent>
  );
};
