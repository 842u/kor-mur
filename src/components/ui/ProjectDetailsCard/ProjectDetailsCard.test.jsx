import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getProjectSchema } from '@/utils/dataSetup/dataSchemas/project';
import { mockType } from '@/utils/dataSetup/dataTypes';

import ProjectDetailsCard from './ProjectDetailsCard';

const mockData = getProjectSchema(mockType);

describe('ProjectDetailsCard', () => {
  it('should render a table', () => {
    render(<ProjectDetailsCard project={mockData} />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });

  it('should render year realization of the project', () => {
    render(<ProjectDetailsCard project={mockData} />);

    const yearInfo = screen.getByText(mockData.year);

    expect(yearInfo).toBeInTheDocument();
  });

  it('should render location of the project', () => {
    render(<ProjectDetailsCard project={mockData} />);

    const yearInfo = screen.getByText(mockData.location);

    expect(yearInfo).toBeInTheDocument();
  });

  it('should render area of the project', () => {
    render(<ProjectDetailsCard project={mockData} />);

    const yearInfo = screen.getByText(mockData.area);

    expect(yearInfo).toBeInTheDocument();
  });

  it('should render budget of the project', () => {
    render(<ProjectDetailsCard project={mockData} />);

    const yearInfo = screen.getByText(mockData.budget);

    expect(yearInfo).toBeInTheDocument();
  });
});
