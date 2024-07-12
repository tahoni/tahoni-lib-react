import {ReactElement} from "react";
import classes from "./overlay.module.scss";

export const MaskOverlay = (props: MaskOverlayProps): ReactElement => {
    return (
        <>
            {props.mask ?
                <div className={classes.maskOverlay}/>
            :
                ''
            }
        </>
    );
}

interface MaskOverlayProps {
    mask: boolean;
}
