import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UserAPI } from '@features/users/types';
import './UsersList.css';
import { UserItem } from '@features/users/components/UserItem/UserItem';

interface Props {
  users: UserAPI[];
}

export const UsersList: FC<Props> = ({ users }) => {
  const { t } = useTranslation();
  return (
    <section className="users-list" aria-label={t('user_list_users_section_aria_label')}>
      {users?.map((user: UserAPI) => (
        <UserItem user={user} key={user.id} />
      ))}
    </section>
  );
};
