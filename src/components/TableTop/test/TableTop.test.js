import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from 'react'
import TableTop from '../index.js';
import 'jest-styled-components'


test('Renders table top component + robot', () => {
  render(<TableTop />);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  const title = screen.getByText(/table top/i);
  const robot = screen.getByText(/robot/i)

  expect(button).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(robot).toBeInTheDocument()
});

test('Incorrect command is ignored', async () => {
  const user = userEvent.setup();

  render(<TableTop />);

  const robot = screen.getByText(/robot/i)
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  userEvent.type(input, 'plase(10,1)');
  expect(input).not.toHaveValue('place(10,1)')
  await user.click(button);

  expect(robot).toHaveStyle('transform: translate(0,0)');
})

test('Incorrect coordinate is ignored', async () => {
  const user = userEvent.setup();

  render(<TableTop />);

  const robot = screen.getByText(/robot/i)
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  await user.type(input, 'place(20,1)');
  expect(input).not.toHaveValue('place(20,1)')

  await user.click(button);

  await waitFor(() => expect(robot).toHaveStyle('transform: translate(0,0)'));
})

test('Correct command moves robot', async () => {
  const user = userEvent.setup();
  
  render(<TableTop />);

  const robot = screen.getByText(/robot/i)
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  await user.type(input, 'place(2,1)');
  expect(input).toHaveValue('place(2,1)')

  await user.click(button);


  await waitFor(() => expect(robot).toHaveStyle('transform: translate(200%,-100%)'));
})
