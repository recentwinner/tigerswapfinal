import noop from "lodash/noop";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
// import { HomeIcon, TradeIcon, FarmIcon, PoolIcon, TwitterIcon, TelegramIcon, ShopIcon, InfoIcon, HandshakeIcon,
//   MoreboxIcon, TigerarmyIcon, TigervaultIcon, TigerbankIcon, TicketIcon, NftIcon, TigerdaoIcon, TigerpadIcon
// } from "./icons";

import {
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
} from "../../components/Svg";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};


export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    items: [
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
      {
        label: "Charts",
        href: "/charts",
        iconName: "Chart",
        isMobileOnly: true,
      },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: "Earn",
        href: "/earn",
      },
      {
        label: "Yield Farms",
        href: "/farms",
      },
      {
        label: "Syrup pools",
        href: "/pools",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: "Win",
        href: "/",
      },
      {
        label: "Predictions",
        href: "/",
        status: status.LIVE,
      },
      {
        label: "Lottery",
        href: "/",
      },
    ],
  },
  // {
  //   label: "",
  //   href: "/",
  //   icon: MoreIcon,
  //   items: [
  //     {
  //       label: "Info & Analytics",
  //       href: "/",
  //     },
  //     {
  //       label: "IFO Token Sales",
  //       href: "/",
  //       status: status.SOON,
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: "NFT Collectibles",
  //       href: "/",
  //     },
  //     {
  //       label: "Team Leaderboard",
  //       href: "/",
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: "Blog",
  //       href: "/",
  //     },
  //     {
  //       label: "Docs & Guides",
  //       href: "/",
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
];


export const sidelinks = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.tigerswap.global/',
  },
  {
    label: 'Tiger Dex',
    icon: 'TradeIcon',
    href: '/swap',
    items: [
      {
        label: 'v2 Exchange',
        href: '/swap',  // /swap
      },
      {
        label: 'Limit Order',
        href: '/limit-orders',
      },
      {
        label: 'Liquidity',
        href: '/liquidity', 
      },
      {
        label: 'Perpetuals - Soon',
        href: '/perpetuals',
      },
      {
        label: 'v3 AMM - In Progress',
        href: '/v3AMM',  // /swap
      },
    ],
  },
  {
    label: 'Tiger Farms',
    icon: 'FarmIcon',
    href: 'https://app.tigerswap.global/farms', // /farms
  },
  {
    label: 'Tiger Staking',
    icon: 'PoolIcon',
    href: 'https://app.tigerswap.global/pools', //  /nests
  },
   {
     label: 'Tiger Vaults',
     icon: 'TigervaultIcon',
     href: '/tigervaults', // /pools
   },
   {
    label: 'Tiger Bank',
    icon: 'TigerbankIcon',
    href: '/tigerbank', // /bank
  },
   {
     label: 'Tiger Lottery',
     icon: 'TicketIcon',
     href: '/tigerlottery', // /lottery
   },
  //  {
  //   label: 'Tiger BET - Soon',
  //   icon: 'TigerbetIcon',
  //   href: '/bet', // /bet
  // },
  // {
  //   label: 'Tiger Games - Soon',
  //   icon: 'TigergamesIcon',
  //   href: '/game', // /games
  // },
   {
     label: 'Tiger NFTs (ESG)',
     icon: 'NftIcon',
     href: '/tigernft', // /nft
   },
  
   {
    label: 'Tiger DAO',
    icon: 'TigerdaoIcon',
    href: '/tigerdao', // /dao
  },

  {
    label: 'Tiger Pad',
    icon: 'TigerpadIcon',
    href: '/tigerpad', // /pad
  },

  {
    label: 'Market & Trades',
    icon: 'InfoIcon',
    href: '/coingecko',
    items: [
      // {
      //   label: 'PancakeSwap',
      //   href: '/pancakeswap',
      // },
      {
        label: 'View on CoinGecko',
        href: '/coingecko',
      },
      {
        label: 'View on CoinMarketCap',
        href: '/coinmarketcap',
      },
      {
        label: 'CEX listing - Soon',
        href: '/cexlisting',
      },
      // {
      //   label: 'Trade on Bittrue-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Hotbit-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Probit-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Gate.io-Soon',
      //   href: '#',
      // },
    ],
  },
  {
    label: 'Join Tiger Army',
    icon: 'TigerarmyIcon',
    href: 'https://forms.gle/Rp1KVbQUcYm1JvY98',
    items: [
      {
        label: 'Apply as Dev',
        href: 'https://forms.gle/Rp1KVbQUcYm1JvY98',
        type: DropdownMenuItemType.EXTERNAL_LINK,
       
      },
      {
        label: 'Apply as Designer',
        href: 'https://forms.gle/MPQuFQReSHuhjfPm9',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Apply as NFT Artist',
        href: 'https://forms.gle/sKHPzxgTD6NL2tPr6',
      },
      {
        label: 'Apply as Influencer',
        href: 'https://forms.gle/28TE4PJGHnnA5PKp9',
      },
      {
        label: 'Marketing & Promos',
        href: 'https://forms.gle/bSwHYSYPyeaJkmTo7',
      },
      {
        label: 'Others',
        href: '/others',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreboxIcon',
    href: '/vote',
    items: [
      {
        label: 'Vote',
        href: '/vote',
      },
      {
        label: 'Website',
        href: 'https://tigerswap.global/',
       
      },
      {
        label: 'Tiger Documentation',
        href: 'https://docs.tigerswap.global/',
     
      },
      {
        label: 'Whitepaper',
        href: 'https://docs.tigerswap.global/fundamentals/tokenomics-and-techpaper',
      },
      {
        label: 'Audits',
        href: 'https://docs.tigerswap.global/useful-links/security-audits-and-addresses',  // https://www.tigerswapfinance.com/files/Audit.pdf
      },
      {
        label: 'Github',
        href: 'https://github.com/TigerSwapEx',
      },
      {
        label: 'Contact Us',
        href: 'https://docs.tigerswap.global/useful-links/contact-us',
      },
    ],
  },
  {
    label: 'Partnerships',
    icon: 'HandshakeIcon',
    href: 'https://forms.gle/vXLB1YfSJnJrURvR9',
   
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    href: '/info',
    items: [
      {
        label: 'Info',
        href: '/info',
      },
    ],
  },
  {
    label: 'Online Store',
    icon: 'ShopIcon',
    href: 'https://merch.tigerswap.global',
  },

  
];

export const socials = [
  {
    label: "Telegram",
    icon: 'TelegramIcon',
    items: [
      {
        label: "English",
        href: "https://t.me/TigerSwap_Ex",
      },
  
      {
        label: "Announcements",
        href: "https://t.me/TigerSwap_Ex_ann",
      },
      
    ],
  },
  {
    label: "Twitter",
    icon: 'TwitterIcon',
    href: "https://twitter.com/TigerSwap_Ex",
  },
];



export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://v2.app.tigerswap.global",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 70;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;



