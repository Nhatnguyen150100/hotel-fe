import {
  EuroCircleOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Carousel, DatePicker, Input } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DEFINE_IMG_CAROUSEL = [
  "/landing_page/landing_page_1.jpg",
  "/landing_page/landing_page_2.jpg",
  "/landing_page/landing_page_3.jpg",
  "/landing_page/landing_page_4.jpg",
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

const DEFINE_SWIPER_IMG = [
  "/landing_page/swipper/swipper_1.jpg",
  "/landing_page/swipper/swipper_2.jpg",
  "/landing_page/swipper/swipper_3.jpg",
  "/landing_page/swipper/swipper_4.jpg",
  "/landing_page/swipper/swipper_5.jpg",
];

export default function TheLandingPage() {
  return (
    <div className="flex flex-col w-full justify-start items-center">
      <div data-aos="fade-up" className="w-full">
        <Carousel autoplay>
          {DEFINE_IMG_CAROUSEL.map((item) => (
            <img
              key={item}
              className="w-full h-[480px] object-cover"
              src={item}
            />
          ))}
        </Carousel>
      </div>
      <div
        data-aos="fade-down"
        className="container space-y-12 mt-10 flex flex-col w-full justify-start items-center relative"
      >
        <div className="bg-white rounded-lg py-5 px-10 flex flex-row justify-between items-end shadow-lg w-max space-x-5">
          <div className="flex flex-col space-y-3">
            <label className="text-base font-medium">
              Ngày nhận và trả phòng
            </label>
            <DatePicker.RangePicker
              placeholder={["Chọn ngày nhận", "Chọn ngày trả"]}
              className="h-[45px] w-[300px]"
              format="DD/MM/YYYY"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="text-base font-medium">Số phòng</label>
            <Input
              className="h-[45px]"
              prefix={<HomeOutlined className="me-2" />}
              placeholder="Nhập số phòng"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="text-base font-medium">
              Thêm mã khuyến mãi / Vocher
            </label>
            <Input
              className="h-[45px]"
              prefix={<EuroCircleOutlined className="me-2" />}
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
        <div className="w-full grid grid-cols-4 gap-5 px-24">
          {DEFINE_ICON_SLOGAN.map((item) => (
            <div
              key={item.text}
              className="flex flex-row justify-start items-start space-x-5 transform-hover hover:text-yellow-600 hover:cursor-pointer"
            >
              <img className="w-12 h-12" src={item.icon} />
              <p className="text-lg font-medium max-w-[180px] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-center space-y-10 !mt-20">
          <h2 className="text-5xl font-bold uppercase text-red-600">
            KHÁCH SẠN 3 SAO
          </h2>
          <span className="text-lg font-medium max-w-[960px] text-justify">
            Khai trương khách sạn Phượng Hoàng 2 tất cả các trang thiết bị mới.
            Nội thất bàn ghế của Khách Sạn được đóng bằng gỗ quý Gỗ Gõ Đỏ với
            bàn tay chạm khắc dát vàng của các nghệ nhân Công Ty Đồ Gỗ Hiền
            Oanh. Trang thiết bị trong phòng sử dụng các thương hiệu nổi tiếng
            như : Panasonic, Daikin, Toto, thang máy Hyundai cao cấp…
          </span>
          <span className="text-lg font-medium max-w-[960px] text-justify">
            Với ưu điểm mặt tiền đường Hồ Xuân Hương đón toàn bộ gió biển, 130
            phòng cao cấp, khách sạn được thiết kế theo tiêu chuẩn quốc tế và
            được trang trí theo phong cách Hoàng Gia sang trọng, quý phái. Khách
            sạn được các du khách trong và ngoài nước biết đến bởi sự đa dạng về
            dịch vụ, hệ thống phòng nghỉ sang trọng và phong cách phục vụ chuyên
            nghiệp mang đến cho quý khách sự hài lòng trong suốt thời gian lưu
            trú tại khách sạn..
          </span>
        </div>
        <div className="max-w-[1000px]">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {DEFINE_SWIPER_IMG.map((item) => (
              <SwiperSlide key={item}>
                <img src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-cols-2 gap-x-10 !mt-20">
          <div className="flex flex-col justify-start items-start space-y-10">
            <h2 className="text-5xl font-bold uppercase text-red-600">
              Khách Sạn Phượng Hoàng 2
            </h2>
            <span className="text-lg font-medium max-w-[960px] text-justify">
              Có vị trí tuyệt đẹp để ngắm biển và tận hưởng những cơn gió biển
              trong lành thoáng mát. Đến với Khách sạn Phượng Hoàng 2, được đắm
              mình trong một cuộc sống hoàng gia với đầy đủ thiết bị tiện nghi,
              dịch vụ chuyên nghiệp, chất lượng hàng đầu mà còn cảm nhận được
              bầu không khí ấm cúng, thoải mái và dễ chịu, thân thuộc như ngay
              tại gia đình của mình
            </span>
            <span className="text-lg font-medium max-w-[960px] text-justify">
              Ngay tại đây, bạn có thể thưởng thức những món ăn đặc biệt mang
              hương vị thơm ngon nhất theo phong cách Á Âu được chế biến từ
              những nguyên liệu tươi ngon nhất trải qua quá trình kiểm tra
              nghiêm ngặt đảm bảo vệ sinh an toàn thực phẩm, dưới đôi tay khéo
              léo của đội ngũ đầu bếp dày dặn kinh nghiệm.
            </span>
          </div>
          <iframe
            width="100%"
            height="460"
            src="https://www.youtube.com/embed/1YQfLwbB52A"
            title="KHÁCH SẠN 3 SAO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid grid-cols-2 gap-x-10 !mt-20">
          <div className="flex flex-col justify-start items-start space-y-10">
            <h2 className="text-5xl font-bold uppercase text-red-600">
              DỊCH VỤ TỐT
            </h2>
            <span className="text-lg font-medium max-w-[960px] text-justify">
              Phượng Hoàng Hotel hiểu tầm quan trọng của việc đặt khách hàng, sự
              hài lòng của khách hàng lên hàng đầu và lấy đó làm cơ sở để phục
              vụ khách hàng . Dịch vụ của khách sạn là sự tối ưu khả năng, nguồn
              lực để mang lại sự hài lòng tới quý khách.
            </span>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col justify-start items-start space-y-10">
            <h2 className="text-5xl font-bold uppercase text-red-600">
              ĐỘI NGŨ NHÂN VIÊN CHUYÊN NGHIỆP
            </h2>
            <span className="text-lg font-medium max-w-[960px] text-justify">
              Khách Sạn Phượng Hoàng tự hào đội ngũ nhân viên chăm sóc khách
              hàng trẻ trung, năng động, chuyên nghiệp và có trình độ.Nhân viên
              của chúng tôi sẽ luôn hướng dẫn và cung cấp cho khách hàng những
              thông tin hữu ích với sự nhiệt tình và thân thiện nhất. Với phương
              châm “Mỗi khách hàng là một người bạn”,Phượng Hoàng hotel luôn
              quan tâm tới nhu cầu của khách hàng chu đáo..
            </span>
          </div>
          <div className="flex flex-col justify-start items-start space-y-10">
            <h2 className="text-5xl font-bold uppercase text-red-600">
              PHÒNG NGHỈ
            </h2>
            <span className="text-lg font-medium max-w-[960px] text-justify">
              Phòng của chúng tôi chào đón Quý khách bởi không gian rộng mở và
              phong cách trang trí tinh tế. Từ cửa sổ của mỗi gian phòng bạn có
              thể ngắm nhìn phong cảnh xung quanh hay cảm nhận cuộc sống hối hả
              của người dân nơi đây. Không gian tĩnh lặng cùng chiếc giường êm
              ái sẽ ru bạn vào giấc ngủ ngon và thức dậy tràn đầy năng lượng..
            </span>
          </div>
          <div></div>
        </div>
        <h1 className="text-5xl font-bold uppercase text-red-600 !mb-12">
          Đặt phòng ngay để nhận ưu đãi
        </h1>
      </div>
    </div>
  );
}
