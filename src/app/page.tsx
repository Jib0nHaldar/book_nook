import { Banner } from "@/components/home/banner";
import { HowItWorks } from "@/components/home/how-it-works";
import { ReaderReviews } from "@/components/home/reader-reviews";
import { TopCategories } from "@/components/home/top-categories";

export default function Home() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <TopCategories />
      <ReaderReviews />
    </>
  );
}
