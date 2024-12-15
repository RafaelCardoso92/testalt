import { useState } from "react";
import Button from "../button/button";
import styles from "./menu.module.scss";
import Image from "next/image";
import logo from "../../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Props {}

export default function Menu(props: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.wrapper}>
          <IconButton
            className={styles.burgerMenu}
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.info}>
            <a href="#services">0845 034 0895</a>
            <a href="#case-studies">About us</a>
            <a href="#insights">Careers</a>
          </div>
          <div className={styles.menu}>
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className={styles.requestSupport}>
        <div className={styles.support}>
          <a href="#services">Request support</a>
        </div>
        <div className={styles.button}>
          <Button variant="primary" text="call me back" />
        </div>
      </div>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className={styles.drawerContent}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem sx={{ color: "black" }} component="a" href="#services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem
              sx={{ color: "black" }}
              component="a"
              href="#case-studies"
            >
              <ListItemText primary="Case Studies" />
            </ListItem>
            <ListItem sx={{ color: "black" }} component="a" href="#insights">
              <ListItemText primary="Insights" />
            </ListItem>
            <ListItem sx={{ color: "black" }} component="a" href="#contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
