import React, { FC, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Page } from '@components/Page/Page';
import { UserProfilePage } from '@features/users/components/UserProfilePage/UserProfilePage';
import { UsersPage } from '@features/users/components/UsersPage/UsersPage';
import { UsersSearchPage } from '@features/users/components/UsersSearchPage/UsersSearchPage';

export const App: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Switch>
        <Route path="/users/:id">
          <Page>
            <UserProfilePage />
          </Page>
        </Route>
        <Route path="/search">
          <Page>
            <UsersSearchPage />
          </Page>
        </Route>
        <Route path="/users">
          <Page>
            <UsersPage />
          </Page>
        </Route>
        <Route path="/">
          <Page>
            <UsersPage />
          </Page>
        </Route>
      </Switch>
    </>
  );
};
