import NextLink from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
}

export default function Link({ children, href, ...props }: LinkProps) {
    return (
        <NextLink href={href} {...props} passHref>
            {children}
        </NextLink>
    );
}