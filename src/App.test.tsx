import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('render', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('select checkbox', async () => {
    const { container } = render(<App />);
    const checkbox = screen.getByTestId('tea');
    await userEvent.click(checkbox);
    screen.debug(container);
    expect(container.innerHTML).toMatch('Selected Tea');
  });

  it('select radio button', async () => {
    const { container } = render(<App />);
    const radioBtn = screen.getByTestId('cookie');
    await userEvent.click(radioBtn);
    screen.debug(container);
    expect(container.innerHTML).toMatch('Selected cookie');
  });
});
