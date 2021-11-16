import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';


const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products/")
      .then((res) => res.data)
      .then((arrProducts) => setProducts(arrProducts))
      .catch((err) => console.log(err));
  }, []);

  console.log(products)

  const getFullLocation = (params) => {
    return `${params.getValue(params.id, "firstName") || ""} ${
      params.getValue(params.id, "lastName") || ""
    }`;
  };

  const columns = [
    { field: "title", headerName: "Title", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
    { field: "state", headerName: "State", width: 150 },
  ];

  return (
    <div>
    <Paper sx={{ m: 2 }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          DELETE
        </Button>
        <Button variant="contained" endIcon={<AddCircleOutlineIcon />}>
          NEW
        </Button>
      </Stack>

      <div style={{ height: 700, width: "100%", marginTop: "5px" }}>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
        />
      </div>
      </Paper>
    </div>
  );
};

export default ViewProducts;
