import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Balances from "./balances";

const router = createBrowserRouter([
  {
    path: "/balances",
    element: <Balances />,
  },
]);

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao seu DApp</h1>
      <Link to="/balances">
        <button>Ver Saldos</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/balances",
          element: <Balances />,
        },
      ])}
    />
  );
}

export default App;
