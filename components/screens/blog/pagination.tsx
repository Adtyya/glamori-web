import { RootResponseProps } from "@/types/response";
import PaginationSection from "./section/pagination_section";
import { ArticleProps } from "@/types/article";

export type PaginationBlogPageProps = {
  articleList: RootResponseProps<ArticleProps>;
};

export default function PaginationBlogPage({
  articleList,
}: PaginationBlogPageProps) {
  return (
    <>
      <PaginationSection {...{ articleList }} />
    </>
  );
}
