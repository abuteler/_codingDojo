import styles from './Etiquetas.module.scss';

export default function Etiquetas({tags}) {
  const slicedTags = tags.slice(0, 10);
  return (<div className={styles.container}>
      {
        slicedTags.map((tag, i) => (<a key={i} href={`/tema/${tag.slug}`}>{tag.text}</a>))
      }
  </div>);
}
