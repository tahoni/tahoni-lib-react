import {Breakpoints} from "../lib";
import {MaskOverlay} from "../lib";
import {Loader} from "../lib";
import {ExampleCarousel} from "./components/UnderConstructionCarousel";
import './App.scss'

function App() {
  return (
    <>
        <Breakpoints/>
        <MaskOverlay mask={false}/>
        <Loader isLoading={false}/>
        <ExampleCarousel/>
    </>
  )
}

export default App;
