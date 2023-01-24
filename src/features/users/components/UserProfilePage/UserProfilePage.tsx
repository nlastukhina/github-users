import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Repos, UserAPI } from '@features/users/types';
import './UserProfilePage.css';

export const UserProfilePage: FC = () => {
  const { t } = useTranslation();
  const { id }: { id?: string } = useParams();
  const [user, setUser] = React.useState<UserAPI | null>(null);
  const [repos, setRepos] = React.useState<Repos[] | null>(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then(setUser);

    fetch(`https://api.github.com/users/${id}/repos`)
      .then((response) => response.json())
      .then(setRepos);
  }, [id]);

  return (
    <>
      <div className="container">
        <section className="user-profile" aria-label={t('user_profile_user_section_aria_label')}>
          <div className="user-profile__image-container">
            <img className="user-profile__image" src={user?.avatar_url} alt={user?.login + ' profile photo'} />
          </div>
          <div className="user-profile__content">
            <h1 className="user-profile__title">
              {user?.name}, <span className="user-profile__accent">{user?.login}</span>
            </h1>
            <p className="user-profile__text">
              <span className="user-profile__accent">{user?.followers}</span>{' '}
              {t('user_followers', { count: user?.followers })} ·{' '}
              <span className="user-profile__accent">{user?.following}</span>{' '}
              {t('user_following', { count: user?.following })} ·{' '}
              <a href={user?.blog} className="link">
                {user?.blog}
              </a>
            </p>
          </div>
        </section>

        <section className="repository-list" aria-label={t('user_profile_repositories_section_aria_label')}>
          <div className="repository-list__header">
            <h2 className="repository-list__title">{t('user_profile_repositories_title')}</h2>
            <a
              href={`https://github.com/${user?.login}?tab=repositories`}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {t('user_profile_all_repositories_link')}
            </a>
          </div>

          <div className="repository-list__container">
            {repos?.slice(0, 6).map((repo) => (
              <article className="repository-list__item" key={repo.id}>
                <h3 className="repository-list__item-title">
                  <a href={repo.html_url} className="link">
                    {repo.name}
                  </a>
                </h3>
                <p className="repository-list__item-text">{repo.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
