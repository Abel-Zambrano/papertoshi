import {
  AiFillSignal,
  AiFillPieChart,
  AiFillInfoCircle,
  AiOutlineRetweet,
} from "react-icons/ai";

const links: any[] = [
  {
    id: 1,
    name: "market",
    url: "/market",
    logo: <AiFillSignal />,
  },
  {
    id: 2,
    name: "trade",
    url: "/trade",
    logo: <AiOutlineRetweet />,
  },
  {
    id: 3,
    name: "portfolio",
    url: "/portfolio",
    logo: <AiFillPieChart />,
  },
  {
    id: 4,
    name: "about",
    url: "/about",
    logo: <AiFillInfoCircle />,
  },
];

export default links;
