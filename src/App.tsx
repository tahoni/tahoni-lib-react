import {Breakpoints} from "./layout";
import {MaskOverlay} from "./components";
import {Loader} from "./components";
import './App.scss'

function App() {
  return (
    <>
      <Breakpoints/>
      <MaskOverlay mask={true}/>
      <Loader isLoading={true}/>
    </>
  )
}

export default App;
