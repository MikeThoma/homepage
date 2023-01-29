import './App.css';
import Frontpage from './components/page/Frontpage';
import Navigationbar from './components/layout/Navigationbar';
import Footer from './components/layout/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/page/Contact';
import Experience from './components/page/Experience';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Frontpage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/experience",
      element: <Experience />,
    }
  ]);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigationbar />
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
