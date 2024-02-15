import { API_URL } from "@/config";
import { headers } from "next/headers";

export async function getSingleBlog({
  slug,
}: {
  slug: string;
}): Promise<BlogProps | null> {
  const headerList = headers();

  // console.log("headerList", headerList.get("x-hello-from-middleware"));

  const res = await fetch(`${API_URL}/blogs/${slug}`, {
    cache: "no-store",
    headers: {
      ...headerList,
    }, // error after deploying to vercel
  });

  const data = await res.json();

  if (res.ok) {
    return data.data;
  } else {
    console.log("error", data);
    return null;
  }
}
