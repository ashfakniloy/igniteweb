type BlogProps = {
  id: string;
  title: string;
  body: string;
  categories: string[];
  slug: string;
  author: string;
  metaDescription: string;
  featuredImage: {
    imageUrl: string;
    imageTitle: string;
    altText: string;
  };
  createdAt: string;
  updatedAt: string;
};

type BlogListProps = Omit<BlogProps, "body">[];
