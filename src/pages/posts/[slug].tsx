import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { asHTML, asText} from "@prismicio/helpers"
import { getPrismicClient } from "../../services/prismic";
import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={styles.postContent}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  console.log("Minha sessão:", session, "e no final meu slug param: ", params);

  if (!session?.activeSubscription) {
    return {
        redirect: {
            destination: `/posts/preview/${slug}`,
            permanent: false
        }
    }
  }

  const prismic = getPrismicClient(req);
  let post = {};
  try {
    const response = await prismic.getByUID("publication", String(slug), {});

    post = {
      slug,
      title: asText(response.data.title),
      content: asHTML(response.data.content),
      updatedAt: new Date(response.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  } catch (err) {
    return {
      props: {
        post: {},
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};
