import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NavMenu from './NavMenu';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}));

describe('NavMenu', () => {
  it('should render all provided items', () => {
    const items = [
      { href: '/test', text: 'Test' },
      { href: '/test2', text: 'Test2' },
      { href: '/test3', text: 'Test3' },
    ];

    render(<NavMenu menuItems={items} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(items.length);
  });
});
