import "./App.css";
import { Button } from "rebass";
import { Header } from "./components/Header";
import { MainLayout } from "./layout";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Button variant="primary" mr={2}>
          Create a Room
        </Button>
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;
