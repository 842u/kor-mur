import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getProjectSchema } from '@/utils/createData/dataSchemas/project';
import { defaultType, mockType } from '@/utils/createData/dataTypes';

import ProjectSection from './ProjectSection';

const mockData = getProjectSchema(mockType);
const defaultData = getProjectSchema(defaultType);

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'slug-for-tag',
    },
  }),
}));

describe('ProjectSection', () => {
  it('should render heading with project name', async () => {
    render(<ProjectSection data={mockData} />);

    const heading = screen.getByRole('heading', { name: mockData.name });

    await waitFor(() => expect(heading).toBeInTheDocument());
  });

  it('should render heading with default project name if no data', async () => {
    render(<ProjectSection />);

    const heading = screen.getByRole('heading', { name: defaultData.name });

    await waitFor(() => expect(heading).toBeInTheDocument());
  });

  it('should render project first description', async () => {
    render(<ProjectSection data={mockData} />);

    const descriptionFirst = screen.getByText(mockData.descriptionFirst);

    await waitFor(() => expect(descriptionFirst).toBeInTheDocument());
  });

  it('should render project default first description if no data', async () => {
    render(<ProjectSection />);

    const descriptionFirst = screen.getByText(defaultData.descriptionFirst);

    await waitFor(() => expect(descriptionFirst).toBeInTheDocument());
  });

  it('should render project second description', async () => {
    render(<ProjectSection data={mockData} />);

    const descriptionSecond = screen.getByText(mockData.descriptionSecond);

    await waitFor(() => expect(descriptionSecond).toBeInTheDocument());
  });

  it('should render project default second description', async () => {
    render(<ProjectSection />);

    const descriptionSecond = screen.getByText(defaultData.descriptionSecond);

    await waitFor(() => expect(descriptionSecond).toBeInTheDocument());
  });

  it('should render TagContainer', async () => {
    render(<ProjectSection data={mockData} />);

    const tagContainer = screen.getByTestId('tag-container');

    await waitFor(() => expect(tagContainer).toBeInTheDocument());
  });

  it('should render ProjectDetailsCard', async () => {
    render(<ProjectSection data={mockData} />);

    const detailsCard = screen.getByRole('table');

    await waitFor(() => expect(detailsCard).toBeInTheDocument());
  });
});
