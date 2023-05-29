import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import MottoSection from './MottoSection';

describe('MottoSection', () => {
  it('should render heading element with motto', () => {
    render(<MottoSection />);

    const heading = screen.getByRole('heading', { name: 'MOTTO' });

    expect(heading).toBeInTheDocument();
  });

  it('should render link to /about page', () => {
    render(<MottoSection />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/about');
  });
});
