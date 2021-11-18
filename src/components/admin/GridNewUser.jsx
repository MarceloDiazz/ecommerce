import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { removeFromBasket } from "../../state/user";
import GridUsers from "./GridUsers";

const axios = require("axios");

export default function BasketUser() {
    const user = useSelector((state) => state.user);
    const [state, setState] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user._id) {
            axios
                .get(`/api/admin/${user._id}`)
                .then((res) => res.data)
                .then((user) => setUsers(user));
        }
    }, [user, state]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, marginTop: 3 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{users && users.map((user, i) => <GridUsers setState={setState} user={user} i={i} />)}</TableBody>
            </Table>
        </TableContainer>
    );
}
