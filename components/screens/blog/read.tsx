import { RootResponseByIdProps } from "@/types/response";
import ReadBlog from "./section/read";
import { ArticleProps } from "@/types/article";

type ReadBlogProps = {
  articleDetails: RootResponseByIdProps<ArticleProps>;
};

export default function Read({ articleDetails }: ReadBlogProps) {
  return (
    <>
      <ReadBlog {...{ articleDetails }} />
    </>
  );
}
