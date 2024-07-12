import {CSSProperties} from "react";
import {SyncLoader} from "react-spinners";
import classes from "./loader.module.scss";

export const Loader = (props: LoaderProps) => {
    const loaderOverrides: CSSProperties = {
        top: "50%",
        left: "50%",
        position: "absolute",
        zIndex: 88888,
    };

    return (
        <div className={classes.loader}>
            <SyncLoader cssOverride={loaderOverrides}
                        color={classes.loaderColor}
                        loading={props.isLoading}/>
        </div>
    );
}

interface LoaderProps {
    isLoading: boolean;
}
