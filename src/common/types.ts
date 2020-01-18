interface SubPage {
  url: string;
  name: string;
}

export interface HeaderProps {
  collapsed?: boolean;
  toggleSidebar: (visible: boolean) => void;
  subPages?: SubPage[];
}

export interface MainLayoutProps {
  children: React.ReactNode;
  headerVisible?: boolean;
  headerCollapsed?: boolean;
  subPages?: SubPage[];
}

export interface ProfilePictureProps {
  figure?: string;
}

export interface SidebarProps {
  toggleSidebar: (visible: boolean) => void;
}

export interface BackdropProps {
  toggleSidebar: (visible: boolean) => void;
}

export interface FriendlistItemProps {
  user: { username: string; look: string | undefined; isOnline: boolean };
}
