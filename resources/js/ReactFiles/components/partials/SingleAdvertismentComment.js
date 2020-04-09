import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import Axios from "axios";
import { JWTHeader } from "../services/Auth";
import { useStoreState } from "easy-peasy";
import secureStorage from "../services/Storage";

export default function SingleAdvertismentComment(props) {
    const baseUrl = process.env.MIX_BASEURL;
    const showCommentsUrl = process.env.MIX_COMMENTS_SHOW;
    const storeCommentsUrl = process.env.MIX_COMMENTS_STORE;
    const deleteCommentsUrl = process.env.MIX_COMMENTS_DELETE;

    const logedIn = useStoreState(state => state.auth.logedIn);

    const [commentsData, setCommentsData] = useState();
    const [comment, setComment] = useState();
    const [status, setStatus] = useState();
    const [msg, setMsg] = useState();

    const handleSubmitBtn = e => {
        e.preventDefault();

        axios({
            url: baseUrl + storeCommentsUrl,
            method: "POST",
            headers: JWTHeader().headers,
            data: {
                advertisment_id: props.id,
                comment: comment
            }
        })
            .then(res => {
                console.log(res.data);
                setMsg(
                    "نظر شما با موفقیت ثبت و تا دقایقی دیگر نمایش داده می شود"
                );
                setStatus("success");

                getdata();
            })
            .catch(e => {
                console.log(e.response);
                setMsg("در حال حاضر امکان برقراری ارتباط با سرور نمی باشد");
                setStatus("danger");
            });

        console.log(props.id, commentsData);
    };

    const handleDeleteBtn = id => {
        Axios({
            method: "DELETE",
            url: baseUrl + deleteCommentsUrl,
            headers: JWTHeader().headers,
            data: {
                comment_id: id
            }
        })
            .then(res => {
                console.log(res.data);
                setMsg("نظر شما با موفقیت پاک شد");
                setStatus("success");

                getdata();
            })
            .catch(e => {
                console.log(e.response);
                setMsg("در حال حاضر امکان برقراری ارتباط با سرور نمی باشد");
                setStatus("danger");
            });
    };

    useEffect(() => {
        getdata();
    }, [props]);

    const getdata = () => {
        Axios({
            method: "GET",
            url: baseUrl + showCommentsUrl + "?id=" + props.id
        })
            .then(res => {
                setCommentsData(res.data.data);
                console.log(res.data.data);
            })
            .catch(e => console.log(e.response));
    };

    return (
        <div className={props.className}>
            <h1 className="font6 mb-3">
                نظر خود را ثبت کنید <i className="fas fa-comment"></i>
            </h1>
            {logedIn == "true" ? (
                <form onSubmit={handleSubmitBtn}>
                    <textarea
                        name="comment-form"
                        id="comment-form-text"
                        className="form-control w-100"
                        placeholder="لطفا با فونت فارسی بنویسید"
                        cols="30"
                        rows="7"
                        onChange={e => setComment(e.target.value)}
                    ></textarea>
                    <input
                        className="btn btn-outline-info mt-2"
                        type="submit"
                        value="ارسال"
                    />
                </form>
            ) : (
                <h1 className="alert alert-info font8">
                    لطفا برای ثبت آگهی <a href="/login">ثبتنام</a> کنید
                </h1>
            )}
            {msg ? (
                <ul
                    className={"alert font3 unstyled my-1 list alert-" + status}
                    dangerouslySetInnerHTML={{ __html: msg }}
                />
            ) : (
                ""
            )}

            <hr />

            <div className="comment-section">
                <div className="comment-title mb-5 font6">
                    دیدگاه های شما
                    <i className="fa fa-comments" aria-hidden="true"></i>
                </div>
                {commentsData ? (
                    commentsData.map((item, index) => {
                        return (
                            <div className="comment-item" key={index}>
                                <h2 className="d-inline-block font4 font-weight-bold ml-2">
                                    در انتظار تایید -
                                </h2>
                                <h2 className="d-inline-block font3 text-left ml-2">
                                    <ReactTimeAgo
                                        date={
                                            item.created_at
                                                ? item.created_at
                                                : ""
                                        }
                                        locale="fa"
                                    />
                                </h2>
                                <h2 className="d-inline-block font4 font-weight-bold ml-2">
                                    {item.commenter.name}
                                </h2>

                                <p className="font3">{item.comment}</p>

                                <p>
                                    <a href="#" className="font3 m-1">
                                        پاسخ دادن
                                    </a>
                                    {secureStorage.getItem("user_id") ==
                                    item.commenter.id ? (
                                        <button
                                            className="comment-delete-btn font3 c-danger m-1"
                                            onClick={e =>
                                                handleDeleteBtn(item.id)
                                            }
                                        >
                                            پاک کردن
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </p>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                    <h1 className="font3">Loading...</h1>
                )}
            </div>
        </div>
    );
}
