import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { setResultPage } from "../../features/ResultLayout";
import { useAppDispatch } from "../../hooks/Hook";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const itemslist = [
    {
      id: 1,
      title: "Home",
      onclick: () => {
        navigate("/");
        dispatch(setResultPage(false));
      },
      to: "",
    },
    {
      id: 2,
      title: "Tags",
      onclick: () => {
        navigate("/tags");
        dispatch(setResultPage(false));
      },
      to: "tags",
    },
  ];
  return (
    <Box className="navbar-mobile" component={"nav"}>
      {itemslist.map((item) => (
        <Box
          key={item.id}
          component="img"
          alt={item.title}
          src={
            location.pathname.replace("/", "") === item.to
              ? "assets/img/active-element.svg"
              : "assets/img/inactive-element.svg"
          }
          maxWidth={"1.5rem"}
          width={"100%"}
          textAlign={"center"}
          onClick={item.onclick}
        />
      ))}
    </Box>
  );
};

export default NavBar;
