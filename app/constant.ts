import { INavMenu } from "@/app/types";

export const nav_list: INavMenu[] = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "PRODUCTS",
    path: "#",
    submenu: [
      { name: "Invisible Grill", path: "/invisible-grill" },
      { name: "Metal Furniture", path: "/metal-furniture" },
      { name: "Metal Railing", path: "/metal-railing" },
      { name: "Metal Partition", path: "/metal-partition" },
      { name: "PVD Coated Grill", path: "/pvd-coated-grill" },
      { name: "PVD Metal Item", path: "/pvd-metal-item" },
      { name: "Motorized Pergola", path: "/european-motorised-pergola" },
      { name: "Awnings & Screens", path: "/awnings-screens" },
    ],
  },
  {
    name: "ABOUT US",
    path: "/about-us",
  },
  {
    name: "BLOGS",
    path: "/blog",
  },
  {
    name: "CONTACT US",
    path: "/contact-us",
  },
];
