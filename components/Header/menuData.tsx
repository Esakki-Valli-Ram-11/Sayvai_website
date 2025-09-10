import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Products",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 4,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Retail and E-commerce",
        path: "/Finance&account",
        newTab: false,
      },
      {
        id: 42,
        title: "AutoCAD Industry",
        path: "/Fashion_Industry",
        newTab: false,
      },
      {
        id: 46,
        title: "Digital Marketing",
        path: "https://sayvaidigital.netlify.app/",
        newTab: true,
      },
      {
        id: 47,
        title: "Sales And Support",
        path: "/Sales&Support",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Our Teams",
    path: "/team",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
