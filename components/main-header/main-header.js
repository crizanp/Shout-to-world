import Link from 'next/link';
import MainHeaderBackground from './main-header-background';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <div className={classes['header-container']}>
      {/* <MainHeaderBackground /> */}
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          Shout To Nepal
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/shouts">Explore</NavLink>
            </li>
            <li>
              <NavLink href="/community">STN Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
