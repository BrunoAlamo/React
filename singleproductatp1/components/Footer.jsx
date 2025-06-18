// React/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="section-p1">
        <div className="col">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/logo.png"
            alt="logo"
          />
          <h4>Contato</h4>
          <p><strong>Endereço:</strong> Rua Eng. Armando Carneiro da Rocha 131, Salvador</p>
          <p><strong>Telefone:</strong> 71-986051144</p>
          <p><strong>Horário:</strong> 9:00 - 18:00, Seg - Sab</p>
          <div className="follow">
            <h4>Nos Siga</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
  
        <div className="col">
          <h4>Sobre</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Informação Entregue</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos & Condições</a>
          <a href="#">Contate-nos</a>
        </div>
  
        <div className="col">
          <h4>Minha Conta</h4>
          <a href="#">Inscreva-se</a>
          <a href="#">Veja o Carrinho</a>
          <a href="#">Meus Desejos</a>
          <a href="#">Acompanhe Meu Pedido</a>
          <a href="#">Ajuda</a>
        </div>
  
        <div className="col install">
          <h4>Instale o Aplicativo</h4>
          <p>Da App Store ou Google Play</p>
          <div className="row">
            <img src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/pay/app.jpg" alt="app" />
            <img src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/pay/play.jpg" alt="play" />
          </div>
          <p>Formas de Pagamento Seguras</p>
          <img src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/pay/pay.png" alt="pay" />
        </div>
  
        <div className="copyright">
          <p>&copy; 2025 Bruno Álamo. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  