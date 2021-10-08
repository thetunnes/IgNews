import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router'


interface ActiveLinkProps extends LinkProps {
    children: ReactElement,
    activeClassname: string,
}
export function ActiveLink({children, activeClassname, ...rest}: ActiveLinkProps) {

    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeClassname : '';

    return (
        <Link {...rest}>
            {cloneElement(children, {className})}
        </Link>
    )
}