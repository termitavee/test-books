import mockClipboard from '@react-native-clipboard/clipboard/jest/clipboard-mock.js';

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper', () => mockAnimated);
// import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);
