import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Message from "../Message";
import ReactTimeAgo from "react-time-ago";
import { JWTHeader } from "../../../services/Auth";

export default function Comments(props) {
    const baseUrl = process.env.MIX_BASEURL;

    const commentsUpdateUrl = process.env.MIX_COMMENTS_UPDATE;
    const commentsDeleteUrl = process.env.MIX_COMMENTS_DELETE;

    const [message, setMessage] = useState("");
    const [messageStatus, setMessageStatus] = useState("");

    const [text, setText] = useState(props.text);
    const [created_at, setCreated_at] = useState(props.created_at);
    const [updated_at, setUpdated_at] = useState(props.updated_at);
    const [advertiement, setAdvertiement] = useState(props.advertiement);
    const [commenter, setCommenter] = useState(props.commenter);

    const handleDeleteBtn = () => {
        axios({
            method: "DELETE",
            url: baseUrl + commentsDeleteUrl,
            headers: JWTHeader().headers,
            data: {
                comment_id: props.id
            }
        })
            .then(res => {
                console.log(res);
                props.setListUpdate(!props.listUpdate);
            })
            .catch(e => {
                setMessage(e.response.data.message);
                setMessageStatus("danger");
            });
    };

    const handleUpdateBtn = () => {
        const data = {
            text: text,
            comment_id: props.id
        };

        axios({
            url: baseUrl + commentsUpdateUrl,
            method: "POST",
            headers: JWTHeader().headers,
            data
        })
            .then(res => {
                // console.log(res);
                setMessage("Update was successful");
                setMessageStatus("success");
                props.setListUpdate(!props.listUpdate);
            })
            .catch(e => {
                console.log(e.response);
                setMessage(e.response.data.message);
                setMessageStatus("danger");
            });

        console.log(data);
    };

    const handlePublishBtn = () => {
        const data = {
            approved: !props.approved,
            comment_id: props.id
        };

        axios({
            url: baseUrl + commentsUpdateUrl,
            method: "POST",
            headers: JWTHeader().headers,
            data
        })
            .then(res => {
                // console.log(res);
                setMessage("Update was successful");
                setMessageStatus("success");
                props.setListUpdate(!props.listUpdate);
            })
            .catch(e => {
                // console.log(e.response);
                setMessage(e.response.data.message);
                setMessageStatus("danger");
            });
    };

    return (
        <div className="container row m-0 p-0">
            <div className="col-6 input-group">
                <div className="form-control">{props.id}</div>
            </div>

            <div className="col-6 input-group">
                <div className="form-control">
                    <ReactTimeAgo
                        date={created_at ? created_at : ""}
                        locale="fa"
                    />
                </div>
            </div>
            <div className="col-4 input-group">
                <div className="form-control">{commenter.phonenumber}</div>
            </div>
            <div className="col-4 input-group m-0">
                <div className="form-control">{commenter.name}</div>
            </div>
            <div className="col-4 input-group m-0">
                <div className="form-control">
                    <Link to={"/" + advertiement.phonenumber}>لینک</Link>
                </div>
            </div>

            <div className="col-12 input-group m-0">
                <textarea
                    className="form-control"
                    maxLength="200"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="با حروف فارسی"
                />
            </div>

            <div className="col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4">
                <button
                    className={`btn btn-${
                        props.approved ? "success" : "info"
                    } mx-1`}
                    onClick={e => handlePublishBtn(e)}
                >
                    {props.approved ? "published" : "publish"}
                </button>
            </div>

            <div className="col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4">
                <button
                    className="btn btn-danger mx-1"
                    onClick={e => handleDeleteBtn(e)}
                >
                    Delete
                </button>
            </div>

            <div className="col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4">
                <button
                    className="btn btn-warning mx-1"
                    onClick={e => handleUpdateBtn(e)}
                >
                    Update
                </button>
            </div>

            {message ? (
                <Message
                    title={message}
                    status={messageStatus}
                    setMessage={text => setMessage(text)}
                />
            ) : (
                ""
            )}
            <hr className="col-12" />
        </div>
    );
}
