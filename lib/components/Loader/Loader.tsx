import {CSSProperties, ReactElement} from "react";
import {SyncLoader} from "react-spinners";
import classes from "./Loader.module.scss";

export const Loader = (props: LoaderProps): ReactElement => {
    const loaderOverrides: CSSProperties = {
        top: '50%',
        left: '50%',
        position: 'absolute',
        zIndex: classes.LoaderZIndex,
    };

    return (
        <div className={classes.Loader}>
            <SyncLoader cssOverride={loaderOverrides}
                        color={classes.loaderColor}
                        loading={props.isLoading}/>
        </div>
    );
}

interface LoaderProps {
    isLoading: boolean;
}
