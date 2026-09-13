import { SocialItem } from "../types/portfolio";

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "email",
    label: "DIRECT EMAIL",
    handle: "fikripricahyadi10@gmail.com",
    href: "mailto:fikripricahyadi10@gmail.com",
    icon: "✉️",
    barIcon: "/icon1.png",
    bars: 2,
    newBars: [0],
    counts: ["DIRECT", "FAST RESPONSE"],
    links: [
      "fikri.dev@gmail.com (Click to Copy)",
      "Send Mail via Client",
    ],
    stats: [
      { tag: "STATUS", value: "OPEN", color: "#ffea00" },
      { tag: "RESP", value: "<24H", color: "#00e1ff" },
    ],
    isEmail: true,
  },
  {
    id: "github",
    label: "GITHUB",
    handle: "@R1Blmmakan",
    href: "https://github.com/R1Blmmakan",
    icon: "💻",
    barIcon: "/icon1.png",
    bars: 3,
    newBars: [0],
    counts: ["FEATURED", "ACTIVE", "PROFILE"],
    links: [
      "github.com/R1Blmmakan/p5-portfolio",
      "github.com/R1Blmmakan?tab=repositories",
      "github.com/R1Blmmakan",
    ],
    stats: [
      { tag: "GIT", value: "ACTIVE", color: "#e8c100" },
      { tag: "LANG", value: "TS/JS", color: "#ffffff" },
    ],
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    handle: "@r1_lupanama",
    href: "https://instagram.com/r1_lupanama",
    icon: "📷",
    barIcon: "/icon2.png",
    bars: 2,
    newBars: [0],
    counts: ["FEED", "PROFILE"],
    links: [
      "instagram.com/r1_lupanama",
      "instagram.com/r1_lupanama",
    ],
    stats: [
      { tag: "ROLE", value: "CREATIVE", color: "#e1306c" },
      { tag: "FEED", value: "DEV", color: "#f77737" },
    ],
  },
  {
    id: "tiktok",
    label: "TIKTOK",
    handle: "@fikri",
    href: "https://tiktok.com",
    icon: "🎵",
    barIcon: "/icon3.png",
    bars: 2,
    newBars: [0],
    counts: ["REELS", "CREATIVE"],
    links: [
      "tiktok.com",
      "tiktok.com",
    ],
    stats: [
      { tag: "TAG", value: "TECH", color: "#00f2ea" },
      { tag: "MODE", value: "CLIPS", color: "#ff0050" },
    ],
  },
];
