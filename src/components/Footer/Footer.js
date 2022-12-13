import { items } from "./FooterItems";

import styles from "./Footer.module.css";

const Footer = () => {
  const options = items;

  return (
    <>
      {window.innerWidth >= 1024 ? (
        <footer className={styles.Footer__Container}>
          {
            options.map((item) => {
              const { title, links } = item;
              return (
                <div className={styles.Footer__Column}>
                  <h5 className={styles.Footer__ColumnTitle}>{title}</h5>
                  {links.map(({ text, url }) => (
                    <a className={styles.Footer__ColumnItem} href={url}>{text}</a>
                  ))}
                </div>
              )
            })
          }
        </footer>
        ) : (
        <div className={styles.Footer__Accordion}>
          {options.map((option) => {
            const { title, links } = option;
      
            return (
              <label for={title} className={styles.Footer__AccordionContainer}>
                <input type="checkbox" id={title} />
                <div className={styles.Footer__AccordionTitle}>{title}</div>
                <div className={styles.Footer__AccordionLinksContainer}>
                  {links.map(({ text, url }) => (
                    <a className={styles.Footer__AccordionLinks} href={url}>{text}</a>
                  ))}
                </div>
              </label>
            )
          })}
        </div>
        )}
    </>
  )
}

export { Footer };
