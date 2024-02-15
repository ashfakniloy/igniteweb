import Image from "next/image";
import { Section } from "@/components/Wrapper/Section";
import { getFomrattedDate } from "@/utils/getFomrattedDate";
import { getSingleBlog } from "@/utils/getSingleBlog";
import { notFound } from "next/navigation";
import parser from "html-react-parser";
import { AnimateTop } from "@/components/Animations";
import BadgeContentBoard from "@/components/BadgeContentBoard";

// type SingleBlogPageProps = {
//   params: {
//     slug: string;
//   };
// };

async function BlogArticle({ slug }: { slug: string }) {
  const blog = await getSingleBlog({ slug });

  if (!blog) {
    notFound();
  }
  return (
    <AnimateTop>
      <div className="w-full lg:w-[950px] mx-auto">
        <div className="relative">
          <div className="absolute flex justify-center w-full lg:block lg:w-auto lg:right-0 -top-12">
            <BadgeContentBoard />
          </div>
        </div>

        <article>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {blog.categories.map((categoty, i) => (
              <span
                key={i}
                className="px-2 py-1 border border-gray-400 text-xs font-medium rounded-full"
              >
                {categoty}
              </span>
            ))}
          </div>

          <h1 className="mt-4 lg:text-center text-3xl lg:text-5xl font-semibold leading-[45px] lg:leading-[64px]">
            {blog.title}
          </h1>

          <div className="mt-4 flex justify-center items-center gap-8">
            <p className="">
              Author: <span className="">{blog.author}</span>
            </p>
            <p className="">
              Posted on:{" "}
              <span className="">{getFomrattedDate(blog.createdAt)}</span>
            </p>
          </div>

          <div className="mt-10 relative h-[280px] lg:h-[630px]">
            <Image
              src={blog.featuredImage.imageUrl}
              alt={blog.featuredImage.altText}
              title={blog.featuredImage.imageTitle}
              sizes="100vw"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-14 ContentBoard">{parser(blog.body)}</div>
        </article>
      </div>
    </AnimateTop>
  );
}

export default BlogArticle;
