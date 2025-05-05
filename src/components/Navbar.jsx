import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Select,
  MenuItem,
  IconButton,
  Drawer,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { themeMode, toggleTheme, currency, setCurrency } = useAppContext();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const CurrencySelector = (
    <Select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      size="small"
      sx={{ ml: 2, color: "inherit", borderColor: "inherit" }}
    >
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="INR">INR</MenuItem>
      <MenuItem value="EUR">EUR</MenuItem>
      <MenuItem value="GBP">GBP</MenuItem>
      <MenuItem value="JPY">JPY</MenuItem>
    </Select>
  );

  const ThemeToggle = (
    <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            EMI Calculator
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box p={2} width="200px">
                  <Typography variant="subtitle1">Theme</Typography>
                  {ThemeToggle}
                  <Typography variant="subtitle1" mt={2}>
                    Currency
                  </Typography>
                  {CurrencySelector}
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {ThemeToggle}
              {CurrencySelector}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
