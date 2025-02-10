import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
    children: ReactNode;
    href: string;
    [key: string]: any;
}

export default function Link({ children, href, ...props }: LinkProps) {
    return (
        <NextLink href={href} {...props} passHref>
            {children}
        </NextLink>
    );
}