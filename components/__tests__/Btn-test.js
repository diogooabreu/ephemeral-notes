import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Btn from '../Btn'; 

describe('Btn', () => {
  it('should render correctly with the given title', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Btn title="Clique Aqui" onPress={mockOnPress} />);

    expect(getByText('Clique Aqui')).toBeTruthy();
  });

  it('should call the onPress function when pressed', () => {
    const mockOnPress = jest.fn(); 
    const { getByText } = render(<Btn title="Pressionar" onPress={mockOnPress} />);

    fireEvent.press(getByText('Pressionar'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});