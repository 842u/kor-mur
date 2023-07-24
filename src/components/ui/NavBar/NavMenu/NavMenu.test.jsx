import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavMenu from './NavMenu';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}));

describe('NavMenu', () => {
  it('should render all provided items', async () => {
    const items = [
      { href: '/test', text: 'Test' },
      { href: '/test2', text: 'Test2' },
      { href: '/test3', text: 'Test3' },
    ];

    render(<NavMenu menuItems={items} />);

    const menuItems = screen.getAllByRole('listitem');

    await waitFor(() => expect(menuItems).toHaveLength(items.length));
  });
});
