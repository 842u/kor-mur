import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getProjectSchema } from '@/utils/dataSetup/dataSchemas/project';
import { mockType } from '@/utils/dataSetup/dataTypes';

import ProjectCard from './ProjectCard';

const mockData = getProjectSchema(mockType);

describe('ProjectCard', () => {
  it('should render project image', async () => {
    render(<ProjectCard project={mockData} />);

    const projectImage = screen.getByRole('img', {
      name: `Main image of the ${mockData.name} project.`,
    });

    await waitFor(() => expect(projectImage).toBeInTheDocument());
  });

  it('should render project link', async () => {
    render(<ProjectCard project={mockData} />);

    const projectLink = screen.getByRole('link');

    await waitFor(() => {
      expect(projectLink).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(projectLink).toHaveAttribute('href', expect.stringContaining(mockData.slug.current));
    });
  });
});
