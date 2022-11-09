import { render, screen } from '@testing-library/react';
import React from 'react'
import Robot from '../index.js';

test('Renders robot', () => {
  render(<Robot />);
});
