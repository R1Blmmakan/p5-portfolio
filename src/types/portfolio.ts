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
  status: string;
  statusClass: string;
  issuer?: string;
  year?: string;
}

export interface CategoryDetails {
  topIndex: string;
  topTitle: string;
  topProgress: string;
  rows: DetailRow[];
  bottomTitle: string;
  bullets: string[];
}

export interface ResumeItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  rank: number;
  charImg: string;
  details: CategoryDetails;
}

export interface RoleInfo {
  text: string;
  color: string;
  border: string;
  accent: string;
}

export interface RevealInfo {
  title: string;
  desc: string;
  sub: string;
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
}
