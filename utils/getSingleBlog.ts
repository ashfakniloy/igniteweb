import { API_URL } from "@/config";
import { headers } from "next/headers";

export async function getSingleBlog({
  slug,
}: {
  slug: string;
}): Promise<BlogProps | null> {
  const headerList = headers();
  const userAgent = headerList.get("user-agent");
  const xForwardedFor = headerList.get("x-forwarded-for");
  const headersInfo = {
    "user-agent": `${userAgent}`,
    "x-forwarded-for": `${xForwardedFor}`,
  };

  // console.log("headersInfo", headersInfo);

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
