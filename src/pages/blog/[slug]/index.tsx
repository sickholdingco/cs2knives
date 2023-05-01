import Link from "next/link";
import Image from "next/image";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { type Post, allPosts } from "contentlayer/generated";

import { cn } from "~/utils/helper";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) return { props: {} };

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({ post }: { post: Post }) => {
  return post ? (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          "hover:bg-accent hover:text-accent-foreground",
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        {/* <Icons.chevronLeft className="mr-2 h-4 w-4" /> */}
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        )}
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      {/* <Mdx code={post.body.code} /> */}
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blog"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          {/* <Icons.chevronLeft className="mr-2 h-4 w-4" /> */}
          See all posts
        </Link>
      </div>
    </article>
  ) : null;
};

export default PostLayout;
