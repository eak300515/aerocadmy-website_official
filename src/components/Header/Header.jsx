// src/components/Header/Header.jsx
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Aerocadmy Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
