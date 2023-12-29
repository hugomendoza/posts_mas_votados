export interface PostProps {
  id: number;
  title: string;
  description: string;
  url: string;
  votes: number;
  writer_avatar_url: string;
  post_image_url: string;
}

export interface StoreProps {
  posts: PostProps[];
  ascendent: boolean;
  descendent: boolean;
}