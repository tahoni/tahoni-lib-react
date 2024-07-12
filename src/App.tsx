import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {MaskOverlay} from "./components/overlay/overlay.tsx";
import {Loader} from "./components/loader/loader.tsx";
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

export default App
