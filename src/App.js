import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Provider store={store}>
        <Todos />
      </Provider>
    </>
  );
}

export default App;
