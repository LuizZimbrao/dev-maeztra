import Partner1 from "../../assets/Partner-1.png";
import Partner2 from "../../assets/Partner-2.png";
import Partner3 from "../../assets/Partner-3.png";
import Partner4 from "../../assets/Partner-4.png";
import Partner5 from "../../assets/Partner-5.png";

import styles from "./Brands.module.css"

const Brands = () => {
  return (
    <div className={styles.Brands__Container}>
      <h3 className={styles.Brands__Title}>Marcas Parceiras</h3>
      <div className={styles.Brands__List}>
          <img className={styles.Brands__Item} src={Partner1}/>
          <img className={styles.Brands__Item} src={Partner2}/>
          <img className={styles.Brands__Item} src={Partner3}/>
          <img className={styles.Brands__Item} src={Partner4}/>
          <img className={styles.Brands__Item} src={Partner5}/>
      </div>
    </div>
  )
}

export { Brands };
