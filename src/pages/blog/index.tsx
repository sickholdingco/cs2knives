import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { type Post, allPosts } from "contentlayer/generated";

export const getStaticProps = () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg text-blue-700 hover:text-blue-900">
        <Link href={post.url}>{post.title}</Link>
      </h2>
    </div>
  );
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default Blog;
