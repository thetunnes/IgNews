import { GetStaticProps } from "next";
import Head from "next/head";
import Link from 'next/link';
import { asText} from "@prismicio/helpers"
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface PostsProps {
  posts: Post[];
}
export default function Posts({ posts }: PostsProps) {
  console.log(posts)

  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("publication", {
    fetchLinks: ["publication.title", "publication.content"],
  });

  const posts = response.map((post) => ({
    slug: post.uid,
    title: asText(post.data.title),
    excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'

    })
  }))

  return {
    props: {
      posts,
    },
  };
};
