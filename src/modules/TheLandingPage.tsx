import { Carousel } from "antd";

const DEFINE_IMG_CAROUSEL = [
  "/landing_page/landing_page_1.jpg",
  "/landing_page/landing_page_2.jpg",
  "/landing_page/landing_page_3.jpg",
  "/landing_page/landing_page_4.jpg",
];

export default function TheLandingPage() {
  return (
    <div className="flex flex-col w-full justify-start items-center">
      <div className="w-full">
        <Carousel autoplay>
          {DEFINE_IMG_CAROUSEL.map((item) => (
            <img className="w-full h-[620px] object-cover" src={item} />
          ))}
        </Carousel>
      </div>
      <h2>TheLandingPage</h2>
    </div>
  );
}
