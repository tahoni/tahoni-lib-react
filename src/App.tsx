import {Breakpoints} from "..";
import {MaskOverlay} from "..";
import {Loader} from "..";
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
