import "./App.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import {useEffect} from 'react'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/search",
        element: <SearchPage />,
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <div>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
