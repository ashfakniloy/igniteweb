export function getFomrattedDate(dateString: string) {
  const dateObj = new Date(dateString);

  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}
