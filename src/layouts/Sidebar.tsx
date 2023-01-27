import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { setResultPage } from "../features/ResultLayout";
import { useAppDispatch } from "../hooks/Hook";


const drawerWidth = 80;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const itemslist = [
    {
      id: 1,
      title: "Home",
      to: "/",
      onclick: () => {
        dispatch(setResultPage(false));
      },
    },
    {
      id: 2,
      title: "Tags",
      to: "/tags",
      onclick: () => {
        dispatch(setResultPage(false));
      },
    },
  ];

  // Sidebar Elements
  const drawer = (
    <div>
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            fontWeight: 700,
            fontSize: "1.2rem",
            lineHeight: "0.938rem",
            letterSpacing: "-0.05em",
            background: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            paddingTop: "1.813rem",
            paddingBottom: "2.875rem",
          }}
        >
          LOGO
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"1.594rem"}>
          {itemslist.map((route) => {
            const { id, title, to, onclick } = route;
            return (
              <ListItem
                key={id}
                disablePadding
                sx={{ justifyContent: "center", cursor: "pointer" }}
              >
                <NavLink
                  onClick={onclick}
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"0.123rem"}
                    justifyContent={"center"}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignContent={"center"}
                      alignItems={"center"}
                      position={"relative"}
                    >
                      <Box
                        component="img"
                        alt="Active Element"
                        src={
                          location.pathname === to
                            ? "assets/img/active-element.svg"
                            : "assets/img/inactive-element.svg"
                        }
                        maxWidth={"1.5rem"}
                        width={"100%"}
                        textAlign={"center"}
                      />
                      {location.pathname !== to && to === "/tags" ? (
                        <Box
                          component="img"
                          alt="Blue point"
                          src={"assets/img/blue-point.svg"}
                          position={"absolute"}
                          textAlign={"center"}
                          bottom={"1.65rem"}
                          left={"1.65rem"}
                        />
                      ) : (
                        <></>
                      )}
                    </Box>

                    <Box>
                      <ListItemText primary={title} />
                    </Box>
                  </Box>
                </NavLink>
              </ListItem>
            );
          })}
        </Box>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="wrapper" sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar Section */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
