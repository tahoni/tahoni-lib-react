import {ReactElement} from "react";
import "./styles.scss";

export const MaskOverlay = (props: MaskOverlayProps): ReactElement => {
    return (
        <div className="maskOverlay" style={{display: props.mask ? 'block' : 'none'}}/>
    );
}

export interface MaskOverlayProps {
    mask: boolean;
}
