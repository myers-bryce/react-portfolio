import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
// import { FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:brycemyengineer@gmail.com" },
  {
    id: 2,
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/in/myers-bryce/",
  },
  // { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+233557097546" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
