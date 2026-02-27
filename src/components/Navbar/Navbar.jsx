import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <Logo data-testid="navbar-logo" />
      </div>

      {/* Search bar */}
      <div className={styles.searchWrapper}>
        <SearchBar
          search="Search a song of your choice"
          data-testid="navbar-search"
        />
      </div>

      {/* Button */}
      <div className={styles.buttonWrapper}>
        <Button data-testid="navbar-button">Give Feedback</Button>
      </div>
    </nav>
  );
};

export default Navbar;
