import User from '../models/user';

export type Comment = {
  id: string,
  content: string,
  createdAt: string,
  author: User
};

export type News = {
  id: string,
  private: boolean,
  title: string,
  content: string,
  createdAt?: User,
  publicDate?: string,
  image?: string,
  views?: number,
  likes?: number,
  comments?: Array<Comment>,
  author?: string
};
