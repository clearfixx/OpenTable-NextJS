import { FC, useState } from "react";
import styles from "./Header.module.scss";
import IconIcDowm from "../Navbar/ic-down";

interface IHeaderLinks {
  id: string;
  name: string;
  href: string;
  active: boolean;
}

interface IHeaderLinksProps {
  links: IHeaderLinks[];
}

const headerLinks = [
  {
    id: "1",
    name: "Espaniol",
    href: "#",
    active: false,
  },
  {
    id: "2",
    name: "English",
    href: "#",
    active: true,
  },
  {
    id: "3",
    name: "Ukrainian",
    href: "#",
    active: false,
  },
  {
    id: "4",
    name: "Nederlands",
    href: "#",
    active: false,
  },
  {
    id: "5",
    name: "中文",
    href: "#",
    active: false,
  },
  {
    id: "6",
    name: "日本語",
    href: "#",
    active: false,
  },
];

const HeaderSmall: FC = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setVisible(!visible);
  };
  return (
    <header className={styles.small_header}>
      <nav>
        <ul className={styles.small_header_nav_menu}>
          <li>
            <a href="" onClick={toggleVisible}>
              EN <IconIcDowm width="20px" height="20px" />
            </a>
            <ul
              className={`${styles.small_header_submenu} ${
                visible ? "opened" : "hidden"
              }`}
            >
              {headerLinks.map((link: IHeaderLinks) => {
                return (
                  <li
                    key={link.id}
                    className={link.active ? styles.active : ""}
                  >
                    <a href={link.href}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSmall;
