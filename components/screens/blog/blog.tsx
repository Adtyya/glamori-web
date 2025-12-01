import { RootResponseProps } from "@/types/response";
import FeaturedBlog from "./section/featured";
import OtherPost from "./section/otherpost";
import { ArticleProps } from "@/types/article";

export type BlogProps = {
  articleList: RootResponseProps<ArticleProps>;
};

export default function Blog({ articleList }: BlogProps) {
  return (
    <>
      <FeaturedBlog {...{ articleList }} />
      <OtherPost {...{ articleList }} />
    </>
  );
}
