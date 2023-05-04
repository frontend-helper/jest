import { render, screen, waitFor } from "@testing-library/react";
import PokemonList from "../components/PokemonList";
import * as api from "../api/pokemon";

jest.mock("../api/pokemon");

describe("Pokemon component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render pokemon list when API responds", async () => {
    api.getPokemonList.mockResolvedValue({
      results: [{ name: "bulbasaur" }],
    });
    render(<PokemonList />);
    await waitFor(() => {
      screen.getByText("bulbasaur");
    });
  });

  it("should render error message when API fails", async () => {
    api.getPokemonList.mockRejectedValue({});
    render(<PokemonList />);
    await waitFor(() => {
      screen.getByText("Unable to fetch data.");
    });
  });
});
