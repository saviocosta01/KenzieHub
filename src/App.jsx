import { LandingPages } from "./routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LandingPages />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;


