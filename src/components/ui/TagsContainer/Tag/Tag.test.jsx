import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getTagSchema } from '@/utils/dataSetup/dataSchemas/tag';
import { mockType } from '@/utils/dataSetup/dataTypes';

import Tag from './Tag';

const mockData = getTagSchema(mockType);

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: mockData.slug.current,
    },
  }),
}));

describe('Tag', () => {
  it('should render link with provided tag slug', async () => {
    render(<Tag tag={mockData} />);

    const link = screen.getByRole('link', { name: mockData.name });

    await waitFor(() => expect(link).toBeInTheDocument());
  });

  it('should have active class when router query slug matches tag slug', async () => {
    render(<Tag tag={mockData} />);

    const link = screen.getByRole('link', { name: mockData.name });

    await waitFor(() => expect(link).toHaveClass('tag--active'));
  });

  it('should not have active class when router query slug differs from tag slug', async () => {
    render(<Tag tag={{ ...mockData, slug: { current: 'some-other-slug' } }} />);

    const link = screen.getByRole('link', { name: mockData.name });

    await waitFor(() => expect(link).not.toHaveClass('tag--active'));
  });
});
