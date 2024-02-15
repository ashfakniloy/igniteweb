import { getBlogs } from "@/utils/getBlogs";
import { AnimateTop } from "@/components/Animations";
import { Heading1, Section } from "@/components/Wrapper/Section";
import Blogs from "../_Common/Blogs";

async function OurBlog() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const blogs = (await getBlogs())?.slice(0, 3);

  if (!blogs) return;

  return (
    <Section>
      <AnimateTop>
        <Heading1>Our Blogs</Heading1>
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

export default OurBlog;
