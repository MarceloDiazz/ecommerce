import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest } from "../state/user";
import StoreIcon from "@mui/icons-material/Store";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

export default function AdminMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {user.admin ? (
        <List>
          <ListItem
            button
            key={"Promote admins"}
            component={Link}
            to="/admin/users"
          >
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Promote admins"} />
          </ListItem>

          <ListItem
            button
            key={"Categories"}
            component={Link}
            to="/admin/categories"
          >
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={"Categories"} />
          </ListItem>

          <ListItem
            button
            key={"Products"}
            component={Link}
            to="/admin/products"
          >
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItem>
          <ListItem
            onClick={() => dispatch(sendLogoutRequest())}
            button
            key={"Logout"}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            onClick={() => dispatch(sendLogoutRequest())}
            button
            key={"Logout"}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>

          <ListItem button key={"History"} component={Link} to="/user/history">
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"History"} />
          </ListItem>

          <ListItem button key={"Setting"} component={Link} to="/user/setting">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Setting"} />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <IconButton
          onClick={toggleDrawer("right", true)}
          sx={{ color: "white" }}
        >
          {user.admin ? (
            <AdminPanelSettingsOutlinedIcon sx={{ width: 40, height: 40 }} />
          ) : (
            <MenuIcon sx={{ width: 35, height: 35 }} />
          )}
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
