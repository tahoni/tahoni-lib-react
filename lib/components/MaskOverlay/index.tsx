import {ReactElement} from "react";
import "./styles.scss";

export const MaskOverlay = (props: MaskOverlayProps): ReactElement => {
    return (
        <>
            {props.mask ?
                <div className="maskOverlay"/>
            :
                ''
            }
        </>
    );
}

export interface MaskOverlayProps {
    mask: boolean;
}
