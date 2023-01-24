export interface UserAPI {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export interface LocationState {
  search: string;
}
