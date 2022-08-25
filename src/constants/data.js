import images from "./images";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  BsShopWindow,
  BsBank,
  BsFillCalendarCheckFill,
  BsCheck,
  BsCalendar2Week,
  BsKanban,
} from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { TbFileInvoice } from "react-icons/tb";
import { FaUser, FaShoppingCart, FaInbox } from "react-icons/fa";

const data = {
  user: {
    name: "Jorge",
    avatar: images.avatar,
  },
  dashboard: {
    modules: [
      {
        title: "General",
        options: [
          {
            title: "App",
            section: "app",
            link: "app",
            icon: <MdOutlineSpaceDashboard size={24} />
          },
          {
            title: "E-Commerce",
            section: "ecommerce",
            link: "ecommerce",
            icon: <BsShopWindow size={24} />
          },
          {
            title: "Analytics",
            section: "analytics",
            link: "analytics",
            icon: <IoMdAnalytics size={24} />
          },
          {
            title: "Banking",
            section: "banking",
            link: "banking",
            icon: <BsBank size={24} />
          },
          {
            title: "Booking",
            section: "booking",
            link: "booking",
            icon: <BsFillCalendarCheckFill size={24} />
          },
        ],
      },
      {
        title: "Management",
        section: "management",
        options: [
          {
            title: "User",
            section: "user",
            link: 'user',
            icon: <FaUser size={24} />,
            subOptions: [
              {
                title: "Profile",
                section: "profile",
                link: "user/profile",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Cards",
                section: "cards",
                link: "user/cards",
                icon: <BsCheck size={12} />,
              },
              {
                title: "List",
                section: "list",
                link: "user/list",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Create",
                link: "user/create",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Edit",
                link: "user/edit",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Accout",
                link: "user/account",
                icon: <BsCheck size={12} />,
              },
            ],
          },
          {
            title: "E-Commerce",
            link: 'e-commerce',
            section: 'e-commerce',
            icon: <FaShoppingCart size={24} />,
            subOptions: [
              {
                title: "Shop",
                link: "e-commerce/shop",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Product",
                link: "e-commerce/product",
                icon: <BsCheck size={12} />,
              },
              {
                title: "List",
                link: "e-commerce/list",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Create",
                link: "e-commerce/create",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Edit",
                link: "e-commerce/edit",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Checkout",
                link: "e-commerce/checkout",
                icon: <BsCheck size={12} />,
              },
            ],
          },
          {
            title: "Invoice",
            link: 'invoice',
            section: 'invoice',
            icon: <TbFileInvoice size={24} />,
            subOptions: [
              {
                title: "List",
                link: "invoice/list",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Details",
                link: "invoice/details",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Create",
                link: "invoice/create",
                icon: <BsCheck size={12} />,
              },
              {
                title: "Edit",
                link: "invoice/edit",
                icon: <BsCheck size={12} />,
              },
            ],
          },
        ],
      },
      {
        title: "App",
        section: "app",
        options: [
          {
            title: "Mail",
            link: "mail",
            icon: <FaInbox size={24} />
          },
          {
            title: "Chat",
            link: "chat",
            icon: <IoChatbubblesSharp size={24} />,
            hasNotifications: true,
            notifications: 50,
          },
          {
            title: "Calendar",
            link: "calendar",
            icon: <BsCalendar2Week size={24} />
          },
          {
            title: "Kanban",
            link: "kanban",
            icon: <BsKanban size={24} />
          },
        ],
      },
    ],
  },
  modulesv2: [
    {
      title: "App",
      section: "app",
      path: "app",
      icon: <MdOutlineSpaceDashboard size={24} />
    },
    {
      title: "E-Commerce",
      section: "ecommerce",
      path: "ecommerce",
      icon: <BsShopWindow size={24} />
    },
    {
      title: "Analytics",
      section: "analytics",
      path: "analytics",
      icon: <IoMdAnalytics size={24} />
    },
    {
      title: "Banking",
      section: "banking",
      path: "banking",
      icon: <BsBank size={24} />
    },
    {
      title: "Booking",
      section: "booking",
      path: "booking",
      icon: <BsFillCalendarCheckFill size={24} />
    },
    {
      title: "User",
      section: "user",
      path: 'user',
      icon: <FaUser size={24} />,
      subNav: [
        {
          title: "Profile",
          section: "profile",
          path: "user/profile",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Cards",
          section: "cards",
          path: "user/cards",
          icon: <BsCheck size={12} />,
        },
        {
          title: "List",
          section: "list",
          path: "user/list",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Create",
          path: "user/create",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Edit",
          path: "user/edit",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Accout",
          path: "user/account",
          icon: <BsCheck size={12} />,
        },
      ],
    },
    {
      title: "E-Commerce",
      path: 'e-commerce',
      section: 'e-commerce',
      icon: <FaShoppingCart size={24} />,
      subNav: [
        {
          title: "Shop",
          path: "e-commerce/shop",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Product",
          path: "e-commerce/product",
          icon: <BsCheck size={12} />,
        },
        {
          title: "List",
          path: "e-commerce/list",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Create",
          path: "e-commerce/create",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Edit",
          path: "e-commerce/edit",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Checkout",
          path: "e-commerce/checkout",
          icon: <BsCheck size={12} />,
        },
      ],
    },
    {
      title: "Invoice",
      path: 'invoice',
      section: 'invoice',
      icon: <TbFileInvoice size={24} />,
      subNav: [
        {
          title: "List",
          path: "invoice/list",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Details",
          path: "invoice/details",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Create",
          path: "invoice/create",
          icon: <BsCheck size={12} />,
        },
        {
          title: "Edit",
          path: "invoice/edit",
          icon: <BsCheck size={12} />,
        },
      ],
    },
    {
      title: "Mail",
      path: "mail",
      icon: <FaInbox size={24} />
    },
    {
      title: "Chat",
      path: "chat",
      icon: <IoChatbubblesSharp size={24} />,
      hasNotifications: true,
      notifications: 50,
    },
    {
      title: "Calendar",
      path: "calendar",
      icon: <BsCalendar2Week size={24} />
    },
    {
      title: "Kanban",
      path: "kanban",
      icon: <BsKanban size={24} />
    }
]
};

export default data;
