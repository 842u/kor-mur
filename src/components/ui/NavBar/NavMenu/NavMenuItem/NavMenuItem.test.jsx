import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavMenuItem from './NavMenuItem';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/some/path',
  }),
}));

describe('NavMenuItem', () => {
  it('should render a link with provided text', async () => {
    const href = '/test';
    const text = 'Test';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    const menuLink = screen.getByRole('link', { name: text });

    await waitFor(() => expect(menuLink).toBeInTheDocument());
  });

  it('should have "item--active" class if current path is same as href prop', async () => {
    const href = '/some/path';
    const text = 'To some path...';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    const menuListItem = screen.getByRole('listitem');

    await waitFor(() => expect(menuListItem).toHaveClass('item--active'));
  });

  it('should not have "item--active" class if current path is different as href prop', async () => {
    const href = '/different/path';
    const text = 'To some path...';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    const menuListItem = screen.getByRole('listitem');

    await waitFor(() => expect(menuListItem).not.toHaveClass('item--active'));
  });
});
