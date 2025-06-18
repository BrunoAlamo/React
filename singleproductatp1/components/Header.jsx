// React/components/Header.jsx
export default function Header() {
    return (
      <section id="header">
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/logo.png"
            className="logo"
            alt="logo"
          />
        </a>
        <div>
          <ul id="navbar">
            <li><a href="/index.html">Início</a></li>
            <li><a className="active" href="/shop.html">Loja</a></li>
            <li><a href="/about.html">Sobre</a></li>
            <li><a href="/contact.html">Contato</a></li>
            <li id="lg-bag"><a href="/cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
          </ul>
        </div>
      </section>
    );
  }
  