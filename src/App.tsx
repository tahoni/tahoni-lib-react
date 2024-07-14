import {Breakpoints} from "../lib";
import {MaskOverlay} from "../lib";
import {Loader} from "../lib";
import './App.scss'

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
