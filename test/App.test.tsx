import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('Renders "Hello!"', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello!');
  });
});
