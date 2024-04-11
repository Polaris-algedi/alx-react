import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders without crashing", () => {
  const { getByTestId } = render(<Footer />);
  const footerElement = getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test('contains the text "Copyright"', () => {
  const { getByTestId } = render(<Footer />);
  const copyrightElement = getByTestId("footer-text");
  expect(copyrightElement).toHaveTextContent("Copyright");
});
