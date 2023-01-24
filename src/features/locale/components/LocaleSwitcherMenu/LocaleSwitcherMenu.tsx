import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Locale } from '@features/locale/types';
import './LocaleSwitcherMenu.css';

interface Props {
  selectedLocale: Locale;
  onChangeLocale: (value: Locale) => any;
  className?: string;
}

export const LocaleSwitcherMenu: FC<Props> = ({ selectedLocale, onChangeLocale, className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('locale-switcher-menu', className)}>
      <button className="locale-switcher-menu__option" onClick={() => onChangeLocale(Locale.ru)}>
        <span
          className={classNames('locale-switcher-menu__text', {
            'locale-switcher-menu__check': selectedLocale === Locale.ru,
          })}
          aria-label={selectedLocale === Locale.ru ? t('locale_selected') : ''}
        >
          Русский
        </span>
      </button>
      <button className="locale-switcher-menu__option" onClick={() => onChangeLocale(Locale.en)}>
        <span
          className={classNames('locale-switcher-menu__text', {
            'locale-switcher-menu__check': selectedLocale === Locale.en,
          })}
          aria-label={selectedLocale === Locale.en ? t('locale_selected') : ''}
        >
          English
        </span>
      </button>
    </div>
  );
};
