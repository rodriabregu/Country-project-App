import React from "react";
import { render, screen } from "@testing-library/react";
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router";
import App from "./App";
import Search from "./components/Search";
import Landing from "./components/Landing";
import ActivityFunction from "./components/Activity";
import rootReducer from "../src/redux/reducer";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
}); */

test("rootReducer", () => {
  let state;
  state = rootReducer(
    {
      countriesAll: [],
      countryDetail: [],
      countryFilter: [],
      activityCreate: [],
      countryShowed: [],
    },
    { type: "GET_ACTIVITYS", payload: [] }
  );
  expect(state).toEqual({
    countriesAll: [],
    countryDetail: [],
    countryFilter: [],
    activityCreate: [],
    countryShowed: [],
  });
});

test('rootReducer', () => {
  let state;
  state = rootReducer(undefined, {});
  expect(state).toEqual({countriesAll:[],countryDetail:[],countryFilter:[],activityCreate:[],countryShowed:[]});
});

describe('<ActivityFunction /> Mounted', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ActivityFunction />);
  });

  it('El form debe tener un input con name "username" y type "text"', () => {
    const { container } = render(<ActivityFunction />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('name');
  });

  it('El form debe tener un input con name "duration" y type "number"', () => {
    const { container } = render(<ActivityFunction />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('number');
    expect(element.name).toBe('duration');
  });

  it('El input de name tiene que tener la clase controls si tiene un error',  () => {
      wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'My new value'}});
      const ele = wrapper.find('input[name="name"]');
      expect(ele.hasClass('controls')).toBeTruthy();
   });
  it('El input de duration tiene que tener la clase controls si tiene un error',  () => {
      wrapper.find('input[name="duration"]').simulate('change', {target: {name: 'duration', value: '10'}});
      const ele = wrapper.find('input[name="duration"]');
      expect(ele.hasClass('controls')).toBeTruthy();
    });
});

it("render correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Search />);
  expect(queryByTestId("btn-generic")).toBeTruthy();
  expect(queryByPlaceholderText("Find a country...")).toBeTruthy();
});

test("renders about title", () => {
  render(<Landing />, { wrapper: MemoryRouter });
  expect(
    screen.getAllByText("Dreams can be made with effort")
  ).toBeInTheDocument();
});

test("renders footer text", () => {
  render(<ActivityFunction />);
  expect(screen.getAllByText("Activitys")).toHaveLength(1);
});

describe("Search button", () => {
  describe("with empty query", () => {
    it("does not trigger requestSearch function", () => {
      const requestSearch = jest.fn();
      const { queryByTestId } = render(
        <Search requestSearch={requestSearch} />
      );
      fireEvent.click(queryByTestId("btn-generic"));
      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
});