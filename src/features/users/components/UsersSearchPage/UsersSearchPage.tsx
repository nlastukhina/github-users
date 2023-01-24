import React, { FC } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { useTranslation } from 'react-i18next';
import { LocationState, UserAPI } from '@features/users/types';
import { useLocation } from 'react-router-dom';

export const UsersSearchPage: FC = () => {
  const { t } = useTranslation();
  const location = useLocation<LocationState>();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  const [usersList, setUserList] = React.useState<UserAPI[]>([]);
  const [searchParam, setSearchParam] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setSearchParam(params.get('query'));

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length == 0) {
          setLoading(false);
        } else {
          setUserList(data.items);
          setLoading(false);
        }
      });
  }, [query]);

  return (
    <>
      {loading && (
        <div className="container">
          <h1 className="title">{t('search_page_loading_message')}&hellip;</h1>
        </div>
      )}

      {!loading && (
        <>
          {usersList.length !== 0 && (
            <div className="container">
              <h1 className="title">
                {t('search_page_search_result_title')} {searchParam}
              </h1>
              <UsersList users={usersList} />
            </div>
          )}

          {!usersList.length && (
            <div className="container">
              <h1 className="title">
                {t('search_page_search_result_nothing_found_title')} {searchParam}
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
};
