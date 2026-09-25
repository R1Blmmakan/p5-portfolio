export interface TechAffinity {
  name: string;
  color: string;
  bg: string;
}

export interface ProjectItem {
  id: string;
  arcana: string;
  arcanaNum: string;
  title: string;
  category: string;
  status: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  desc: string;
  highlights: string[];
  techs: TechAffinity[];
}

export interface DetailRow {
  index: string;
  title: string;
  subtitle?: string;
  organization?: string;
  period?: string;
  badge?: string;
  badgeType?: "gold" | "red" | "dark" | "default";
  description?: string;
  bullets?: string[];
  tags?: string[];
  status?: string;
  statusClass?: string;
  issuer?: string;
  year?: string;
  credentialId?: string;
}

export interface CategoryDetails {
  topIndex: string;
  topTitle: string;
  topProgress: string;
  rows: DetailRow[];
  bottomTitle?: string;
  bullets?: string[];
}

export interface ResumeItem {
  id: string;
  badge: string;
  code?: string;
  title: string;
  subtitle: string;
  rank?: number;
  charImg: string;
  details: CategoryDetails;
}

export interface RoleInfo {
  text: string;
  color: string;
  border: string;
  accent: string;
}

export interface TacticalSpec {
  label: string;
  value: string;
  badge?: string;
  accent?: string;
}

export interface DialogueItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
  moodTag: string;
  quote: string;
}

export interface ChronicleChapter {
  numeral: string;
  tag: string;
  title: string;
  subtitle: string;
  affinity: string;
  accent: string;
  content: string[];
  specs: { label: string; value: string }[];
  tags: string[];
}

export interface RadarStat {
  label: string;
  value: number;
  grade: string;
}

export interface RevealInfo {
  title: string;
  desc: string;
  sub: string;
  specs?: TacticalSpec[];
  radarStats?: RadarStat[];
}

export interface AboutItem {
  id: string;
  tag: string;
  label: string;
  shortLabel: string;
  role: RoleInfo;
  portrait: string;
  reveal: RevealInfo;
}

export interface StatItem {
  tag: string;
  value: string;
  color: string;
}

export interface SocialActionItem {
  id: string;
  label: string;
  actionText: string;
  url?: string;
  badge: string;
  badgeColor?: "red" | "gold" | "cyan";
  type: "copy" | "link";
  copyText?: string;
}

export interface SocialItem {
  id: string;
  label: string;
  handle: string;
  href: string;
  icon: string;
  barIcon: string;
  bars: number;
  newBars: number[];
  counts: string[];
  links: string[];
  stats: StatItem[];
  isEmail?: boolean;
  categoryTitle?: string;
  description?: string;
  channelNum?: string;
  actionItems?: SocialActionItem[];
}

