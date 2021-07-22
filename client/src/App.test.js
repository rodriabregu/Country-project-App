import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './components/Search';
import Landing from './components/Landing';
import App from './App';
import ActivityFunction from './components/Activity';
import { MemoryRouter } from 'react-router';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it("render correctly", () => {
  const {queryByTestId, queryByPlaceholderText} = render(<Search />)
  
  expect(queryByTestId('btn-generic')).toBeTruthy();
  expect(queryByPlaceholderText('Find a country...')).toBeTruthy();
})

describe("Search button", () => {
  describe('with empty query', () => {
    it('does not trigger requestSearch function', () => {
      const requestSearch = jest.fn();
      const {queryByTestId} = render(<Search requestSearch={requestSearch}/>)
      fireEvent.click(queryByTestId('btn-generic'))
      expect(requestSearch).not.toHaveBeenCalled();
      })
    }
)})

test('renders about title', () => {
  render(<Landing />, { wrapper: MemoryRouter });
  expect(screen.getAllByText('Dreams can be made with effort')).toBeInTheDocument()
})

test('renders footer text', () => {
  render(<ActivityFunction />);
  expect(screen.getAllByText('Activitys')).toHaveLength(1)
})

