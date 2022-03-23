import { User } from '@auth0/auth0-react';
import {
  SnackbarNotification,
  SnackbarProps,
} from '@super-rad-poc/common/models';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  token: string | undefined;
  user: User | undefined;
  setIsAuthenticated(auth: boolean): void;
  setToken(token: string | undefined): void;
  setUser(user: User | undefined): void;
}

interface NotificationState {
  notifications: SnackbarNotification[];
  addNotification: (notification: SnackbarProps) => void;
  removeNotification: (id: string) => void;
}

export const useStore = create<AuthState & NotificationState>(
  devtools((set, get) => ({
    isAuthenticated: false,
    token: undefined,
    user: undefined,
    notifications: [],

    setIsAuthenticated: (isAuthenticated: boolean) => {
      set((state) => ({ ...state, isAuthenticated }));
    },

    setToken: (token: string | undefined) => {
      set((state) => ({ ...state, token }));
    },

    setUser: (user: User | undefined) => {
      set((state) => ({ ...state, user }));
    },

    setNotifications: (notifications: SnackbarNotification[]) => {
      set((state) => ({ ...state, notifications }));
    },

    addNotification: (notification: SnackbarProps) => {
      set((state) => ({
        ...state,
        notifications: [...state.notifications, notification],
      }));
    },
    removeNotification: (id: string) => {
      set((state) => ({
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== id
        ),
      }));
    },
  }))
);
