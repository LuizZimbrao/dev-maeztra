import styles from "./NewCollection.module.css";
import bannerMobile from "../../assets/banner-collection-mobile.png"
import bannerDesktop from "../../assets/banner-collection.png"

const NewCollection = () => {

  return (
    <div className={styles.NewCollection__Wrapper}>
      <div className={styles.NewCollection__Container}>
        <div className={styles.NewCollection__Content}>
            <h4 className={styles.NewCollection__Title}>Lorem ipsum</h4>
            <p className={styles.NewCollection__Description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
            </p>
        </div>
        <img
          className={styles.NewCollection__CollectionImage}
          src={window.innerWidth <= 1024 ? bannerMobile : bannerDesktop}
          alt="Nova Coleção"
        />
      </div>
    </div>
  )
}

export { NewCollection };
