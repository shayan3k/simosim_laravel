import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function Message() {
    const msg = useStoreState(state => state.message.msg);
    const status = useStoreState(state => state.message.status);
    const setMsg = useStoreActions(actions => actions.message.setMsg);
    const setStatus = useStoreActions(actions => actions.message.setStatus);

    const resetVariables = () => {
        setMsg("");
        setStatus("");
    };

    useEffect(() => {
        // returned function will be called on component unmount
        return resetVariables();
    }, []);

    return msg && status ? (
        <ul
            className={"alert font3 unstyled list alert-" + status}
            dangerouslySetInnerHTML={{ __html: msg }}
        />
    ) : (
        ""
    );
}

export default Message;
