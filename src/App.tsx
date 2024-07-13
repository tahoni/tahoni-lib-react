import {Breakpoints} from "..";
import {MaskOverlay} from "..";
import {Loader} from "..";
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
