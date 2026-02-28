export interface INavItem {
  name: string;
  path: string;
}

export interface INavMenu extends INavItem {
  submenu?: INavMenu[];
}

export interface ICollapseMenu {
  question: string;
  answer: string;
}

export interface ITabItem {
  name: string;
  path?: string;
}

export interface IBlogInfo {
  id: string;
  heading: string;
  image : string;
  altTag ? : string;
  by: string;
  date: string;
  tags: string;
  link : string;
}

export interface IBlogSearchParams {
  comment_id: number;
  per_page?: string;
}