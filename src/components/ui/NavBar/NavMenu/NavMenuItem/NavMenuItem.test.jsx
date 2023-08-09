import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavMenuItem from './NavMenuItem';

const mockData = {
  href: '/mock/path',
  text: 'mock text',
};

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: mockData.href,
  }),
}));

describe('NavMenuItem', () => {
  it('should render a link with provided text', async () => {
    render(<NavMenuItem href={mockData.href}>{mockData.text}</NavMenuItem>);

    const menuLink = screen.getByRole('link', { name: mockData.text });

    await waitFor(() => expect(menuLink).toBeInTheDocument());
  });

  it('should have active class if current path is same as href prop', async () => {
    render(<NavMenuItem href={mockData.href}>{mockData.text}</NavMenuItem>);

    const menuListItem = screen.getByRole('listitem');

    await waitFor(() => expect(menuListItem).toHaveClass('item--active'));
  });

  it('should not have active class if current path is different as href prop', async () => {
    const href = '/different/path';
    const text = 'To some path...';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    const menuListItem = screen.getByRole('listitem');

    await waitFor(() => expect(menuListItem).not.toHaveClass('item--active'));
  });
});
