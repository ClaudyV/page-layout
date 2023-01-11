import Home from "../pages/Home";
import Results from "../pages/Results";
import Tags from "../pages/Tags";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
    ],
  },
]);

export default Router;
