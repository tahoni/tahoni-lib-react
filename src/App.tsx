import {Breakpoints} from "../lib";
import {MaskOverlay} from "../lib";
import {Loader} from "../lib";
import {ExampleSlider} from "./components/ExampleSlider/ExampleSlider.tsx";
import './App.scss'

function App() {
  return (
    <>
        <Breakpoints/>
        <MaskOverlay mask={false}/>
        <Loader isLoading={false}/>
        <ExampleSlider/>
    </>
  )
}

export default App;
