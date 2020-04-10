import React, { useState, useEffect } from "react";
import { JWTHeader } from "../../../services/Auth";
import Comments from "./Comments";
import axios from "axios";

export default function index() {
    const baseUrl = process.env.MIX_BASEURL;
    const commentsAllAdmin = process.env.MIX_COMMENTS_SHOWALL;

    const [comments, setComments] = useState([]);
    const [currnetPage, setCurrentpage] = useState(1);
    const [listUpdate, setListUpdate] = useState(false);

    const handlePrevOnClick = e => {
        if (currnetPage == 1) return;
        setCurrentpage(currnetPage - 1);
    };

    const handleNextOnClick = e => {
        setCurrentpage(currnetPage + 1);
    };

    useEffect(() => {
        getListData();
    }, [currnetPage, listUpdate]);

    useEffect(() => {
        getListData();
    }, []);
    const getListData = () => {
        axios({
            url: baseUrl + commentsAllAdmin + "?page=" + currnetPage,
            method: "GET",
            headers: JWTHeader().headers
        })
            .then(res => {
                // console.log(res);
                setComments(res.data.data);
            })
            .catch(e => console.log(e.response));
    };

    return (
        <div className="container-fluid">
            <nav aria-label="Page navigation">
                <ul class="ml-auto pagination">
                    <li class="page-item">
                        <a
                            class="btn page-link"
                            onClick={e => handlePrevOnClick(e)}
                            style={
                                currnetPage == 1
                                    ? { pointerEvents: "none" }
                                    : null
                            }
                        >
                            Previous
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="btn btn-danger">{currnetPage}</a>
                    </li>
                    <li class="page-item">
                        <a
                            class="btn page-link"
                            onClick={e => handleNextOnClick(e)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
            <hr />
            <div className="row p-0 m-0 mt-3">
                {comments ? (
                    comments.map((item, index) => {
                        return (
                            <div
                                className="col-12 p-1  my-4 d-flex justify-content-center align-items-center"
                                key={index}
                            >
                                <Comments
                                    id={item.id}
                                    text={item.text}
                                    approved={item.approved}
                                    created_at={item.created_at}
                                    updated_at={item.updated_at}
                                    advertiement={item.advertiement}
                                    commenter={item.commenter}
                                    setListUpdate={setListUpdate}
                                    listUpdate={listUpdate}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="alert alert-warning">No item to show</div>
                )}
            </div>
        </div>
    );
}
