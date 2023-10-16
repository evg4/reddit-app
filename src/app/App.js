import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../components/Root/Root";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
