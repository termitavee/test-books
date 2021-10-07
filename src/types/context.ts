export type themeType = 'light' | 'dark';
export type languageType = 'es' | 'en';

export interface IContext {
  themeContext: themeType;
  set: {
    theme: (newTheme: themeType) => void;
  };
}
