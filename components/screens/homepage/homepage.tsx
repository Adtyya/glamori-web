import Faq from "@/components/global/faq";
import Banner from "./section/banner";
import FollowInstagram from "./section/followinstagram";
import LatestBlog from "./section/latestblog";
import Subscribe from "./section/subscribe";
import Testimonial from "./section/testimonial";
import Treatment from "./section/treatment";

export default function HomePageScreen() {
  return (
    <>
      <Banner />
      <Treatment />
      <Testimonial />
      <LatestBlog />
      <FollowInstagram />
      <Faq />
      <Subscribe />
    </>
  );
}
