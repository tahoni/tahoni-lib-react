import { Breakpoints, Loader, MaskOverlay } from "../lib";
import "./App.scss";

function App() {
  return (
    <>
        <Breakpoints/>
        <MaskOverlay mask={false}/>
        <Loader isLoading={false}/>
    </>
  )
}

export default App;
