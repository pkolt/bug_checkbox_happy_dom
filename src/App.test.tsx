import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test Checkbox', () => {
  it('event onChange', async () => {
    const { container } = render(<App />);
    const checkbox = screen.getByTestId('tea') as HTMLInputElement;
    await userEvent.click(checkbox);
    expect(container.innerHTML).toMatch('Selected Tea');
  });

  it('event change', async () => {
    const handle = vi.fn();
    render(<App />);
    const checkbox = screen.getByTestId('tea') as HTMLInputElement;
    checkbox.addEventListener('change', handle);
    await userEvent.click(checkbox);
    expect(handle).toHaveBeenCalled();
  });
});

describe('Test Radio button', () => {
  it('event onChange', async () => {
    const { container } = render(<App />);
    const radioBtn = screen.getByTestId('cookie');
    await userEvent.click(radioBtn);
    expect(container.innerHTML).toMatch('Selected cookie');
  });

  it('event change', async () => {
    const handle = vi.fn();
    render(<App />);
    const radioBtn = screen.getByTestId('cookie');
    radioBtn.addEventListener('change', handle);
    await userEvent.click(radioBtn);
    expect(handle).toHaveBeenCalled();
  });
});
