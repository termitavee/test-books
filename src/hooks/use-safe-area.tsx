import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DeviceUtils } from 'src/utils/device';
export { SafeAreaView, SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

export const useSafeArea = () => {
  const { top: topDef, left, right, bottom } = useSafeAreaInsets();
  const top = (DeviceUtils.isAndroid ? StatusBar.currentHeight : topDef) || 20;
  return {
    insets: { top, left, right, bottom },
    margin: { marginTop: top, marginLeft: left, marginRight: right, marginBottom: bottom },
    padding: { paddingTop: top, paddingLeft: left, paddingRight: right, paddingBottom: bottom },
  };
};
