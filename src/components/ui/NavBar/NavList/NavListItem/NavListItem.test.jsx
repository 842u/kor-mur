import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavListItem from './NavListItem';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}));

describe('NavListItem', () => {
  it('should render a link with provided text', async () => {
    const href = '/test';
    const text = 'Test';

    render(<NavListItem href={href}>{text}</NavListItem>);

    const menuItem = screen.getByRole('link', { name: text });

    await waitFor(() => expect(menuItem).toBeInTheDocument());
  });
});
