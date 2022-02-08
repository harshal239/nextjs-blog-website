import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontMatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="my-5 bg-gray-200 px-2 font-semibold py-4 rounded-md">
          Go back
        </a>
      </Link>
      <div className="max-w-7xl w-11/12 mx-auto my-10 shadow-md p-4 rounded-lg">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="my-2 p-1 rounded-sm bg-gray-100">Posted on {date}</div>
        <img src={cover_image} alt="markdown" className="shadow" />
        <div className="post-body text-base">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}
