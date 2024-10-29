import {
  EnvironmentOutlined,
  EuroCircleOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Carousel, DatePicker, Input } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import ImageHover from "../../components/base/ImageHover";
import ListRoomLandingPage from "./ListRoomLandingPage";
import SearchRoom from "./SearchRoom";

const DEFINE_IMG_CAROUSEL = [
  "/landing_page/landing_page_1.jpg",
  "/landing_page/landing_page_2.jpg",
  "/landing_page/landing_page_3.jpg",
  "/landing_page/landing_page_4.jpg",
];

const DEFINE_IMG_SWIPER_GRID = [
  <ImageHover src="/landing_page/swiper-grid/swiper_grid_1.jpg" />,
  <div className="flex flex-col justify-between items-center space-y-5">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_2.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_3.jpg" />
  </div>,
  <ImageHover src="/landing_page/swiper-grid/swiper_grid_4.jpg" />,
  <div className="flex flex-col justify-between items-center space-y-5">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_5.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_6.jpg" />
  </div>,
  <ImageHover src="/landing_page/swiper-grid/swiper_grid_7.jpg" />,
  <div className="flex flex-col justify-between items-center space-y-5">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_8.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_9.jpg" />
  </div>,
];

const DEFINE_NEW = [
  {
    title: "Hành trình khám phá Chùa Hương Hà Nội chi tiết và mới nhất",
    description:
      "Khám phá Chùa Hương Hà Nội - quần thể tâm linh đặc sắc với kiến trúc ấn tượng, lịch sử lâu đời, và lễ hội văn hóa tâm linh thu hút hàng triệu du khách",
    img: "/landing_page/tin-tuc/tin_tuc_1.jpg",
  },
  {
    title: "Hành trình khám phá Chùa Hương Hà Nội chi tiết và mới nhất",
    description:
      "Khám phá Chùa Hương Hà Nội - quần thể tâm linh đặc sắc với kiến trúc ấn tượng, lịch sử lâu đời, và lễ hội văn hóa tâm linh thu hút hàng triệu du khách",
    img: "/landing_page/tin-tuc/tin_tuc_2.jpg",
  },
  {
    title: "Hành trình khám phá Chùa Hương Hà Nội chi tiết và mới nhất",
    description:
      "Khám phá Chùa Hương Hà Nội - quần thể tâm linh đặc sắc với kiến trúc ấn tượng, lịch sử lâu đời, và lễ hội văn hóa tâm linh thu hút hàng triệu du khách",
    img: "/landing_page/tin-tuc/tin_tuc_3.jpg",
  },
  {
    title: "Hành trình khám phá Chùa Hương Hà Nội chi tiết và mới nhất",
    description:
      "Khám phá Chùa Hương Hà Nội - quần thể tâm linh đặc sắc với kiến trúc ấn tượng, lịch sử lâu đời, và lễ hội văn hóa tâm linh thu hút hàng triệu du khách",
    img: "/landing_page/tin-tuc/tin_tuc_4.jpg",
  },
  {
    title: "Hành trình khám phá Chùa Hương Hà Nội chi tiết và mới nhất",
    description:
      "Khám phá Chùa Hương Hà Nội - quần thể tâm linh đặc sắc với kiến trúc ấn tượng, lịch sử lâu đời, và lễ hội văn hóa tâm linh thu hút hàng triệu du khách",
    img: "/landing_page/tin-tuc/tin_tuc_5.jpg",
  },
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
    <div className="flex flex-col w-full justify-start items-center">
      <div className="w-full">
        <Carousel autoplay>
          {DEFINE_IMG_CAROUSEL.map((item) => (
            <img
              key={item}
              className="w-full h-[540px] object-cover"
              src={item}
            />
          ))}
        </Carousel>
      </div>
      <div className="container space-y-24 my-10 flex flex-col w-full justify-start items-center relative bg-transparent">
        <div className="absolute top-[-100px]">
          <SearchRoom />
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 px-4 sm:px-24">
          {DEFINE_ICON_SLOGAN.map((item) => (
            <div
              key={item.text}
              className="flex flex-row justify-start items-start space-x-5 transform-hover hover:text-yellow-600 hover:cursor-pointer"
            >
              <img className="w-12 h-12" src={item.icon} />
              <p className="text-lg font-medium max-w-[170px] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <ListRoomLandingPage />
        <div className="flex flex-col justify-start items-center w-full space-y-10">
          <span className="uppercase text-[32px] sm:text-[40px] font-normal">
            <strong className="me-2">điểm đến</strong>
            nổi bật
          </span>
          <div className="min-h-[120px] w-full">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              style={{ paddingBottom: "50px" }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {DEFINE_IMG_SWIPER_GRID.map((item) => (
                <SwiperSlide key={item.key}>{item}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="hover:text-white hover:bg-yellow-600 text-yellow-600 font-light text-lg flex justify-center items-center border border-solid rounded-3xl border-yellow-600 px-3 py-2 min-w-[220px]">
            Xem thêm
          </button>
        </div>
        <div className="flex flex-col justify-start items-center w-full space-y-10">
          <span className="uppercase text-[32px] sm:text-[40px] font-normal">
            <strong className="me-2">tin tức</strong>
            nổi bật
          </span>
          <div className="min-h-[120px] w-full grid sm:grid-rows-2 sm:grid-flow-col gap-10">
            {DEFINE_NEW.map((item, index) => {
              return (
                <div
                  className={`flex flex-col justify-start items-start space-y-3 ${
                    index === 0 && "row-span-2 col-span-2"
                  }`}
                >
                  <ImageHover src={item.img} alt="img" />
                  <a className="w-full text-lg font-semibold text-start hover:text-yellow-600">
                    {item.title}
                  </a>
                  <span className="w-full whitespace-pre-wrap">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="hover:text-white hover:bg-yellow-600 text-yellow-600 font-light text-lg flex justify-center items-center border border-solid rounded-3xl border-yellow-600 px-3 py-2 min-w-[220px]">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}
