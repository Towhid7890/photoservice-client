import { RouterProvider } from "react-router-dom";
import { PhotoProvider } from "react-photo-view";
import "./App.css";
import { router } from "./pages/Layout/Routes";
import "react-photo-view/dist/react-photo-view.css";
function App() {
  return (
    <div>
      <PhotoProvider>
        <RouterProvider router={router} />
      </PhotoProvider>
    </div>
  );
}

export default App;
