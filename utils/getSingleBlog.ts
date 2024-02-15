import { API_URL } from "@/config";
import { headers } from "next/headers";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

export async function getSingleBlog({
  slug,
}: {
  slug: string;
}): Promise<BlogProps | null> {
  // const headerList = headers();

  // console.log("headerx", corsHeaders);

  const res = await fetch(`${API_URL}/blogs/${slug}`, {
    cache: "no-store",
    headers: corsHeaders, // error after deploying to vercel
  });

  const data = await res.json();

  if (res.ok) {
    return data.data;
  } else {
    console.log("error", data);
    return null;
  }
}
