import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import ExitDraftLink from './ExitDraftLink';

describe('ExitDraftLink', () => {
  it('should render link to api route that disables draftMode', async () => {
    render(<ExitDraftLink />);

    const link = screen.getByRole('link');

    await waitFor(() => expect(link).toBeInTheDocument());
    await waitFor(() =>
      expect(link).toHaveAttribute('href', expect.stringMatching('/api/disable-draft'))
    );
  });
});
