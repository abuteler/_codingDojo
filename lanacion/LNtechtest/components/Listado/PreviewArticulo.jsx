import styles from './PreviewArticulo.module.scss';
import { formatearFecha } from '../../utils/fechas';

export default function PreviewArticulo ({ article }) {
  const fechaFormateada = formatearFecha(article.display_date);
  return article.subtype === '7' && (<article className={styles.container}>
    <section>
      <a href={article.website_url}>
        <picture><img src={article.promo_items && article.promo_items.basic && article.promo_items.basic.url} /></picture>
      </a>
    </section>
    <div>
      <h2><a href={article.website_url}><span>{article.headlines.basic}</span> {article.headlines.basic.subtitle}</a></h2>
      <h4>{fechaFormateada}</h4>
    </div>
  </article>);
}
