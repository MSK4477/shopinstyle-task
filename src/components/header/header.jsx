import React from 'react';
import headerStyles from './header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>

      <div style={{ fontWeight: 'bold', cursor: 'pointer' }}>Start BootStrap</div>
      <ul>
        <li>Home</li>
      </ul>
      <ul>
        <li>About</li>
      </ul>
      <ul>
        <li>Shop</li>
      </ul>
      <p className={headerStyles.cart}><i class="fa-sharp fa-solid fa-cart-shopping"></i>Cart<b className={headerStyles.count}>0</b></p>

    </header>

  );
}

export default Header;
