import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LoadingBarContainer } from "react-top-loading-bar";
import Layout from "./Layout";
import { store } from "./store";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <BrowserRouter>
          <LoadingBarContainer>
            <Layout />
            <Toaster />
          </LoadingBarContainer>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
