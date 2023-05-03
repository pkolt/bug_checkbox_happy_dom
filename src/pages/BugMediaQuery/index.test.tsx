import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { BugMediaQuery } from '.';

describe('Bug MediaQuery', () => {
  it('render media query', async () => {
    render(<BugMediaQuery />);
  });
});