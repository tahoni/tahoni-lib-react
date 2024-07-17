import {ReactElement} from "react";
import "./MaskOverlay.module.scss";

export const MaskOverlay = (props: MaskOverlayProps): ReactElement => {
    return (
        <div className="maskOverlay" style={{display: props.mask ? 'block' : 'none'}}/>
    );
}

interface MaskOverlayProps {
    mask: boolean;
}
