import React, { useState } from "react";
import style from "./header.module.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Container from "../Container/Container";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    "إشعار 1: لديك رسالة جديدة",
    "إشعار 2: تم تحديث حسابك",
    "إشعار 3: هناك عرض جديد",
  ]);

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <Container>
        <div className={style.content}>
          {/* --- left sec */}
          <div className={style.left}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                "&:hover": { backgroundColor: "#cc0000" },
              }}
            >
              logout
            </Button>
          </div>

          {/* right sec */}
          <div className={style.right}>
            <IconButton
              aria-controls="notifications-menu"
              aria-haspopup="true"
              onClick={handleNotificationsClick}
              color="inherit"
              className={style.icon}
            >
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="notifications-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleNotificationsClose}
            >
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <MenuItem key={index} onClick={handleNotificationsClose}>
                    {notification}
                  </MenuItem>
                ))
              ) : (
                <MenuItem onClick={handleNotificationsClose}>
                  لا توجد إشعارات
                </MenuItem>
              )}
            </Menu>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
