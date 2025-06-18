// src/pages/SingleProduct.jsx
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function SingleProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Produto não encontrado.</h2>;

  return (
    <>
      <section id="header">
        <a href="#"><img src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/logo.png" className="logo" alt="logo" /></a>
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

      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={product.image} width="100%" alt={product.name} />
        </div>
        <div className="single-pro-details">
          <h6>Início / {product.category}</h6>
          <h4>{product.name}</h4>
          <h2>{product.price}</h2>
          <h4>Detalhes do Produto</h4>
          <span>{product.description}</span>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Inscreva-se para Novidades</h4>
          <p>Receba atualizações por E-mail sobre nossas últimas novidades e <span>ofertas especiais.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Seu E-mail" />
          <button className="normal">Inscreva-se</button>
        </div>
      </section>

      <footer className="section-p1">
        {/* Copie o mesmo HTML do seu footer aqui, ou transforme em <Footer /> */}
        <div className="copyright">
          <p>&copy; 2025 Bruno Álamo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
