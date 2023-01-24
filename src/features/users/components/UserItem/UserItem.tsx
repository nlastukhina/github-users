import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { UserAPI } from '@features/users/types';
import './UserItem.css';

interface Props {
  user: UserAPI;
}

export const UserItem: FC<Props> = ({ user }) => {
  const { t } = useTranslation();
  const [userData, setUserData] = React.useState<Partial<UserAPI>>({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${user.login}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData({ company: data.company, public_repos: data.public_repos });
      });
  }, []);

  return (
    <article className="user-item" aria-label={user.login} key={user.login}>
      <div className="user-image-container">
        <img className="user-item__image" src={user.avatar_url} alt={user.login + ' profile photo'} />
      </div>
      <div className="user-item__content">
        <h3 className="user-item__title">
          <Link to={`/users/${user.login}`} href="/" className="link">
            {user.login}
          </Link>
          , {userData.public_repos} {t('repository', { count: userData.public_repos })}
        </h3>
        <p className="user-item__text">{userData.company}</p>
      </div>
    </article>
  );
};
