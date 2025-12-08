export type ProductProps = {
  title: string;
  slug: string;
  subtitle: string;
  image?: string;
  spoiler: string;
  beforeAfter: BeforeAfterProps[];
};

type BeforeAfterProps = {
  image: string;
};
