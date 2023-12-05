// App.test.js
import '@testing-library/jest-dom';
import { initializeTimes } from '../App'; // Import the initializeTimes function
import BookingPage from './BookingPage'
import { render } from "@testing-library/react";

test('initializeTimes returns the expected object', () => {
    render(<BookingPage/>)
    const res = initializeTimes()
  // Assert that the returned object has the expected structure
    expect(res).toEqual({ select: null });
});