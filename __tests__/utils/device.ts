import { DeviceUtils } from 'src/utils/device';
jest.useFakeTimers();

const { canOpenURL, isAndroid, isIos, isMacos, isMobile, isWeb, isWindows, openUrl } = DeviceUtils;
describe('DeviceUtils', () => {
  test('canOpenURL', () => {
    expect(canOpenURL('')).resolves.toBe(false);
    expect(canOpenURL('http://guthib.com')).resolves.toBe(true);
  });
  test('openUrl', () => {
    expect(openUrl('')).resolves.toBe(false);
    expect(openUrl('http://guthib.com')).resolves.toBe(true);
  });

  test('is X device ', () => {
    expect(isAndroid).toBe(false);
    expect(isIos).toBe(true);
    expect(isMacos).toBe(false);
    expect(isWeb).toBe(false);
    expect(isMobile).toBe(true);
    expect(isWindows).toBe(false);
  });
});
