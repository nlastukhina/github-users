import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { OfflineNotificationWatcher } from '@features/networkStatus/OfflineNotificationWatcher/OfflineNotificationWatcher';

export const Page: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <OfflineNotificationWatcher />
    </>
  );
};
