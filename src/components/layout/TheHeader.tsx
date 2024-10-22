import {
  FacebookFilled,
  InstagramFilled,
  PhoneOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

export default function TheHeader() {
  return (
    <header className="w-full">
      <div className="flex flex-row justify-center items-center w-full relative container">
        <div className="flex justify-start items-center space-x-3 absolute left-0">
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
        <img className="min-h-[80px]" src="/logo.png" alt="logo" />
        <div className="absolute right-0 flex flex-row justify-start items-center space-x-2">
          <img className="max-h-[30px]" src="/map.png" />
          <a
            className="underline font-medium hover:text-yellow-600"
            target="_blank"
            href="https://maps.app.goo.gl/WLt8oCQ4D9wWQxxP7"
          >
            Bản đồ
          </a>
        </div>
      </div>
    </header>
  );
}
