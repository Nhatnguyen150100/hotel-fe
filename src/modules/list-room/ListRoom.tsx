import * as React from "react";
import SearchRoom from "../landing-page/SearchRoom";
import { Button, Divider } from "antd";
import { IFacilitiesRooms, IRoom } from "../../types/room.types";
import roomService from "../../services/roomService";

import "swiper/css";
import "swiper/css/pagination";

import "react-quill/dist/quill.snow.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ImageHover from "../../components/base/ImageHover";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BaseModal from "../../components/base/BaseModal";
import Visibility from "../../components/base/visibility";
import { formatCurrency } from "../../utils/format-money";
import { IBaseQuery } from "../../types/query.types";
import { Pagination as PaginationAntd } from "antd";

export default function ListRoom() {
  const [listRoom, setListRoom] = React.useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = React.useState<IRoom>();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<IBaseQuery>({
    page: 1,
    limit: 3,
  });

  const handleGetListRoom = async () => {
    const rs = await roomService.getAllRooms(query);
    setListRoom(rs.data.content);
    setQuery({
      ...query,
      total: rs.data.totalCount,
    });
  };

  React.useEffect(() => {
    handleGetListRoom();
  }, [query.page]);

  return (
    <div className="flex flex-col justify-start items-center py-5 space-y-5 w-full">
      <SearchRoom />
      <div className="flex flex-row justify-between items-start w-full max-w-[1300px] space-x-10">
        <div className="flex flex-col px-8 py-5 justify-start items-start bg-white rounded-2xl min-w-[360px]">
          <h1 className="text-lg font-semibold">Kết quả</h1>
          <Divider />
          <span className="text-base font-light">
            Hiển thị {listRoom.length} trên tổng số {query.total} kểt quả tìm
            được
          </span>
        </div>
        <div className="flex flex-col justify-start items-start space-y-5 w-full">
          {listRoom.map((room) => (
            <div
              key={room.id}
              className="flex flex-row justify-start items-center p-5 bg-white rounded-xl w-full space-x-5 h-[240px]"
            >
              <div className="w-[420px] h-[200px]">
                <CustomSwiper room={room} />
              </div>
              <div className="flex flex-col justify-between items-start h-full w-full">
                <div className="flex flex-col justify-start items-start space-y-4 grow">
                  <h1 className="text-2xl font-semibold">{room.name}</h1>
                  <div className="flex items-center space-x-5">
                    <div className="flex flex-row items-end space-x-2">
                      <img
                        className="h-6 w-6"
                        src="/icon-facilities/single-bed.png"
                      />
                      <span className="first-letter:capitalize text-sm">
                        {room.bedType}
                      </span>
                    </div>
                    <div className="flex flex-row items-end space-x-2">
                      <img
                        className="h-6 w-6"
                        src="/icon-facilities/area.png"
                      />
                      <span className="first-letter:capitalize text-sm">
                        {room.acreage} m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-end space-x-4">
                    <img
                      className="h-6 w-6"
                      src="/icon-facilities/dieu_hoa.png"
                    />
                    <img
                      className="h-6 w-6"
                      src="/icon-facilities/dien_thoai.png"
                    />
                    <img
                      className="h-6 w-6"
                      src="/icon-facilities/voi_sen.png"
                    />
                    <span
                      className="underline text-blue-600 hover:cursor-pointer"
                      onClick={() => {
                        setSelectedRoom(room);
                        setOpenModal(true);
                      }}
                    >
                      Xem tất cả tiện nghi
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between items-center">
                  <div className="flex flex-col justify-start items-start space-y-1">
                    <span className="italic text-sm">Giá chỉ từ</span>
                    <span className="font-semibold text-2xl text-yellow-500">
                      {formatCurrency(room.normalDayPrice ?? 0)}
                    </span>
                  </div>

                  <Button
                    className="h-[45px] bg-yellow-600 hover:!bg-yellow-500"
                    type="primary"
                    variant="filled"
                  >
                    Đặt phòng ngay
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-end max-w-[1300px]">
        <PaginationAntd
          total={query.total}
          pageSize={query.limit}
          onChange={(page) => {
            setQuery({ ...query, page });
          }}
        />
      </div>
      <Visibility visibility={Boolean(openModal && selectedRoom)}>
        <BaseModal
          isOpen={openModal}
          width={680}
          footer={null}
          handleClose={() => {
            setOpenModal(false);
            setSelectedRoom(undefined);
          }}
        >
          <div className="py-5 flex flex-col items-start justify-start space-y-5">
            <div className="flex flex-row justify-start w-full items-start space-x-5">
              <div className="w-[320px] h-[200px]">
                <CustomSwiper room={selectedRoom!} />
              </div>
              <div className="flex flex-col justify-start items-start space-y-4">
                <h1 className="text-3xl font-semibold">{selectedRoom?.name}</h1>
                <div className="flex flex-row items-end space-x-2">
                  <img
                    className="h-6 w-6"
                    src="/icon-facilities/single-bed.png"
                  />
                  <span className="first-letter:capitalize text-sm">
                    {selectedRoom?.bedType}
                  </span>
                </div>
                <div className="flex flex-row items-end space-x-2">
                  <img className="h-6 w-6" src="/icon-facilities/area.png" />
                  <span className="first-letter:capitalize text-sm">
                    {selectedRoom?.acreage} m<sup>2</sup>
                  </span>
                </div>
                <p>{selectedRoom?.description}</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <span className="text-lg font-bold mb-3">
                Các tiện ích có trong phòng:
              </span>
              <div className="grid grid-cols-2 gap-y-3 w-full">
                {selectedRoom?.facilitiesRooms?.map(
                  (facility: IFacilitiesRooms) => (
                    <div
                      key={facility.id}
                      className="flex items-center space-x-2"
                    >
                      <img
                        className="h-6 w-6"
                        src={`/icon-facilities/${facility.facility.icon}.png`}
                      />
                      <span>{facility.facility.name}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </BaseModal>
      </Visibility>
    </div>
  );
}

function CustomSwiper({ room }: { room: IRoom }) {
  const sliderRef = React.useRef<any>(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        ref={sliderRef}
        navigation={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {room.img_1 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_1} alt="img" />
          </SwiperSlide>
        )}
        {room.img_2 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_2} alt="img" />
          </SwiperSlide>
        )}
        {room.img_3 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_3} alt="img" />
          </SwiperSlide>
        )}
        {room.img_4 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_4} alt="img" />
          </SwiperSlide>
        )}
        {room.img_5 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_5} alt="img" />
          </SwiperSlide>
        )}
        {room.img_6 && (
          <SwiperSlide>
            <ImageHover className="rounded-xl" src={room.img_6} alt="img" />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="relative">
        <div
          className="absolute top-[-110px] z-50 rounded-full h-[32px] w-[32px] bg-white p-1 flex justify-center items-center hover:cursor-pointer transform-hover"
          onClick={handlePrev}
        >
          <LeftOutlined />
        </div>
        <div
          className="absolute top-[-110px] right-0 z-50 rounded-full h-[32px] w-[32px] bg-white p-1 flex justify-center items-center hover:cursor-pointer transform-hover"
          onClick={handleNext}
        >
          <RightOutlined />
        </div>
      </div>
    </>
  );
}
