import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setResultPage } from "../../features/resultLayout";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const itemslist = [
    {
      title: "Home",
      onclick: () => {
        navigate("/");
        dispatch(setResultPage({ showResultPage: false }));
      },
      to: "",
    },
    {
      title: "Tags",
      onclick: () => {
        navigate("/tags");
        dispatch(setResultPage({ showResultPage: false }));
      },
      to: "tags",
    },
  ];
  return (
    <Box className="navbar-mobile" component={"nav"}>
      {itemslist.map((item, index) => (
        <Box
          key={index}
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
