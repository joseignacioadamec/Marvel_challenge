import React from 'react';
import { CharacterComics } from './CharacterComics';
import { AppContext } from '../../Context/AppContext';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('CharacterComics', () => {
  it('Should render without crashing', () => {
    const mockContextData = {
      state: {
        comics: [
          {
            id: 1,
            title: 'Comic 1',
            thumbnail: { path: 'path1', extension: 'jpg' },
            dates: [{ date: '2022-03-15T00:00:00Z' }]
          },
          {
            id: 2,
            title: 'Comic 2',
            thumbnail: { path: 'path2', extension: 'jpg' },
            dates: [{ date: '2022-03-10T00:00:00Z' }]
          },
        ]
      }
    };

    // Renderiza el componente CharacterComics con el contexto de la aplicación utilizando render
    const wrapper = render(
      <AppContext.Provider value={mockContextData}>
        <CharacterComics />
      </AppContext.Provider>
    );

    // Verifica que el componente se renderice sin errores
    expect(wrapper).toBeDefined();
  });
});
