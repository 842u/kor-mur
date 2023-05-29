import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NavMenuItem from './NavMenuItem';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}));

describe('NavMenuItem', () => {
  it('should render a link with provided text', () => {
    const href = '/test';
    const text = 'Test';

    render(<NavMenuItem href={href}>{text}</NavMenuItem>);

    expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
  });
});
