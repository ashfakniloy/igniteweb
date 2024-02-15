import { AnimateTop } from "@/components/Animations";
import { Heading1, Section } from "@/components/Wrapper/Section";
import { getBlogs } from "@/utils/getBlogs";
import Blogs from "../_Common/Blogs";
import { Metadata } from "next";
import BadgeContentBoard from "@/components/BadgeContentBoard";

export const metadata: Metadata = {
  title: "Blog",
};

async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) return;

  return (
    <Section>
      <AnimateTop>
        <div className="relative">
          <Heading1 className="text-center">Our Blogs</Heading1>
          <div className="absolute -top-11 flex justify-center w-full lg:block lg:w-auto lg:right-0 lg:top-0">
            <BadgeContentBoard />
          </div>
        </div>
        {blogs.length > 0 ? (
          <Blogs blogs={blogs} />
        ) : (
          <p className="text-center mt-10 text-xl font-medium text-red-500">
            No blogs found
          </p>
        )}
      </AnimateTop>
    </Section>
  );
}

export default BlogPage;
