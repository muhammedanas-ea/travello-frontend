import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store, persistor } from "./redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraBaseProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={"824306338354-scfku3mcmisn8jmtu5ko0k6acs4ejjmq.apps.googleusercontent.com"}>
    <React.StrictMode>
      <ChakraBaseProvider>
        <Provider store={Store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ChakraBaseProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
