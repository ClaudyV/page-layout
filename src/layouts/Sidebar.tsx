import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 80;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const location = useLocation();
  const { window }: any = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const itemslist = [
    { title: "Home", onclick: () => navigate("/"), to: "" },
    {
      title: "Tags",
      onclick: () => navigate("/tags"),
      to: "tags",
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
          {itemslist.map((route: any, index: number) => {
            const { title, to } = route;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ justifyContent: "center", cursor: "pointer" }}
              >
                <NavLink
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
                        alt="The house from the offer."
                        src={
                          location.pathname.replace("/", "") === to
                            ? "assets/active-element.svg"
                            : "assets/inactive-element.svg"
                        }
                        maxWidth={"2rem"}
                        width={"100%"}
                        textAlign={"center"}
                      />
                      {location.pathname.replace("/", "") !== to &&
                      to === "tags" ? (
                        <Box
                          component="img"
                          alt="The house from the offer."
                          src={"assets/blue-point.svg"}
                          position={"absolute"}
                          textAlign={"center"}
                          bottom={"2rem"}
                          left={"2rem"}
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
