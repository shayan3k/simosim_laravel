import React, { Component } from "react";

export default function User(props) {
    return (
        <>
            <tr key={props.item.id}>
                <th scope="row">{props.item.id}</th>
                <td scope="row">{props.item.name}</td>
                <td>{props.item.phonenumber}</td>
                <td>{props.item.is_admin}</td>
                <td>{props.item.phonenumber_verified_at ? "true" : "flase"}</td>
                <td>
                    {new Date(Date.parse(props.item.created_at)).toUTCString()}
                </td>
                <td>
                    {new Date(Date.parse(props.item.updated_at)).toUTCString()}
                </td>

                <td className="d-flex flex-column align-items-center justify-content-center">
                    <button className="btn btn-danger my-1">Delete</button>
                    <button className="btn btn-warning my-1">Update</button>
                </td>
            </tr>
        </>
    );
}
