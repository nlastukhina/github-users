import React, { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleSwitcher } from '@features/locale/components/LocaleSwitcher/LocaleSwitcher';
import './Header.css';
import { useHistory, useLocation } from 'react-router-dom';
import { LocationState } from '@features/users/types';

export const Header: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation<LocationState>();
  const [searchValue, setSearchValue] = useState('');
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchValue.trim().length) {
      return;
    } else {
      history.push(`/search?query=${searchValue}`);
    }
  };

  let user = '';
  const path = location.pathname;

  if (path.match('/users/') != null) {
    user = path.slice(7);
  }

  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-list-item">
              <a href="/" className="header__navigation-link">
                {t('site_title')}
              </a>
            </li>
            {user && (
              <li className="header__navigation-list-item">
                <a className="header__navigation-link header__navigation-link--user">{user}</a>
              </li>
            )}
          </ul>
        </nav>

        <div className="header__actions">
          <LocaleSwitcher />
          <div className="header__search">
            <form className="header__search-form" onSubmit={onSubmit}>
              <input
                type="search"
                className="header__search-input"
                placeholder={t('search_global_input_placeholder')}
                value={searchValue}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
              />
              <button type="submit" className="header__search-button">
                {t('search_global_button_action')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
