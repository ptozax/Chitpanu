import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

function AppNavbar() {
  const links = [
    { label: 'About',    href: '#about' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <Navbar expand="lg" sticky="top" className="pf-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="pf-brand">
          <div className="pf-brand-logo">CP</div>
          Chitpanu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="pf-nav" />
        <Navbar.Collapse id="pf-nav">
          <Nav className="ms-auto align-items-center gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="pf-nav-link">
                {l.label}
              </a>
            ))}
            <a href="mailto:chitpanu.th@gmail.com" className="pf-nav-link pf-nav-cta ms-2">
              Hire Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
