import * as React from "react";
import { IQueryUser } from "../../../../types/user.types";
import roomService from "../../../../services/roomService";
import { IBooking } from "../../../../types/booking.types";
import bookingService from "../../../../services/bookingService";
import { Empty, Spin, Table, TableProps } from "antd";
import { formatDate } from "../../../../utils/format-date";
import BaseSearch from "../../../../components/base/BaseSearch";
import BookingForm from "./BookingForm";
import Visibility from "../../../../components/base/visibility";

export default function BookingManager() {
  const [query, setQuery] = React.useState<Partial<IQueryUser>>({
    page: 1,
    limit: 5,
    nameLike: "",
  });
  const [listBooking, setListBooking] = React.useState<IBooking[]>([]);
  console.log("🚀 ~ BookingManager ~ listBooking:", listBooking);
  const [loading, setLoading] = React.useState(false);

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedBooking, setSelectedBooking] = React.useState<IBooking>();

  const handleGetBookingList = async (queryParam = query) => {
    try {
      setLoading(true);
      delete queryParam.total;
      const rs = await bookingService.getAllBookings(queryParam);
      setListBooking(rs.data.content);
      setQuery({
        ...queryParam,
        total: rs.data.totalCount,
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetBookingList();
  }, []);

  const columns: TableProps<IBooking>["columns"] = [
    {
      title: "Số thứ tự",
      key: "index",
      render: (_: any, __: any, index: number) =>
        (query.page! - 1) * query.limit! + index + 1,
    },
    {
      title: "Tên người đặt",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="text-lg font-medium">{text}</span>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Ngày nhận phòng",
      dataIndex: "startDate",
      key: "startDate",
      render: (date) => (
        <span className="text-sm font-base">{formatDate(date)}</span>
      ),
    },
    {
      title: "Ngày trả phòng",
      dataIndex: "endDate",
      key: "endDate",
      render: (date) => (
        <span className="text-sm font-base">{formatDate(date)}</span>
      ),
    },
    {
      title: "Ghi chú của khách hàng",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Phòng đã đặt",
      key: "roomName",
      render: (_, record: IBooking) => (
        <span className="text-lg font-medium">{record.room.name}</span>
      ),
    },
  ];

  const handleClickRow = (row: IBooking) => {
    setSelectedBooking(row);
    setOpenModal(true);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-5 w-full">
        <h1 className="font-bold text-2xl">
          Danh sách lịch khách đã đặt phòng
        </h1>
        <BaseSearch
          value={query.nameLike!}
          onHandleChange={(value) => {
            setQuery({ ...query, nameLike: value });
            if (!value)
              handleGetBookingList({
                page: query.page,
                limit: query.limit,
              });
          }}
          onSearch={() => handleGetBookingList()}
        />
        <div className="justify-center items-center flex w-full">
          <Visibility
            visibility={listBooking.length > 0}
            suspenseComponent={loading ? <Spin /> : <Empty />}
          >
            <div className="w-full">
              <Table<IBooking>
                rowKey="id"
                className="hover:cursor-pointer"
                expandable={{
                  childrenColumnName: "antdChildren",
                }}
                columns={columns}
                onRow={(record) => ({
                  onClick: () => handleClickRow(record),
                })}
                dataSource={listBooking}
                pagination={{
                  current: query.page,
                  pageSize: query.limit,
                  total: query.total,
                  onChange: (page, limit) => {
                    handleGetBookingList({
                      ...query,
                      page,
                      limit,
                    });
                  },
                }}
              />
            </div>
          </Visibility>
        </div>
      </div>
      <Visibility visibility={Boolean(openModal && selectedBooking)}>
        <BookingForm
          isOpenModal={openModal}
          booking={selectedBooking!}
          handleClose={() => {
            setOpenModal(false);
            setSelectedBooking(undefined);
          }}
        />
      </Visibility>
    </>
  );
}
