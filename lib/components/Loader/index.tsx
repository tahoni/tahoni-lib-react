import {CSSProperties} from "react";
import {SyncLoader} from "react-spinners";
import styles from "./styles.module.scss";

export const Loader = (props: LoaderProps) => {
    const loaderOverrides: CSSProperties = {
        top: "50%",
        left: "50%",
        position: "absolute",
        zIndex: 88888,
    };

    return (
        <div className={styles.loader}>
            <SyncLoader cssOverride={loaderOverrides}
                        color={styles.loaderColor}
                        loading={props.isLoading}/>
        </div>
    );
}

interface LoaderProps {
    isLoading: boolean;
}
