import Coupon from "../../assets/deals/coupon.png";
import Trade from "../../assets/deals/trade.png";
import Truck from "../../assets/deals/truck.png";
import Inventory from "../../assets/deals/inventory.png";
import Planet from "../../assets/deals/planet.png";

import styles from "./Deals.module.css";

const Deals = () => {

  return (
    <div className={styles.Deals__Container}>
      <span className={styles.Deals__Title}>Por que comprar na Maeztra?</span>
      <div className={styles.Deals__List}>
        <div className={styles.Deals__Item}>
          <img src={Planet} alt="importados" />
          <div className={styles.Deals__Content}>
            <strong className={styles.Deals__ItemTitle}>
              Produtos importados
            </strong>
            <span className={styles.Deals__ItemSubtitle}>
              Produto de Alta Qualidade
            </span>
          </div>
        </div>
        <div className={styles.Deals__Item}>
          <img src={Inventory} alt="Estoque" />
          <div className={styles.Deals__Content}>
            <strong className={styles.Deals__ItemTitle}>
              Estoque no Brazil
            </strong>
            <span className={styles.Deals__ItemSubtitle}>
              Produtos mais perto de você!
            </span>
          </div>
        </div>
        <div className={styles.Deals__Item}>
          <img src={Trade} alt="Trocas" />
          <div className={styles.Deals__Content}>
            <strong className={styles.Deals__ItemTitle}>
              Trocas Garantidas
            </strong>
            <span className={styles.Deals__ItemSubtitle}>
              Trocas em até 48 horas, vejas as regras
            </span>
          </div>
        </div>
        <div className={styles.Deals__Item}>
          <img src={Coupon} alt="Pagamento" />
          <div className={styles.Deals__Content}>
            <strong className={styles.Deals__ItemTitle}>Ganhe 5% off</strong>
            <span className={styles.Deals__ItemSubtitle}>
              Pagando à vista no Cartão
            </span>
          </div>
        </div>
        <div className={styles.Deals__Item}>
          <img src={Truck} alt="Frete" />
          <div className={styles.Deals__Content}>
            <strong className={styles.Deals__ItemTitle}>Frete Grátis</strong>
            <span className={styles.Deals__ItemSubtitle}>
              Em compras acima de R$ 499,00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Deals };
