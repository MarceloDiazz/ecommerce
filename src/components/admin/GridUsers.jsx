import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const GridUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin")
      .then((res) => res.data)
      .then((user) => setUsers(user));
  }, []);
  console.log("ACA", users);

  const columns = [
    { field: "name", headerName: "Name", width: 180, editable: true },
    { field: "email", headerName: "Email", width: 180, editable: true },
    { field: "admin", headerName: "Admin", width: 180, editable: true },
  ];
  const rows = users.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    };
  }) || [] 

  return (
    <div style={{ height: 300, width: "100%" }}>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default GridUsers;
