import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByLabelText("Choose date");
    expect(headingElement).toBeInTheDocument();
});




test("setting new ocassion", () => {
  render(<BookingForm />);
  const ocassionTest = screen.getByLabelText('Occasion');
  fireEvent.change(ocassionTest, { target: { value: 'Anniversary'}});
  expect(ocassionTest).toHaveTextContent('Anniversary');
});

