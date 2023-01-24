import React, { FC } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { UserAPI } from '@features/users/types';

export const UsersPage: FC = () => {
  const [usersList, setUserList] = React.useState<UserAPI[]>([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users' || '')
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <UsersList users={usersList} />
      </div>
    </>
  );
};
