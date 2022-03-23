import React, { createContext, useContext, useState } from 'react';
import { SnackbarNotification } from '@super-rad-poc/common/models';

const NotificationContext = createContext([{}, () => {}]);

export const NotificationProvider = ({
  children,
}: React.PropsWithChildren<{
  notifications: SnackbarNotification[];
  setNotifications: (notifications: SnackbarNotification[]) => void;
}>) => {
  const [notifications, setNotifications] = useState([]);

  return (
    <NotificationContext.Provider value={useState(notifications)}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const [notifications, setNotifications] = useContext(NotificationContext);
  return {
    notifications,
    setNotifications,
  };
};
