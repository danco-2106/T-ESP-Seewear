import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../Screen/LoginScreen';

describe('LoginScreen', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<LoginScreen navigation={{ push }} />);
    fireEvent.press(getByText('Go To RegisterScreen'));
    expect(push).toHaveBeenCalledWith('RegisterScreen');
  });
});