import {
  EnvironmentOutlined,
  EuroCircleOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Input } from "antd";
import dayjs from "dayjs";
import * as React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchRoom() {
  const [searchParams] = useSearchParams();

  return (
    <div className="bg-white rounded-lg py-5 px-4 sm:px-10 flex sm:flex-row flex-col justify-between items-end shadow-lg sm:w-max space-x-5">
      <div className="flex flex-col space-y-3 min-w-[200px] sm:min-w-[280px]">
        <label className="text-base font-medium">
          Bạn muốn nghỉ dưỡng ở đâu?
        </label>
        <Input
          className="h-[45px]"
          prefix={
            <EnvironmentOutlined
              className="me-2"
              style={{ color: "#787878" }}
            />
          }
          placeholder="Nơi bạn muốn nghỉ dưỡng"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-base font-medium">Ngày nhận và trả phòng</label>
        <DatePicker.RangePicker
          onChange={(dates) => {
            console.log(dates);
          }}
          value={[
            searchParams.get("startDate")
              ? dayjs(searchParams.get("startDate"))
              : dayjs(),
            searchParams.get("endDate")
              ? dayjs(searchParams.get("endDate"))
              : dayjs().add(1, "day"),
          ]}
          placeholder={["Chọn ngày nhận", "Chọn ngày trả"]}
          className="h-[45px] w-full sm:w-[260px]"
          format="DD/MM/YYYY"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-base font-medium">Số phòng</label>
        <Input
          className="h-[45px]"
          prefix={
            <HomeOutlined className="me-2" style={{ color: "#787878" }} />
          }
          placeholder="Nhập số phòng"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-base font-medium">
          Thêm mã khuyến mãi / Voucher
        </label>
        <Input
          className="h-[45px]"
          prefix={
            <EuroCircleOutlined className="me-2" style={{ color: "#787878" }} />
          }
          placeholder="Nhập mã khuyến mãi"
        />
      </div>
      <Button
        className="h-[45px] bg-yellow-600 hover:!bg-yellow-500"
        type="primary"
        variant="filled"
        icon={<SearchOutlined />}
      >
        Tìm kiếm phòng
      </Button>
    </div>
  );
}
