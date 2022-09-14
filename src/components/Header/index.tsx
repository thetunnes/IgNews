/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="Logo ig.news" />

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
