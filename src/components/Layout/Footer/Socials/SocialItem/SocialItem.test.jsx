import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import SocialItem from './SocialItem';

describe('SocialItem', () => {
  it('should render link with icon and provided text', () => {
    const text = 'test';

    render(
      <SocialItem alt="test" href="/">
        {text}
      </SocialItem>
    );

    const img = screen.getByRole('img', { name: 'test' });

    expect(screen.getByRole('link', { name: 'test test open link' })).toHaveTextContent(text);
    expect(screen.getByRole('link', { name: 'test test open link' })).toContainElement(img);
  });
});
