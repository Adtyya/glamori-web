import { Suspense } from "react";
import ResultSearch from "./section/resultsearch";
import Spinner from "@/components/spinner";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      }
    >
      <ResultSearch />
    </Suspense>
  );
}
