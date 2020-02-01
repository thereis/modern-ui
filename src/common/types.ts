interface SubPage {
  url: string;
  name: string;
}

export interface MainLayoutProps {
  children: React.ReactNode;
  headerVisible?: boolean;
  subPages?: SubPage[];
}

export interface ProfilePictureProps {
  figure?: string;
}

export interface BackdropProps {
  toggleSidebar: (visible: boolean) => void;
}

export interface FriendlistItemProps {
  user: { username: string; look: string | undefined; isOnline: boolean };
}

export interface NewsCategory {
  id: string;
  name: string;
  selected: boolean;
  color: string;
}

export interface NewsCatButtonProps {
  newsCategory: NewsCategory;
  toggleCategory: (selectedCategory: NewsCategory) => void;
}
