import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavMenuItem from './NavMenuItem';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}));

describe('NavMenuItem', () => {
  it('should render a link with provided text', async () => {
    const href = '/test';
    const text = 'Test';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    const menuItem = screen.getByRole('link', { name: text });

    await waitFor(() => expect(menuItem).toBeInTheDocument());
  });
});
