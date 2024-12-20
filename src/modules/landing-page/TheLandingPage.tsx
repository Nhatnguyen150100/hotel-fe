import { Carousel } from "antd";
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
import ListNews from "./ListNews";
import { useNavigate } from "react-router-dom";
import buildUrlWithParams from "../../utils/build-url-with-param";
import { DEFINE_ROUTE } from "../../constants/route-mapper";
import * as React from "react";
import { IBanner } from "../../types/banner.types";
import bannerService from "../../services/bannerService";

const DEFINE_IMG_CAROUSEL = [
  "/landing_page/landing_page_1.jpg",
  "/landing_page/landing_page_2.jpg",
  "/landing_page/landing_page_3.jpg",
  "/landing_page/landing_page_4.jpg",
];

const DEFINE_IMG_SWIPER_GRID = [
  <div className="h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_1.jpg" />
  </div>,
  <div className="flex flex-col justify-between items-center space-y-5 h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_2.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_3.jpg" />
  </div>,
  <div className="h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_4.jpg" />
  </div>,
  <div className="flex flex-col justify-between items-center space-y-5 h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_5.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_6.jpg" />
  </div>,
  <div className="h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_7.jpg" />
  </div>,
  <div className="flex flex-col justify-between items-center space-y-5 h-[620px]">
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_8.jpg" />
    <ImageHover src="/landing_page/swiper-grid/swiper_grid_9.jpg" />
  </div>,
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
  const navigate = useNavigate();
  const [listImages, setListImages] = React.useState<IBanner[]>([]);

  const handleGetListImages = async () => {
    const rs = await bannerService.getAllImagesBanner();
    setListImages(rs.data.content);
  };

  React.useEffect(() => {
    handleGetListImages();
  }, []);

  return (
    <div className="flex flex-col w-full justify-start items-center">
      <div className="w-full min-h-[540px]">
        <Carousel autoplay>
          {listImages.map((item) => (
            <img
              key={item.id}
              className="w-full h-[580px] object-cover"
              src={item.url}
            />
          ))}
        </Carousel>
      </div>
      <div className="container space-y-24 my-10 flex flex-col w-full justify-start items-center relative bg-transparent">
        <div className="absolute sm:top-[-100px] top-[-200px]">
          <SearchRoom
            handleSearch={(startDate, endDate) => {
              navigate(
                buildUrlWithParams(DEFINE_ROUTE.listRoom, {
                  startDate,
                  endDate,
                })
              );
            }}
          />
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 px-4 sm:px-24 pt-[240px] sm:pt-0">
          {DEFINE_ICON_SLOGAN.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-start items-start space-x-5 transform-hover hover:text-yellow-600 hover:cursor-pointer"
            >
              <img className="w-12 h-12" src={item.icon} />
              <p className="sm:text-lg text-base font-medium max-w-[170px] text-center">
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
              {DEFINE_IMG_SWIPER_GRID.map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="hover:text-white hover:bg-yellow-600 text-yellow-600 font-light text-lg flex justify-center items-center border border-solid rounded-3xl border-yellow-600 px-3 py-2 min-w-[220px]">
            Xem thêm
          </button>
        </div>
        <ListNews />
      </div>
    </div>
  );
}
