import { describe, it, vi, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BugMediaQuery } from '.';

describe('Bug MediaQuery', () => {
  it('render media query', async () => {
    const handler = vi.fn();
    render(<BugMediaQuery onClick={handler} />);
    const spinner = screen.getByTestId('spinner');
    await userEvent.click(spinner);
    expect(handler).toBeCalled();
  });
});
