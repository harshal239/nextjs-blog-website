import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="p-4 shadow rounded-xl flex flex-col justify-between gap-2">
      <Image
        src={post.frontMatter.cover_image}
        alt="post-img"
        className="shadow"
      />
      <div className=" my-2 p-1 rounded-sm bg-gray-100">
        Posted on {post.frontMatter.date}
      </div>
      <h3 className="text-xl font-semibold">{post.frontMatter.title}</h3>
      <p className="text-base">{post.frontMatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="px-3 py-2 text-white font-medium rounded bg-[rgb(70,130,180)] hover:transform hover:scale-95">
          Read More
        </a>
      </Link>
    </div>
  );
}
