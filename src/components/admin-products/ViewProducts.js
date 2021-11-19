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
import { TextField } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

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
    const [loading, setLoading] = useState(false);
    const [selectionModel, setSelectionModel] = useState([]);
    const [editRowsModel, setEditRowsModel] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    const columns = [
        {
            field: "title",
            headerName: "Titulo",
            width: 150,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "category",
            headerName: "Categorias",
            width: 200,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "description",
            headerName: "Descripcion",
            width: 200,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "location",
            headerName: "Ciudad",
            width: 150,
            editable: true,
            valueGetter: (params) => {
                let ciudad = params.row.location[0].city;
                let provincia = params.row.location[0].provincia;
                return ciudad + "," + provincia;
            },
            headerAlign: "center",
        },

        {
            field: "price",
            headerName: "Precio",
            width: 150,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "stock",
            headerName: "Stock",
            width: 150,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "state",
            headerName: "Publicado",
            width: 150,
            editable: true,
            headerAlign: "center",
        },
        {
            field: "img",
            headerName: "Imagen",
            width: 150,
            editable: true,
            headerAlign: "center",
        },
    ];

    useEffect(() => {
        setLoading(true);
        getProducts();
    }, []);

    const getProducts = () => {
        axios
            .get("/api/products/")
            .then((res) => res.data)
            .then((arrProducts) => setProducts(arrProducts))
            .then(() => setLoading(false))
            .catch((err) => fail("Error en la carga de las productos"));
    };

    const success = (msj) => {
        toast.success(msj, {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const fail = (msj) => {
        toast.error(msj, {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const deleteProducts = () => {
        selectionModel.map((productID) =>
            axios
                .delete(`/api/admin/product/${productID}`)
                .then(() => success("Producto eliminado"))
                .then(() => getProducts())
                .catch(() => fail("Producto no eliminado"))
        );
    };

    const handleEditRowsModelChange = React.useCallback((model) => {
        setEditRowsModel(model);
    }, []);

    const putProduct = () => {
        let id = Object.keys(editRowsModel)[0];
        let columModif = Object.keys(editRowsModel[id])[0];
        let value = editRowsModel[id][columModif].value;

        let obj = { [columModif]: value };

        if (columModif === "location") {
            let arr = value.split(",");
            obj = { [columModif]: [{ city: arr[0], provincia: arr[1] }] };
        }

        axios
            .put(`/api/admin/product/${id}`, obj)
            .then(() => success("Producto modificado con exito"))
            .then(() => getProducts())
            .catch(() => fail("Error en la modificacion del producto"));
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSearch = (e) => {
        let title = e.target.value;
        if (title) {
            axios
                .get(`/api/products/title/${title}`)
                .then((res) => setProducts(res.data))
                .catch(() => {
                    console.log("no se pudo");
                });
        } else {
            getProducts();
        }
    };

    return (
        <div>
            <ToastContainer autoClose={2000} />
            <Box sx={{ width: "100%" }}>{loading ? <LinearProgress /> : <span></span>}</Box>
            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add product">
                    <IconButton aria-label="delete" onClick={closeModal}>
                        <HighlightOffIcon />
                    </IconButton>
                    <AddProduct getProducts={getProducts} setIsOpen={setIsOpen} success={success} />
                </Modal>
            </div>
            <Paper sx={{ m: 2 }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<DeleteIcon />} onClick={deleteProducts} color="error">
                        DELETE
                    </Button>
                    <Button variant="contained" endIcon={<AddCircleOutlineIcon />} onClick={openModal}>
                        NEW
                    </Button>
                    <div>
                        <TextField id="search" label="Search" variant="outlined" onChange={handleSearch} />
                    </div>
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
