import React, { useEffect } from "react";

export default function Message(props) {
    const setMessage = props.setMessage;
    useEffect(() => {
        setTimeout(() => setMessage(""), 10000);
        return () => {
            setMessage("");
        };
    }, []);
    return (
        <div
            className={`alert alert-${props.status}`}
            dangerouslySetInnerHTML={{ __html: props.title }}
        />
    );
}
