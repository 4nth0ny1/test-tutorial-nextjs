import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";

describe("Home Page", () => {
  it("should render the headline text", () => {
    render(<Home />);
    expect(screen.getByText(/nextjs testing tutorial/i)).toBeInTheDocument();
  });

  it("adds a todo", async () => {
    render(<Home />);

    const todoInput = screen.getByTestId("todoInput");
    const addTodoButton = screen.getByTestId("addTodoButton");
    const todoList = screen.getByTestId("todoList");

    await userEvent.type(todoInput, "Mow the lawn");
    await userEvent.click(addTodoButton);

    const todoListNew = screen.getByTestId("todoList");
    expect(todoList).toHaveTextContent("Mow the lawn");
  });

  it("deletes a todo", async () => {
    render(<Home />);

    const todoInput = screen.getByTestId("todoInput");
    const addTodoButton = screen.getByTestId("addTodoButton");
    const todoList = screen.getByTestId("todoList");

    await userEvent.type(todoInput, "Mow the lawn");
    await userEvent.click(addTodoButton);

    const deleteTodoButton = screen.getByTestId("deleteTodoButton-0");
    const todoListNew = screen.getByTestId("todoList");
    expect(todoList).toHaveTextContent("Mow the lawn");

    await userEvent.click(deleteTodoButton);
    await waitFor(() => {
      expect(todoListNew).toBeEmptyDOMElement();
    });
  });
});
