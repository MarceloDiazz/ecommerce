import React from "react";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";
import axios from "axios";

const GridUsers = ({ user, i, setState }) => {
    const handleOnClick = async (id, admin) => {
        const user = await axios.put(`/api/admin/${id}`, { admin: admin });
        setState(`${user.data.admin}${user.data._id}`);
    };

    return (
        <TableRow>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.admin ? "True" : "False"}</TableCell>
            <TableCell align="right">
                <IconButton color={user.admin ? "error" : "success"} onClick={() => handleOnClick(user._id, user.admin)}>
                    {user.admin ? <RemoveModeratorIcon /> : <AddModeratorIcon />}
                    <h6>{user.admin ? "Remove" : "Add"}</h6>
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default GridUsers;
