import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="navbar-area pt-4" style={{ color: "#232e52" }}>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white uppercase"
        >
          <span className="px-1 gradient-border">Mahmudur's</span>
          Blog
        </Link>
        <form>
          <TextInput
            className="hidden lg:inline"
            style={{ backgroundColor: "transparent" }}
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
          />
        </form>
        <Button
          color="gray"
          className="lg:hidden"
          style={{ border: "1px solid #ccc" }}
        >
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button pill color="gray" style={{ border: "1px solid #ccc" }}>
            <FaMoon />
          </Button>
          <Link className="hidden md:inline" to="/signin">
            <Button className="custom-background">Sign in</Button>
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="menu-wrapper">
          <Navbar.Link
            active={path === "/"}
            style={{ textDecoration: path === "/" ? "underline" : "none" }}
            as={"div"}
          >
            <Link className="menu-item" to="/">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/about"}
            as={"div"}
            style={{ textDecoration: path === "/about" ? "underline" : "none" }}
          >
            <Link className="menu-item" to="/about">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/projects"}
            as={"div"}
            style={{
              textDecoration: path === "/projects" ? "underline" : "none",
            }}
          >
            <Link className="menu-item" to="/projects">
              Projects
            </Link>
          </Navbar.Link>
          <Link className="md:hidden" to="/signin">
            <Button className="custom-background">Sign in</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
