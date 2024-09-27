import React from "react";
import style from "./header.module.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Container from "../Container/Container"

const Header = () => {
  return (
    <header>
      <Container>
      <div className={style.content}>
      <Button
            variant="contained"
            sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "#cc0000" } }}
          >
            logout
          </Button>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </div>
      </Container>
    </header>
  );
};

export default Header;
