import Faq from "@/components/global/faq";
import Banner from "./section/banner";
import FollowInstagram from "./section/followinstagram";
import LatestBlog from "./section/latestblog";
import Subscribe from "./section/subscribe";
import Testimonial from "./section/testimonial";
import Treatment from "./section/treatment";
import BannerV2 from "./section/bannerv2";

export default function HomePageScreen() {
  return (
    <>
      {/* <Banner /> */}
      <BannerV2 />
      <FollowInstagram />
      <Treatment />
      <Testimonial />
      <LatestBlog />
      <Faq />
      <Subscribe />
    </>
  );
}
