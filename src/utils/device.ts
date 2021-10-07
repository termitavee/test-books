import { Platform, Linking } from 'react-native';

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';
const isMacos = Platform.OS === 'macos';
const isWindows = Platform.OS === 'windows';

const isMobile = isAndroid || isIos;

const canOpenURL = (url: string) => Linking.canOpenURL(url);

const openUrl = (url: string) => {
  return canOpenURL(url).then(() => {
    if (Platform.OS == 'web') window.open(url, '_blank');
    else Linking.openURL(url);
  });
};

export const DeviceUtils = {
  isWeb,
  isAndroid,
  isIos,
  isMacos,
  isWindows,
  isMobile,
  canOpenURL,
  openUrl,
};
