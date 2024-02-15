import { API_URL } from "@/config";

export async function getBlogs(): Promise<BlogListProps | null> {
  const res = await fetch(`${API_URL}/blogs`, { cache: "no-store" });
  const data = await res.json();

  if (res.ok) {
    return data.data;
  } else {
    console.log("error", data);
    return null;
  }
}
