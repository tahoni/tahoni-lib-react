import {Breakpoints, Loader, MaskOverlay} from "../lib";
import {Route, Routes} from "react-router";
import {Layout} from "./layout";
import {ExamplePage} from "./pages/ExamplePage";
import './App.scss'

function App() {
  return (
    <>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<ExamplePage/>}/>
                <Route path="*" element={<ExamplePage/>}/>
            </Route>
        </Routes>
        <Breakpoints/>
        <MaskOverlay mask={false}/>
        <Loader isLoading={false}/>
    </>
  )
}

export default App;
