import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link href="/">
            <Image
              src="/assets/og-logo/logo-nav.png"
              alt="Logo"
              width={72}
              height={72}
            />
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#kelas">Kelas</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
