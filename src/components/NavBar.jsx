import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const pages = ["Home", "Shop", "Cart"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/home");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const onShopClick = () => {
    navigate("/shop");
  };
  const onCartClick = () => {
    navigate("/cart");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#6f706f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://www.logo.wine/a/logo/E-mart/E-mart-Logo.wine.svg"
              width="100%"
              height="70px"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E- Mart
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "space-evenly" }}
          >
            {
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Home
                </Button>
                <Button
                  onClick={onShopClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Shop
                </Button>
                <Button
                  onClick={onCartClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Cart
                </Button>
              </>
            }
          </Box>
          <div style={{ padding: "10px" }}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon style={{ color: "#f7faf5" }} />
              </StyledBadge>
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary">
                <MailIcon color="action" style={{ color: "#f7faf5" }} />
              </StyledBadge>
            </IconButton>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
