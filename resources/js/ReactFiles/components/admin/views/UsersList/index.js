import React, { useState, useEffect } from "react";
import axios from "axios";
import { JWTHeader } from "../../../services/Auth";
import User from "./User";
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table,
    Container
} from "reactstrap";

export default function index() {
    const baseUrl = process.env.MIX_BASEURL;
    const userAdminUrl = "/users-admin";

    const [users, setUsers] = useState([]);

    const updateList = e => {
        axios({
            url: baseUrl + userAdminUrl,
            method: "GET",
            headers: JWTHeader().headers
        })
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        axios({
            url: baseUrl + userAdminUrl,
            method: "GET",
            headers: JWTHeader().headers
        })
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <Container>
            <CardHeader>
                <i className="fas fa-user"></i>Users
            </CardHeader>
            <CardBody>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">phonenumber</th>
                            <th scope="col">is_admin</th>
                            <th scope="col">Verified</th>
                            <th scope="col">created_at</th>
                            <th scope="col">updated_at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <User
                                    key={index}
                                    item={item}
                                    updateList={e => updateList(e)}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Container>
    );
}
