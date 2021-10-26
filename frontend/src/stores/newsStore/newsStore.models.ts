import User from '../userStore/userStore.models';

export type Commentary = {
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
  createdAt?: string,
  image?: string,
  views: User[] | [],
  likes: User[] | [],
  comments: Commentary[] | [],
  author?: User
};
