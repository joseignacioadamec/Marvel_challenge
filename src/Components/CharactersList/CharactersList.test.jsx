import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { CharactersList } from './CharactersList';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

describe('CharactersList', () => {
  it('renders characters list correctly', () => {
    // Mocking AppContext value
    const mockContextData = {
      state: {
        viewFavorites: false,
        resultSearch: [
          {
            id: 1,
            name: 'Spider-Man',
            thumbnail: { path: 'path/to/image', extension: 'jpg' },
          },
          {
            id: 2,
            name: 'Iron Man',
            thumbnail: { path: 'path/to/image', extension: 'jpg' },
          },
        ],
        favoritesArray: [],
      },
    };

    // Renderiza el componente CharactersList dentro de BrowserRouter
    const { container } = render(
      <BrowserRouter>
        <AppContext.Provider value={mockContextData}>
          <CharactersList />
        </AppContext.Provider>
      </BrowserRouter>
    );

    // Comprueba que los personajes se representan correctamente
    expect(container.innerHTML).toContain('Spider-Man');
    expect(container.innerHTML).toContain('Iron Man');
  });
});
