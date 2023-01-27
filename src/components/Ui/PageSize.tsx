import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

// Custom style for Page size Slider
export const PageSize = styled(Slider)({
  color: "rgba(255, 255, 255, 0.3)",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#1B1B1B",
    border: "6px solid #FFD25F",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
