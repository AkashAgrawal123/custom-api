const express = require("express");
const app = express();
const port = 3000;

// const {SidebarMenuData} = require('./navData');
import { SidebarMenuData } from "./navData1";

app.get("/", (req, res) => {
  res.send("hello, this is our api");
});

app.get("/api/sidebar-menu", (req, res) => {
  res.json(SidebarMenuData);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
