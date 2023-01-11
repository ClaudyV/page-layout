import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itemslist = [
    { title: "Home", onclick: () => navigate("/"), to: "" },
    {
      title: "Tags",
      onclick: () => navigate("/tags"),
      to: "tags",
    },
  ];
  return (
    <Box className="navbar-mobile" component={"nav"}>
      {itemslist.map((item, index) => (
        <Box
          key={index}
          component="img"
          alt="The house from the offer."
          src={
            location.pathname.replace("/", "") === item.to
              ? "assets/active-element.svg"
              : "assets/inactive-element.svg"
          }
          maxWidth={"2rem"}
          width={"100%"}
          textAlign={"center"}
          onClick={item.onclick}
        />
      ))}
    </Box>
  );
};

export default NavBar;
