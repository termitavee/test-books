import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import renderer from 'react-test-renderer';

import App from '../src/navigation/index';
jest.useFakeTimers();

// describe('Screen1', () => {
//   it('navigates on button press', () => {
//     const push = jest.fn();
//     const { getByText } = render(<App />);
//     // fireEvent.press(getByText('Go to Screen 2'));
//     // expect(push).toHaveBeenCalledWith('Screen2');
//   });
// });

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
