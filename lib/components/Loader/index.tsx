import {CSSProperties} from "react";
import {SyncLoader} from "react-spinners";
import styles from "./styles.module.scss";
import "./styles.scss";

export const Loader = (props: LoaderProps) => {
    const loaderOverrides: CSSProperties = {
        top: "50%",
        left: "50%",
        position: "absolute",
        zIndex: 88888,
    };

    return (
        <div className="loader">
            <SyncLoader cssOverride={loaderOverrides}
                        color={styles.loaderColor}
                        loading={props.isLoading}/>
        </div>
    );
}

interface LoaderProps {
    isLoading: boolean;
}
