import {ReactElement} from "react";
import "./Breakpoints..scss";

export const Breakpoints = (): ReactElement => {
    return (
        <div id="breakpoints" className="breakpoints">
            <div className="breakpoint">
                <div className="d-block d-sm-none">Extra Small (xs)</div>
                <div className="d-none d-sm-block d-md-none">Small (sm)</div>
                <div className="d-none d-md-block d-lg-none">Medium (md)</div>
                <div className="d-none d-lg-block d-xl-none">Large (lg)</div>
                <div className="d-none d-xl-block d-xxl-none">X-Large (xl)</div>
                <div className="d-none d-xxl-block">XX-Large (xxl)</div>
            </div>
        </div>
    )
}
