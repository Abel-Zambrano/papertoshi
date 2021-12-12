import {
  RiBarChartFill,
  RiArrowLeftRightFill,
  RiPieChart2Fill,
  RiInformationFill,
  RiSendPlaneFill,
} from "react-icons/ri";

const links: any[] = [
  {
    id: 1,
    name: "market",
    url: "/market",
    logo: <RiBarChartFill />,
  },
  {
    id: 2,
    name: "trade",
    url: "/trade",
    logo: <RiArrowLeftRightFill />,
  },
  {
    id: 3,
    name: "portfolio",
    url: "/portfolio",
    logo: <RiPieChart2Fill />,
  },
  {
    id: 4,
    name: "about",
    url: "/about",
    logo: <RiInformationFill />,
  },
  {
    id: 5,
    name: "contact",
    url: "/contact",
    logo: <RiSendPlaneFill />,
  },
];

export default links;
