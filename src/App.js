import { RouterProvider } from "react-router-dom";
import { PhotoProvider } from "react-photo-view";
import "./App.css";
import { router } from "./pages/Layout/Routes";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <PhotoProvider>
        <RouterProvider router={router} />
        <Toaster />
      </PhotoProvider>
    </div>
  );
}

export default App;
