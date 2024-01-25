import { Icon } from '@iconify/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export const SidebarData = [
  {
    title: "Branch Mgmt",
    icon: <Icon icon="solar:shop-linear" style={{ fontSize: '24px' }} />,
    link: "/branchmgmt",
    arrowicon: <ArrowDropDownIcon />,
    subItems: [
      {
        title: "Adjust Branch",
        link: "/adjustbranch",
      },
      {
        title: "Accounts",
        link: "/accounts",
      },
    ],
  },
  {
    title: "Inventory Mgmt",
    icon: <Icon icon="carbon:inventory-management" style={{ fontSize: '24px' }} />,
    link: "/inventorymgmt",
    arrowicon: <ArrowDropDownIcon />,
    subItems: [
      {
        title: "Products",
        link: "/products",
      },
      {
        title: "Suppliers",
        link: "/suppliers",
      },
      {
        title: "Good Receive",
        link: "/goodreceive",
      },
      {
        title: "Stock Balance",
        link: "/stockbalance",
      },
      {
        title: "Stock Transfer",
        link: "/stocktransfer",
      },
      {
        title: "Stock Return",
        link: "/stockreturn",
      },
      {
        title: "Check Price",
        link: "/Checkprice",
      },
    ],
  },
  {
    title: "Billing",
    icon: <Icon icon="solar:bill-check-linear" style={{ fontSize: '24px' }} />,
    link: "/billing",
    arrowicon: <ArrowDropDownIcon />,
    subItems: [
      {
        title: "Sale",
        link: "/sale",
      },
      {
        title: "Work List",
        link: "/worklist",
      },
    ],
  },
  {
    title: "Online Orders",
    icon: <Icon icon="tdesign:shop" style={{ fontSize: '24px' }} />,
    link: "/onlineorders",
    subItems: [],
    arrowicon: null, // Add this line to remove the arrow icon
  },
  {
    title: "Web Mgmt",
    icon: <Icon icon="lucide:webhook" style={{ fontSize: '24px' }} />,
    link: "/webmgmt",
    subItems: [],
    arrowicon: null, // Add this line to remove the arrow icon
  },
  {
    title: "Reporting",
    icon: <Icon icon="mdi:chart-donut" style={{ fontSize: '24px' }} />,
    link: "/reporting",
    subItems: [],
    arrowicon: null, // Add this line to remove the arrow icon
  },
]