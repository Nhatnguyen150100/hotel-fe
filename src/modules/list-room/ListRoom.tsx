import * as React from "react";
import SearchRoom from "../landing-page/SearchRoom";
import { Button, Divider, Tooltip } from "antd";
import { IFacilitiesRooms, IRoom } from "../../types/room.types";
import roomService from "../../services/roomService";

import "swiper/css";
import "swiper/css/pagination";

import "react-quill/dist/quill.snow.css";
import BaseModal from "../../components/base/BaseModal";
import Visibility from "../../components/base/visibility";
import { formatCurrency } from "../../utils/format-money";
import { IBaseQuery } from "../../types/query.types";
import { Pagination as PaginationAntd } from "antd";
import { useNavigate } from "react-router-dom";
import { DEFINE_ROUTE } from "../../constants/route-mapper";
import CustomSwiper from "../../components/base/CustomSwiper";

export default function ListRoom() {
  const navigate = useNavigate();
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
              <div className="w-[380px] h-[200px]">
                <CustomSwiper room={room} />
              </div>
              <div className="flex flex-col justify-between items-start h-full w-full">
                <div className="flex flex-col justify-start items-start space-y-4 grow">
                  <Tooltip title="Nhấn để xem chi tiết">
                    <h1
                      className="text-2xl font-semibold hover:text-blue-700 hover:cursor-pointer hover:underline"
                      onClick={() => {
                        navigate(
                          DEFINE_ROUTE.roomDetail.replace(":id", room.id)
                        );
                      }}
                    >
                      {room.name}
                    </h1>
                  </Tooltip>
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
                  <div className="flex flex-col justify-start items-start space-y-0.5">
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