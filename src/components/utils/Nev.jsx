"use client";

import { Dropdown, Avatar, Button, Navbar, DarkThemeToggle, ListGroup } from "flowbite-react";
import { useState } from "react";

export default function NavbarWithCTAButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
          <DarkThemeToggle/>
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
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
