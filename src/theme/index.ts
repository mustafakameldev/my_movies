import {getLocalStorage} from '@utils/localStorage';
import {lightTheme} from './light';
import {darkTheme} from './dark';

const getColor = () => {
  const theme: string = getLocalStorage('theme');
  if (theme === 'light') return lightTheme.colors;

  return darkTheme.colors;
};

export const themeColor = getColor();
