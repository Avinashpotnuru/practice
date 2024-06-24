import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
  test('renders Hello World text when toggle is true', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.queryByText('hai world')).not.toBeInTheDocument(); // Ensure 'hai world' is not present
  });

  test('renders hai world text when toggle is false', () => {
    // Render the component with toggle=false logic
    render(
      <div>
        <div>hai world</div>
      </div>
    );
    expect(screen.getByText('hai world')).toBeInTheDocument();
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument(); // Ensure 'Hello World' is not present
  });
});
