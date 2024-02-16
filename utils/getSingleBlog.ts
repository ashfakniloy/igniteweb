import { API_URL } from "@/config";
import { headers } from "next/headers";

export async function getSingleBlog({
  slug,
}: {
  slug: string;
}): Promise<BlogProps | null> {
  const headerList = headers();

  const userAgent = headerList.get("User-Agent");
  const xForwardedFor = headerList.get("X-Forwarded-For");
  const headersInfo = {
    "User-Agent": userAgent || "",
    "X-Forwarded-For": xForwardedFor || "",
  };

  const res = await fetch(`${API_URL}/blogs/${slug}`, {
    cache: "no-store",
    headers: headersInfo, // error after deploying to vercel if headerList passed directly
  });

  const data = await res.json();

  if (res.ok) {
    return data.data;
  } else {
    console.log("error", data);
    return null;
  }
}
