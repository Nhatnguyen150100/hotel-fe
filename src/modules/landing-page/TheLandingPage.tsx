import { Carousel, Empty, Spin } from "antd";
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
import { Link, useNavigate } from "react-router-dom";
import buildUrlWithParams from "../../utils/build-url-with-param";
import { DEFINE_ROUTE } from "../../constants/route-mapper";
import * as React from "react";
import { IBanner } from "../../types/banner.types";
import bannerService from "../../services/bannerService";
import { INew } from "../../types/new.types";
import destinationService from "../../services/destinationService";
import Visibility from "../../components/base/visibility";
import router from "../../routers";

const images = [
  "/landing_page/swiper-grid/swiper_grid_1.jpg",
  "/landing_page/swiper-grid/swiper_grid_2.jpg",
  "/landing_page/swiper-grid/swiper_grid_3.jpg",
];

const DEFINE_IMG_SWIPER_GRID = images
  .map((src, index) => {
    // Dùng điều kiện để xác định loại bố cục
    if (index % 3 === 0) {
      return (
        <div className="h-[620px]" key={index}>
          <ImageHover src={src} />
        </div>
      );
    } else if (index % 3 === 1 || index % 3 === 2) {
      if (index % 3 === 1) {
        return (
          <div
            className="flex flex-col justify-between items-center space-y-5 h-[620px]"
            key={index}
          >
            <ImageHover src={src} />
            {/* Thêm ảnh tiếp theo nếu có */}
            {index + 1 < images.length && (
              <ImageHover src={images[index + 1]} />
            )}
          </div>
        );
      }
    }
    return null; // Không trả về gì nếu không thuộc điều kiện
  })
  .filter(Boolean); // Lọc các giá trị null

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
  const [listDestinations, setListDestinations] = React.useState<INew[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetListDestination = async () => {
    try {
      setLoading(true);
      const rs = await destinationService.getAllNew();
      setListDestinations(rs.data.content);
    } finally {
      setLoading(false);
    }
  };

  const listDestinationsConvert = React.useMemo(() => {
    if (!listDestinations) return [];
    const tempList = [...listDestinations];
    return tempList
      .map((_item, index) => {
        if (index % 3 === 0) {
          return (
            <div className="h-[620px]" key={_item.id}>
              <Link to={DEFINE_ROUTE.destinationDetail.replace(":id", _item.id)}>
                <ImageHover src={_item.thumbnailImg} />
              </Link>
            </div>
          );
        } else if (index % 3 === 1 || index % 3 === 2) {
          if (index % 3 === 1) {
            return (
              <div
                className="flex flex-col justify-between items-center space-y-5 h-[620px]"
                key={index}
              >
                <Link to={DEFINE_ROUTE.destinationDetail.replace(":id", _item.id)}>
                  <ImageHover src={_item.thumbnailImg} />
                </Link>
                {index + 1 < tempList.length && (
                  <Link to={DEFINE_ROUTE.destinationDetail.replace(":id", _item.id)}>
                    <ImageHover
                      src={tempList[index + 1].thumbnailImg}
                    />
                  </Link>
                )}
              </div>
            );
          }
        }
        return null;
      })
      .filter(Boolean);
    console.log("🚀 ~ listDestinationsConvert ~ tempList:", tempList);
  }, [listDestinations]);

  const handleGetListImages = async () => {
    try {
      setLoading(true);
      const rs = await bannerService.getAllImagesBanner();
      setListImages(rs.data.content);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetListImages();
    handleGetListDestination();
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
            <Visibility
              visibility={listDestinations}
              suspenseComponent={loading ? <Spin /> : <Empty />}
            >
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
                {listDestinationsConvert?.map((_item, index) => (
                  <SwiperSlide key={index}>{_item}</SwiperSlide>
                ))}
              </Swiper>
            </Visibility>
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
