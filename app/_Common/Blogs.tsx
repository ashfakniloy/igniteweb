import ArrowLink from "@/components/ArrowLink";
import { getFomrattedDate } from "@/utils/getFomrattedDate";
import Image from "next/image";
import Link from "next/link";

function Blogs({ blogs }: { blogs: BlogListProps }) {
  return (
    <div className="mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-x-8 lg:gap-y-16">
      {blogs.map((blog) => (
        <div key={blog.id} className="w-full lg:w-[405px]">
          <Link href={`/blog/${blog.slug}`}>
            <div className="relative w-full h-[250px] lg:h-[285px]">
              <Image
                src={blog.featuredImage.imageUrl}
                alt={blog.featuredImage.altText}
                title={blog.featuredImage.imageTitle}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover border border-gray-200"
              />
            </div>
          </Link>
          <p className="mt-4 lg:mt-10 text-sm font-medium">
            {getFomrattedDate(blog.createdAt)}
          </p>

          <p className="mt-2 lg:mt-4 text-xl lg:text-2xl font-medium">
            {blog.title}
          </p>
          <p className="mt-2 lg:mt-4 text-sm">{blog.metaDescription}</p>

          <ArrowLink href={`/blog/${blog.slug}`} className="mt-2 lg:mt-5">
            Read More
          </ArrowLink>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
