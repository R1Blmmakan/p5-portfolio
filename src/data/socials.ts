import { SocialItem } from "../types/portfolio";

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "email",
    label: "DIRECT EMAIL",
    channelNum: "CH-01",
    categoryTitle: "PRIMARY EMAIL CONTACT",
    description: "Direct communication channel for engineering opportunities, 2026 apprenticeships, project collaborations, and general inquiries.",
    handle: "fikripricahyadi10@gmail.com",
    href: "mailto:fikripricahyadi10@gmail.com",
    stats: [
      { tag: "STATUS", value: "OPEN", color: "#ffea00" },
      { tag: "RESP", value: "<24H", color: "#00e1ff" },
    ],
    actionItems: [
      {
        id: "copy-email",
        label: "COPY EMAIL ADDRESS",
        actionText: "fikripricahyadi10@gmail.com",
        badge: "CLIPBOARD",
        badgeColor: "gold",
        type: "copy",
        copyText: "fikripricahyadi10@gmail.com",
      },
      {
        id: "mail-client",
        label: "DISPATCH VIA CLIENT",
        actionText: "Launch Default Mail Client",
        url: "mailto:fikripricahyadi10@gmail.com",
        badge: "DIRECT MAIL",
        badgeColor: "red",
        type: "link",
      },
    ],
    isEmail: true,
  },
  {
    id: "github",
    label: "GITHUB REPOSITORIES",
    channelNum: "CH-02",
    categoryTitle: "OPEN SOURCE & SOURCE CODE",
    description: "Public repositories featuring production TypeScript applications, clean architecture implementations, and full-stack systems.",
    handle: "@R1Blmmakan",
    href: "https://github.com/R1Blmmakan",
    stats: [
      { tag: "GIT", value: "ACTIVE", color: "#ffea00" },
      { tag: "LANG", value: "TS/JS", color: "#ffffff" },
    ],
    actionItems: [
      {
        id: "repo-p5",
        label: "PORTFOLIO REPOSITORY",
        actionText: "github.com/R1Blmmakan/p5-portfolio",
        url: "https://github.com/R1Blmmakan/p5-portfolio",
        badge: "FEATURED",
        badgeColor: "gold",
        type: "link",
      },
      {
        id: "repo-all",
        label: "ALL PUBLIC REPOSITORIES",
        actionText: "Browse All Source Archives",
        url: "https://github.com/R1Blmmakan?tab=repositories",
        badge: "ACTIVE",
        badgeColor: "cyan",
        type: "link",
      },
      {
        id: "profile-gh",
        label: "GITHUB PROFILE",
        actionText: "View Developer Profile",
        url: "https://github.com/R1Blmmakan",
        badge: "PROFILE",
        badgeColor: "red",
        type: "link",
      },
    ],
  },
  {
    id: "instagram",
    label: "INSTAGRAM PROFILE",
    channelNum: "CH-03",
    categoryTitle: "VISUAL LOG & CREATIVE UI",
    description: "Behind-the-scenes engineering logs, design prototypes, and vocational journey highlights.",
    handle: "@r1_lupanama",
    href: "https://instagram.com/r1_lupanama",
    stats: [
      { tag: "ROLE", value: "CREATIVE", color: "#ffea00" },
      { tag: "FEED", value: "DEV", color: "#e60012" },
    ],
    actionItems: [
      {
        id: "insta-profile",
        label: "OPEN INSTAGRAM FEED",
        actionText: "instagram.com/r1_lupanama",
        url: "https://instagram.com/r1_lupanama",
        badge: "DISPATCH",
        badgeColor: "red",
        type: "link",
      },
    ],
  },
  {
    id: "tiktok",
    label: "TIKTOK TECH FEED",
    channelNum: "CH-04",
    categoryTitle: "TECH SHOWCASES & SHORT CLIPS",
    description: "Short-form tech showcases, motion UI snippets, and rapid frontend engineering demos.",
    handle: "@fikri",
    href: "https://tiktok.com",
    stats: [
      { tag: "TAG", value: "TECH", color: "#00e1ff" },
      { tag: "MODE", value: "CLIPS", color: "#e60012" },
    ],
    actionItems: [
      {
        id: "tiktok-profile",
        label: "OPEN TIKTOK PROFILE",
        actionText: "tiktok.com/@fikri",
        url: "https://tiktok.com",
        badge: "CLIPS",
        badgeColor: "cyan",
        type: "link",
      },
    ],
  },
];

export const SOCIALS_CONFIG = {
  location: "JONGGOL, ID",
  statusBadge: "STATUS: ONLINE & RESPONSIVE",
  targetTag: "[TARGET]",
  targetValue: "OPEN FOR OJT 2026",
  speechRibbon: "How would you like to connect today?",
  footerMeta: "PORTFOLIO CONTACT // FIKRI • JONGGOL, ID",
  footerStatus: "AVAILABLE FOR 2026 APPRENTICESHIP"
};

