import {Breakpoints} from "..";
import {MaskOverlay} from "..";
import {Loader} from "..";
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
