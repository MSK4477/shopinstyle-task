import React, { useState } from 'react';
import headerStyles from './header.module.css';

const Header = ({ cartCount }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropIt = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={headerStyles.header}>
      <div  className={headerStyles.shop} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Start BootStrap</div>
      <ul>
        <li>Home</li>
      </ul>
      <ul>
        <li>About</li>
      </ul>
      <div className={headerStyles.dropdown}>
        <div className={headerStyles.dropdownTrigger}>
        <span onClick={dropIt}>Shop <div className={headerStyles.dropdownArrow}></div>
</span></div>
        {isDropdownOpen && (
          <div className={headerStyles.dropdownContent}>
            <div className={headerStyles.dropdownItem}>All Products</div>
            <div className={headerStyles.dropdownItem}>Popular Items</div>
            <div className={headerStyles.dropdownItem}>New Arrivals</div>
          </div>
        )}
      </div>
      <div className={headerStyles.cart}>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        Cart<b className={headerStyles.count}>{cartCount}</b>
      </div>
    </header>
  );
};

export default Header;

