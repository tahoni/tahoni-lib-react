import {Breakpoints, Loader, MaskOverlay} from "../lib";
import {ExampleSlider} from "./components/ExampleSlider";
import './App.scss'

function App() {
  return (
    <>
        <ExampleSlider/>
        <Breakpoints/>
        <MaskOverlay mask={false}/>
        <Loader isLoading={false}/>
    </>
  )
}

export default App;
