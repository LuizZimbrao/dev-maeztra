import BagIcon from "../../icons/BagIcon";
import HeartIcon from "../../icons/HeartIcon";
import PersonIcon from "../../icons/PersonIcon";
import MobileSearch from "../../assets/search.png";
import MobileBag from "../../assets/bag.png";
import MobileMenuIcon from "../../assets/icon-menu.png";
import LogoMobile from "../../assets/logoMobile.png";
import Logo from "./assets/logo.png";

import styles from "./Header.module.css";

const Header = () =>  {
  return (
    <header className={styles.Header__Container}>
      <div className={styles.Header__Wrapper}>
        {window.innerWidth >= 1024 ? (
          <img className={styles.Header__Logo} src={Logo} alt="Logo" />
          ) : (
          <div className={styles.Header__MenuMobileContainer}>
            <img className={styles.Header__MenuIcon} src={MobileMenuIcon} alt="Menu" />
            <img className={styles.Header__LogoMobile} src={LogoMobile} alt="Logo" />
          </div>
        )}
        <div className={styles.Header__InputContainer}>
          <input className={styles.Header__Input} placeholder="O Que Você Busca?"/>
          <button className={styles.Header__InputButton}>
            Buscar
          </button>
        </div>
        <div className={styles.Header__ButtonsContainer}>
          {window.innerWidth >= 1024 ? (
            <>
              <button className={styles.Header__Button}>
                <PersonIcon />
                Minha Conta
              </button>
              <button className={styles.Header__Button}>
                <HeartIcon />
                Lista de Desejos
              </button>
              <button className={styles.Header__Cart}>
                <BagIcon />
                Meu Carrinho
              </button>
            </>
          ) : (
            <div className={styles.Header__MobileItemsContainer}>
              <img src={MobileSearch} alt="search" />
              <img src={MobileBag} alt="Cart" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header }
