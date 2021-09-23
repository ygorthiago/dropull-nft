import { createStore } from "redux";
import { Provider } from "react-redux"
import { UserProfile } from "."
import { render as customRender } from "../../testUtils/render";

import rootReducer from '../../store/modules/rootReducer';

describe('User Profile page container', () => {
  const mockedHistoryPush = jest.fn();

  jest.mock('react-router-dom', () => {
    return {
      useHistory: () => ({
        push: mockedHistoryPush,
      }),
      Link: ({ children }: { children: React.ReactNode }) => children,
    };
  });

  it('should render User Profile page', () => {
    const component = customRender(
      <Provider store={createStore(rootReducer)}>
        <UserProfile />
      </Provider>)
    expect(component).toBeTruthy()
  })
})