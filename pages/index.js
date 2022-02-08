import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className="mt-8 max-w-5xl w-11/12 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  //Get files from post directory
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and front matter from posts

  const posts = files.map((filename) => {
    //Create Slug
    const slug = filename.replace(".md", "");

    //Get frontMatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
