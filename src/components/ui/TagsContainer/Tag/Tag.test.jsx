import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import Tag from './Tag';

const mockedTag = {
  _id: 'Default Tag _id',
  name: 'Default Tag Name',
  slug: {
    current: 'default-tag-slug',
  },
};

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'default-tag-slug',
    },
  }),
}));

describe('Tag', () => {
  it('should render link with provided tag slug', async () => {
    render(<Tag tag={mockedTag} />);

    const link = screen.getByRole('link', { name: mockedTag.name });

    await waitFor(() => expect(link).toBeInTheDocument());
  });

  it('should have active class when router query slug matches tag slug', async () => {
    render(<Tag tag={mockedTag} />);

    const link = screen.getByRole('link', { name: mockedTag.name });

    await waitFor(() => expect(link).toHaveClass('tag--active'));
  });

  it('should not have active class when router query slug differs from tag slug', async () => {
    render(<Tag tag={{ ...mockedTag, slug: { current: 'some-other-slug' } }} />);

    const link = screen.getByRole('link', { name: mockedTag.name });

    await waitFor(() => expect(link).not.toHaveClass('tag--active'));
  });
});
