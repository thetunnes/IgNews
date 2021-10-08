/* eslint-disable @next/next/no-html-link-for-pages */
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Image from 'next/image'

import { ActiveLink } from '../ActiveLink';


export function Header() {


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="Logo ig.news" width="100" height="100" />

                <nav>

                    <ActiveLink activeClassname={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    
                    <ActiveLink activeClassname={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}