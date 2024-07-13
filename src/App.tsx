import {Breakpoints} from "../lib/layout/Breakpoints";
import {MaskOverlay} from "../lib/components/MaskOverlay";
import {Loader} from "../lib/components/Loader";
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
