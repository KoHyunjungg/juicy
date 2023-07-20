
import './App.css';
import menuimg from './img/menu.png'

function App() {
  return (
    <div className="App">
    
    <nav>
        <div className="container">
            <div className="nav-title">
                <a href="./index.html">JUICY</a></div>
            <div className="nav-menu">
                <div className="nav-btn">
                    <a href="http://www.no1juicy.com/main/home">HOME</a>
                    <a href="http://www.no1juicy.com/products/pressoNew">MENU</a>
                    <a href="https://www.instagram.com/juicychayam_official/?hl=ko">INSTA</a>
                </div>
            </div>
        </div>
    </nav>

    <header className="hd">
        <div className="hd-container">
            <h2 className="hd-title">DO WANNA SWEET?</h2>
            <p className="hd-content">THE ANSWER IS JUICY</p>
        </div>

    </header>

    <section className="menu">
        <div className="menu-container">
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
                <div className="menu-imag">
                    <a href="http://www.no1juicy.com/main/home"><img src={menuimg}/></a>
                    <div className="menu-title">Mango 5000won</div>
                </div>
              
        </div>
    </section>
    
    <footer>
        <div className="container">
            <p>&copy; JUICY IS Always Sweet!</p>
        </div>
    </footer>

    </div>
  );
}

export default App;
