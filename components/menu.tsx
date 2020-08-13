import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './menu.module.scss';

interface MenuLink {
  title: string;
  url: string;
}

interface MenuProps {
  links?: MenuLink[];
  homeUrl: string;
}

type Color = 'light' | 'dark';

const Menu: React.FC<MenuProps> = ({
  links = [],
  homeUrl
}): React.ReactElement => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState('light' as Color);
  const [height, setHeight] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onScroll = () => {
    const scrolledPastHeader = window.scrollY > (height * 2);
    const colorClass = scrolledPastHeader ? 'dark' : 'light';
    setColor(colorClass);
  }

  const renderMenuItems = (links: MenuLink[]): React.ReactNode => {
    return links.map(link => (
      <li
        className={styles.menu__list_item}
        key={link.url}
        onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
      >
        <Link href={link.url}><a>{link.title}</a></Link>
      </li>
    ));
  }

  const Logo = (
    <Link href={homeUrl}>
      <a className={styles.logo}>
        James &amp; Kyrsten
      </a>
    </Link>
  );

  useEffect(() => {
    const node = menuRef.current;
    const newHeight = node?.clientHeight;
    if (newHeight) setHeight(newHeight);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const middleIndex = Math.ceil(links.length / 2);
  const mobileMenuClass = mobileMenuVisible ? 'open' : '';
  const leftMenuItems = renderMenuItems(links.slice(0, middleIndex));
  const rightMenuItems = renderMenuItems(links.slice(middleIndex, links.length));

  return (
    <header ref={menuRef} className={classNames(styles.header, color)}>
      <div className={styles.contain}>
        <div className={classNames(styles.menu, styles.show_xs_sm, styles.show_flex)}>
          {!!links.length ?
            <img
              className={styles.menu__icon}
              src='/images/menu-button.svg'
              alt='Menu'
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            />
            :
            <div></div>
          }

          {Logo}

          {/*
            Magical 3rd div so the logo is center aligned.
            https://stackoverflow.com/a/44348868/3250243
          */}
          <div></div>

          <div className={classNames(styles.mobile_menu, mobileMenuClass)}>
            {/* TODO: Get a real close icon */}
            <span
              className={styles.mobile_menu__close}
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >X</span>

            <div className={styles.mobile_menu__items}>
              {leftMenuItems}
              {rightMenuItems}
            </div>
          </div>
        </div>

        <div className={classNames(styles.menu, styles.show_md, styles.show_flex)}>
          {Logo}

          <ul className={styles.menu__list}>
            {leftMenuItems}
            {rightMenuItems}
          </ul>
        </div>

        <div className={classNames(styles.menu, styles.show_lg_up, styles.show_flex)}>
          <ul className={styles.menu__list}>
            {leftMenuItems}
          </ul>

          {Logo}

          <ul className={styles.menu__list}>
            {rightMenuItems}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Menu;
