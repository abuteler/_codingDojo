import { getTagsMap } from '../../utils/tags';
import Etiquetas from './Etiquetas';
import PreviewArticulo from './PreviewArticulo';
import styles from './Listado.module.scss';

export default function Listado({articles}) {
  const tagsMap = getTagsMap(articles);
  return (<div className={styles.container}>
    <h1>Acumulado Grilla</h1>
    <Etiquetas tags={tagsMap} />
    <section>
      {
        articles.map((article, i) => (<PreviewArticulo key={i} article={article} />))
      }
    </section>
    <button>Mas notas</button>
  </div>)
};
