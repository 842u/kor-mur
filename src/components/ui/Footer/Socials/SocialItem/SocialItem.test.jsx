/* eslint  react/jsx-props-no-spreading: 0 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import SocialItem from './SocialItem';

const mockData = {
  text: 'mock text',
  iconSrc: '/mock/url',
  alt: 'mock alt',
  href: '/mock/url',
};

describe('SocialItem', () => {
  it('should render link with provided href', () => {
    render(<SocialItem {...mockData} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining(mockData.href));
  });

  it('should render provided text', () => {
    render(<SocialItem {...mockData}>{mockData.text}</SocialItem>);

    const text = screen.getByText(mockData.text);

    expect(text).toBeInTheDocument();
  });

  it('should render icon image', () => {
    render(<SocialItem {...mockData} />);

    const iconImage = screen.getByRole('img', { name: mockData.alt });

    expect(iconImage).toBeInTheDocument();
  });
});
