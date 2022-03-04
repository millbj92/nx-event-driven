import { User } from './user.model';

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: User;
  authorId: string;
};
