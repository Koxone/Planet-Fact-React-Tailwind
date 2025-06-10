import GeneralContainer from "./components/containers/GeneralContainer";
import MainHeader from "./components/header/MainHeader";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <MainHeader />
      <GeneralContainer />
    </div>
  );
}

export default App;
