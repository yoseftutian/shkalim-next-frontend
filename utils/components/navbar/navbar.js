"use client";
import Link from "next/link";
import { links } from "@/utils/data/links";
import { usePathname, useRouter } from "next/navigation";
import "./navbar.css";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import { deleteCookie } from "cookies-next";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="container">
      <ul className="link-list">
        {links.map((link) => (
          <NavItem
            key={nanoid()}
            link={link}
            current={pathname === link.href}
          />
        ))}
      </ul>
      <Button
        onClick={() => {
          deleteCookie("token");
          router.push("/login");
          router.refresh();
        }}
      >
        Logout
      </Button>
    </nav>
  );
}

function NavItem({ link, current }) {
  return (
    <li className="list-item">
      <Link className={`link ${current && "current"}`} href={link.href}>
        {link.title}
      </Link>
    </li>
  );
}
