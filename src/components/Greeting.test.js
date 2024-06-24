import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Should output text on screen", () => {
  test("Renders Hello World as Text", () => {
    /*
     * The Three A's of Tests:
     * Arrange - set up the test
     * Act -
     * Assert - declare what is expected result and compare to actual
     *
     */

    //Arrange
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders good to see you as text if button has not been clicked", () => {
    render(<Greeting />);
    const goodToSeeElement = screen.getByText("Good to see you", { exact: false });
    expect(goodToSeeElement).toBeInTheDocument();
  });

  test('Renders "Changed" if button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test(`does not render "good to see you if button was clicked"`, () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});
