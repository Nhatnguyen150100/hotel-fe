import * as React from "react";
import { DEFINE_ROUTE } from "../../../constants/route-mapper";
import { Link } from "react-router-dom";
import { AlignLeftOutlined, FacebookFilled, InstagramFilled, PhoneOutlined, YoutubeFilled } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";

export default function TheHeaderMobile() {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  return (
    <header className="w-full header">
      <div className="flex flex-row justify-between items-center px-3 py-2">
        <Link to={DEFINE_ROUTE.home}>
          <img className="min-h-[50px]" src="/logo.png" alt="logo" />
        </Link>
        <Button
          type="text"
          className="border-none p-0 h-[40px]"
          icon={<AlignLeftOutlined className="!text-xl" />}
          onClick={() => {
            setOpenDrawer((pre) => !pre);
          }}
        />
      </div>
      <Drawer
        title={
          <div className="w-full flex justify-center items-center">
            <Link to={DEFINE_ROUTE.home}>
              <img className="min-h-[50px]" src="/logo.png" alt="logo" />
            </Link>
          </div>
        }
        closeIcon={false}
        width={320}
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
      >
        <Link className="text-base font-medium" to={DEFINE_ROUTE.home} onClick={() => {setOpenDrawer(false)}}>
          Trang chủ
        </Link>
        <Divider className="my-3"/>
        <Link className="text-base font-medium" to={DEFINE_ROUTE.listRoom} onClick={() => {setOpenDrawer(false)}}>
          Đặt phòng
        </Link>
        <Divider className="my-3"/>
        <Link className="text-base font-medium" to={DEFINE_ROUTE.listNews} onClick={() => {setOpenDrawer(false)}}>
          Tin tức
        </Link>
        <Divider className="my-3"/>
        <div className="flex justify-center items-center space-x-3 my-5">
          <PhoneOutlined
            style={{ fontSize: "26px", color: "var(--primary-color-icon)" }}
          />
          <a
            href="tel:0945 293 201"
            className="font-medium hover:text-yellow-600 "
          >
            0945 293 201
          </a>
          <FacebookFilled
            className="hover:!text-yellow-600 hover:cursor-pointer"
            style={{ fontSize: "26px", color: "var(--primary-color-icon)" }}
          />
          <InstagramFilled
            className="hover:!text-yellow-600 hover:cursor-pointer"
            style={{ fontSize: "26px", color: "var(--primary-color-icon)" }}
          />
          <YoutubeFilled
            className="hover:!text-yellow-600 hover:cursor-pointer"
            style={{ fontSize: "26px", color: "var(--primary-color-icon)" }}
          />
        </div>
        <Divider className="my-3"/>
        <div className="flex flex-row justify-center items-center space-x-2">
          <i className="fa fa-bars"></i>
          <img className="max-h-[40px]" src="/map.png" />
          <a
            className="underline font-medium hover:text-yellow-600"
            target="_blank"
            href="https://maps.app.goo.gl/WLt8oCQ4D9wWQxxP7"
          >
            Bản đồ
          </a>
        </div>
      </Drawer>
    </header>
  );
}
