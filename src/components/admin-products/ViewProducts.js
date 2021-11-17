import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "react-modal";
import AddProduct from "./AddProduct";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/")
      .then((res) => res.data)
      .then((arrProducts) => setProducts(arrProducts))
      .catch((err) => console.log(err));
  })



  const columns = [
    { field: "title", headerName: "Title", width: 150, editable: true },
    { field: "category", headerName: "Category", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      editable: true,
    },
    { field: "location", headerName: "Location", width: 150, editable: true },
    { field: "price", headerName: "Price", width: 150, editable: true },
    { field: "stock", headerName: "Stock", width: 150, editable: true },
    { field: "state", headerName: "State", width: 150, editable: true },
  ];

  const [selectionModel, setSelectionModel] = useState([]);

  const deleteProducts = () => {
    selectionModel.map((productID) =>
      axios
        .delete(`/api/admin/product/${productID}`)
        .then(() => console.log("success delete"))
        .catch(() => console.log("fail delete"))
    );
  };

  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);


  const putProduct = () => {
    let id = Object.keys(editRowsModel)[0];
    let columModif = Object.keys(editRowsModel[id])[0];
    let value = editRowsModel[id][columModif].value;

    axios
      .put(`/api/admin/product/${id}`, { [columModif]: value })
      .then((obj) => console.log("modificado con exito", obj))
      .catch(() => console.log("no se pudo modificar"));
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <IconButton aria-label="delete" onClick={closeModal}>
            <HighlightOffIcon />
          </IconButton>
          <AddProduct />
        </Modal>
      </div>
      <Paper sx={{ m: 2 }}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            onClick={deleteProducts}
          >
            DELETE
          </Button>
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={openModal}
          >
            NEW
          </Button>
        </Stack>
<div>
        <div style={{ height: 700, width: "100%", marginTop: "5px" }}>
          <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row) => row._id}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            disableSelectionOnClick
            editRowsModel={editRowsModel}
            onEditRowsModelChange={handleEditRowsModelChange}
            onCellEditStop={putProduct}
          />
        </div>
        </div>
      </Paper>
    </div>
  );
};

export default ViewProducts;
