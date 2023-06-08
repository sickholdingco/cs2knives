import { connect } from "@planetscale/database"

export async function generateStaticParams() {
  const config = {
    host: "<host>",
    username: "<user>",
    password: "<password>",
  }

  const conn = connect(config)

  const results = await conn.execute("select 1 from dual where 1=?", [1])

  const posts = await fetch("https://.../posts").then((res) => res.json())

  // @ts-ignore
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>
}
