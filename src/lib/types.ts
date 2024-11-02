export type NavLink = {
  name: string;
  hash: string;
  icon: string;
};

export type ExternalLink = {
  name: string;
  icon: string;
  href: string;
};

export type Skill = {
  name: string;
  icon: string;
  link?: string;
};

export type Project = {
  name: string;
  image: string;
  github: string;
  href: string;
  description: string;
  tags: string[];
};
