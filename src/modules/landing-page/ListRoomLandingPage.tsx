import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import ImageHover from "../../components/base/ImageHover";
import { formatCurrency } from "../../utils/format-money";
import * as React from "react";
import { IRoom } from "../../types/room.types";
import roomService from "../../services/roomService";
import { Link, useNavigate } from "react-router-dom";
import { DEFINE_ROUTE } from "../../constants/route-mapper";
import Visibility from "../../components/base/visibility";

export default function ListRoomLandingPage() {
  const [listRoom, setListRoom] = React.useState<IRoom[]>([]);
  const navigate = useNavigate();

  const handleGetListRoom = async () => {
    const rs = await roomService.getAllRooms({
      page: 1,
      limit: 5,
    });
    setListRoom(rs.data.content);
  };

  React.useEffect(() => {
    handleGetListRoom();
  }, []);

  return (
    <Visibility visibility={listRoom.length > 0}>
      <div className="flex flex-col justify-start items-center w-full space-y-10 max-w-[1220px]">
        <span className="uppercase text-[32px] sm:text-[40px] font-normal">
          <strong className="me-2">ưu đãi</strong>
          dành cho bạn
        </span>
        <div className="min-h-[220px] w-full">
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
            style={{ paddingBottom: "40px" }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {listRoom.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col justify-start items-start space-y-3 bg-[#f4f4f5]">
                  <div className="h-[250px] w-[380px]">
                    <ImageHover
                      src={item.img_1 ?? "/landing_page/swipper/swipper_1.jpg"}
                      alt="img"
                    />
                  </div>
                  <Link to={DEFINE_ROUTE.roomDetail.replace(":id", item.id)} className="w-full text-lg font-semibold text-start first-letter:capitalize hover:text-yellow-600 hover:cursor-pointer">
                    {item.name}
                  </Link>
                  <div className="flex flex-row justify-start items-center">
                    <span className="font-semibold text-2xl text-yellow-600">
                      <span className="text-base text-black italic font-normal">
                        Giá chỉ từ:{" "}
                      </span>{" "}
                      {formatCurrency(item.normalDayPrice ?? 0)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={() => {
            navigate(DEFINE_ROUTE.listRoom);
          }}
          className="hover:text-white hover:bg-yellow-600 text-yellow-600 font-light text-lg flex justify-center items-center border border-solid rounded-3xl border-yellow-600 px-3 py-2 min-w-[220px]"
        >
          Xem thêm
        </button>
      </div>
    </Visibility>
  );
}
