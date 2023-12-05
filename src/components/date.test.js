// date.test.js
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const mockDispatch = jest.fn();
    render(<BookingForm availableTimes={{select: null}} dispatch={mockDispatch} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});


