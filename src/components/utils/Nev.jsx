"use client";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Avatar,
  Button,
  Navbar,
  DarkThemeToggle,
  ListGroup,
} from "flowbite-react";
import { useState } from "react";

export default function NavbarWithCTAButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Navbar fluid>
      <Navbar.Brand>
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      {isLoggedIn ? (
        <div className="flex md:order-2 gap-2">
          <DarkThemeToggle />
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <ListGroup.Item>Dashboard</ListGroup.Item>
            <ListGroup.Item>Settings</ListGroup.Item>
            <ListGroup.Item>Earnings</ListGroup.Item>
            <Dropdown.Divider />
            <ListGroup.Item>Sign out</ListGroup.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2 gap-2">
          <DarkThemeToggle />
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Link className="block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700" to="/">Home</Link>
        <Link className="block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700" to="/latestmovies">Latest movies</Link>
        <Link className="block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700" to="/upcomingmovies">Upcoming movies</Link>
        <Link className="block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700" to="/events">Events</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
