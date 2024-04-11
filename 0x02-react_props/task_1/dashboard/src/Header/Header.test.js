import { render } from "@testing-library/react";
import Header from "./Header";

test("renders without crashing", () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

test("contains img and h1 tags", () => {
  const { getByTestId } = render(<Header />);
  const imgElement = getByTestId("header-img");
  const h1Element = getByTestId("header-title");
  expect(imgElement).toBeInTheDocument();
  expect(h1Element).toBeInTheDocument();
});
