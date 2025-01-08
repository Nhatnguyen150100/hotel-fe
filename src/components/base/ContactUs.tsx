function ContactItem({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      className="flex flex-col justify-center items-center space-y-1"
      href={href}
      target="_blank"
    >
      <img className="rotate-animate " src={icon} height={16} width={16} alt={label} />
      <span className="text-red-600 text-sm font-medium">{label}</span>
    </a>
  );
}

export default function ContactUs() {
  const DEFINE_DATA = [
    {
      label: "Điện thoại",
      icon: "/contact-us/phone.png",
      href: "tel:0987654321",
    },
    {
      label: "Nhắn tin",
      icon: "/contact-us/sms.png",
      href: "sms:0987654321",
    },
    {
      label: "Chat zalo",
      icon: "/contact-us/zalo.png",
      href: "https://zalo.me/0945.293.201",
    },
    {
      label: "Facebook",
      icon: "/contact-us/messenger.png",
      href: "https://www.facebook.com/khachsanphuonghoangsamson",
    },
  ];

  return (
    <div className="max-w-[620px] flex flex-row justify-between items-center p-3 bg-white space-x-3">
      {DEFINE_DATA.map((item) => (
        <ContactItem {...item} key={item.label} />
      ))}
    </div>
  );
}
