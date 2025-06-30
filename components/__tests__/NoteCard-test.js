import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NoteCard } from '../NoteCard';

describe('NoteCard', () => {
  
  const mockNote = {
    id: '1',
    title: 'Título da Minha Nota',
    content: 'Este é o conteúdo da minha nota de teste. Ela pode ser um pouco longa para testar o numberOfLines.',
  };

  it('should render the note title correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} />
    );

    expect(getByText(mockNote.title)).toBeTruthy();
  });

  it('should render the note content correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} />
    );

    expect(getByText(mockNote.content)).toBeTruthy();
  });

  it('should call the onPress function when the card is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} />
    );

    fireEvent.press(getByText(mockNote.title));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should not call the onPress function if not pressed', () => {
    const mockOnPress = jest.fn();
    render(
      <NoteCard note={mockNote} onPress={mockOnPress} />
    );

    expect(mockOnPress).not.toHaveBeenCalled();
  });
});

