import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import CircleLogo from './CircleLogo';

describe('CircleLogo', () => {
  it('should render spans with characters provided in text prop', () => {
    const logoText = 'abc';

    render(<CircleLogo text={logoText} />);

    [...logoText].forEach((character) => {
      expect(screen.getByText(character)).toBeInTheDocument();
      expect(screen.getByText(character, { exact: true })).toBeVisible();
    });
  });
});
