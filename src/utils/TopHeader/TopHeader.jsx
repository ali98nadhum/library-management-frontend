import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Badge, Button } from "@mui/material";
import { Notifications as NotificationsIcon, Logout as LogoutIcon } from "@mui/icons-material";

const TopHeader = () => {
  const userName = "Ali";
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    "إشعار 1: لديك رسالة جديدة",
    "إشعار 2: تم تحديث بياناتك",
    "إشعار 3: تم إضافة كتاب جديد",
  ]);

  const handleLogout = () => {
    // من هنا يمكنك إضافة منطق تسجيل الخروج مثل إزالة التوكن أو توجيه المستخدم لصفحة تسجيل الدخول
    console.log("تم تسجيل الخروج");
  };

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
      
        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "#cc0000" } }} 
        >
          تسجيل الخروج
        </Button>


        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <IconButton color="inherit" onClick={handleNotificationsClick}>
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography variant="body1">{userName}</Typography>
          <Avatar>{userName.charAt(0)}</Avatar>
        </div>
      </Toolbar>

   
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {notification}
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>لا توجد إشعارات</MenuItem>
        )}
      </Menu>
    </AppBar>
  );
};

export default TopHeader;
