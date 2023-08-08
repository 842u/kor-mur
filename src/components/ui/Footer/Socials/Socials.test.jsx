import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Socials from './Socials';

describe('Socials', () => {
  it('should render all links from provided items', () => {
    const items = [
      { href: '/test', text: 'Test', alt: 'Test', iconSrc: '/test/' },
      { href: '/test2', text: 'Test2', alt: 'Test2', iconSrc: '/test/' },
      { href: '/test3', text: 'Test3', alt: 'Test3', iconSrc: '/test/' },
    ];

    render(<Socials socialItems={items} />);

    expect(screen.getAllByRole('link')).toHaveLength(items.length);
  });
});
