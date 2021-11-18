import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ViewOrders = () => {
  const [history, setHistory] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectOrder, setSelectOrder] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = () => {
    axios
      .get("/api/admin/basket")
      .then((res) => setHistory(res.data))
      .catch(() => console.log("err"));
  };

  const columns = [
    {
      field: "user",
      headerName: "Cliente",
      width: 150,
      headerAlign: "center",
      valueGetter: (params) => {
        return params.row.user.name;
      },
    },
    {
      field: "total",
      headerName: "Total",
      width: 150,
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 150,
      headerAlign: "center",
      valueGetter: (params) => {
        return params.row.date.slice(0, 10);
      },
    },
    {
      field: "complete",
      headerName: "Complete",
      width: 150,
      headerAlign: "center",
    },
    {
      field: "products",
      headerName: "Productos",
      headerAlign: "center",

      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSelectOrder(params.row.product);
              openModal();
            }}
          >
            productos
          </Button>
        );
      },
    },
  ];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add product"
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Articulo</TableCell>
                  <TableCell align="center">Ciudad, provincia</TableCell>
                  <TableCell align="center">Categoria</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectOrder.map((elem) => {
                  console.log("elem", elem._id);
                  return (
                    <TableRow
                      key={elem._id._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{elem._id.title}</TableCell>
                      <TableCell align="left">{`${elem._id.location[0].city}, ${elem._id.location[0].provincia}`}</TableCell>
                      <TableCell align="left">{elem._id.category}</TableCell>
                      <TableCell align="left">{elem._id.price}</TableCell>
                      <TableCell align="left">{elem.cantidad}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Modal>
      </div>

      <div style={{ height: 700, width: "55%", marginTop: "5px" }}>
        <DataGrid
          rows={history}
          columns={columns}
          getRowId={(row) => row._id}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ViewOrders;
