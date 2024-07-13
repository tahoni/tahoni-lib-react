import {ReactElement} from "react";
import styles from "./styles.module.scss";

export const MaskOverlay = (props: MaskOverlayProps): ReactElement => {
    return (
        <>
            {props.mask ?
                <div className={styles.maskOverlay}/>
            :
                ''
            }
        </>
    );
}

interface MaskOverlayProps {
    mask: boolean;
}
