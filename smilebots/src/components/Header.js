import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    paddingLeft: "20px",
    cursor: "pointer",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    height: "60px",
    pointerEvents: "none",
    padding: "5px",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const { totalItems } = useCart();
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          onClick={() => {
            history.push("/cart");
          }}
        >
          <Badge badgeContent={totalItems} style={{ color: "orange" }}>
            <ShoppingCartIcon style={{ color: "darkorange" }} />
          </Badge>
        </IconButton>
        <p>ShoppingCart</p>
      </MenuItem>
    </Menu>
  );

  let history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", color: "black" }}
      >
        <Toolbar>
          <img src="/Logo.png" alt="logo" className={classes.logo} />
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/shop");
            }}
          >
            Shop{" "}
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="small"
            >
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/favourite");
            }}
          >
            Favourite
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/order");
            }}
          >
            Order
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Typography style={{ color: "gray" }}>Profile</Typography>
            </IconButton>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                history.push("/cart");
              }}
            >
              <Badge badgeContent={totalItems} style={{ color: "orange" }}>
                <ShoppingCartIcon style={{ color: "darkorange" }} />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
