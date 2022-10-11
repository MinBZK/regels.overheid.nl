/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Frameless
 */

import { Link as DesignSystemLink } from '@utrecht/component-library-react';
import type { LinkProps as DesignSystemLinkProps } from '@utrecht/component-library-react/dist/Link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { AnchorHTMLAttributes, ForwardedRef, forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, DesignSystemLinkProps {
	/**
	 * Background to the naming of this API:
	 * "same-url" is inspired by "same-origin" and "same-site" from CSP.
	 * "reload" is from `window.reload()`
	 * Angular also has `onSameUrlNavigation: 'ignore' | 'reload'
	 * URL spec also suggest using a `somethingURL` name:
	 * https://url.spec.whatwg.org/#url-apis-elsewhere
	 */
	sameURL?: 'no-link' | 'reload';
}

export const Link: React.FC<LinkProps> = forwardRef(
	({ children, href, sameURL, ...restProps }, ref: ForwardedRef<HTMLAnchorElement>) => {
		const router = useRouter();
		const isSameURL = router.pathname === href;

		if (isSameURL && sameURL === 'no-link') {
			return <>{children}</>;
		}

		const link = (
			<DesignSystemLink ref={ref} aria-current={isSameURL ? 'page' : undefined} {...restProps}>
				{children}
			</DesignSystemLink>
		);

		if (isSameURL && sameURL === 'reload') {
			/* Avoid client-side routing with `NextLink` for reload behavior */
			return link;
		} else if (typeof href === 'string') {
			return (
				<NextLink href={href} passHref>
					{link}
				</NextLink>
			);
		} else {
			return link;
		}
	}
);

Link.displayName = 'Link';
