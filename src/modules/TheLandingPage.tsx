import { Carousel } from "antd";

const DEFINE_IMG_CAROUSEL = [
  "/landing_page/landing_page_1.jpg",
  "/landing_page/landing_page_2.jpg",
  "/landing_page/landing_page_3.jpg",
  "/landing_page/landing_page_4.jpg",
];

const DEFINE_ICON_SLOGAN = [
  {
    icon: "/landing_page/icon_slogan_1.svg",
    text: "Đảm bảo giá tốt nhất",
  },
  {
    icon: "/landing_page/icon_slogan_2.svg",
    text: "Đa dạng điểm đến lựa chọn tốt nhất",
  },
  {
    icon: "/landing_page/icon_slogan_3.svg",
    text: "Đảm bảo chất lượng phục vụ tốt nhất",
  },
  {
    icon: "/landing_page/icon_slogan_4.svg",
    text: "Hỗ trợ khách hàng nhanh nhất",
  },
];

export default function TheLandingPage() {
  return (
    <div className="flex flex-col w-full justify-start items-center space-y-12">
      <div className="w-full">
        <Carousel autoplay>
          {DEFINE_IMG_CAROUSEL.map((item) => (
            <img className="w-full h-[620px] object-cover" src={item} />
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className="w-full grid grid-cols-4 gap-5">
          {DEFINE_ICON_SLOGAN.map((item) => (
            <div className="flex flex-row justify-start items-start space-x-5 transform-hover hover:text-yellow-600 hover:cursor-pointer">
              <img className="w-12 h-12" src={item.icon} />
              <p className="text-lg font-medium max-w-[180px] text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
