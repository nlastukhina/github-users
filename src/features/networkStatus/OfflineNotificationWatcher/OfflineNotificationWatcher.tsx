import React, { FC } from 'react';
import { OfflineNotification } from '@components/OfflineNotification/OfflineNotification';
import { useNetworkStatusContext } from '@features/networkStatus/NetworkStatusContextProvider';
import { CSSTransition } from 'react-transition-group';
import './OfflineNotificationWatcher.css';

export const OfflineNotificationWatcher: FC = () => {
  const { online } = useNetworkStatusContext();
  return (
    <CSSTransition
      in={!online}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={300}
      classNames="offline-notification-animation"
    >
      <OfflineNotification />
    </CSSTransition>
  );
};
