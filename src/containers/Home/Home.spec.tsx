import { render, fireEvent, act } from "@testing-library/react"
import { createStore } from "redux";
import { Provider } from "react-redux"
import { HomePage } from "."

import rootReducer from '../../store/modules/rootReducer';

describe('Home page container', () => {
  it('should render Home Page', () => {
    const component = render(
      <Provider store={createStore(rootReducer)}>
        <HomePage />
      </Provider>)
    expect(component).toBeTruthy()
  })

  it('should render Search Modal when search input is clicked', () => {
    const { getByTestId } = render(
      <Provider store={createStore(rootReducer)}>
        <HomePage />
      </Provider>)

    const searchInput = getByTestId('homepage-search-input');
    
    act(() => {
      fireEvent.click(searchInput);
    })

    const searchModalInput = getByTestId('searchmodal-input');
    
    expect(searchModalInput).toBeTruthy()
  })
})