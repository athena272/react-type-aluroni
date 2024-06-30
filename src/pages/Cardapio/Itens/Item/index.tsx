import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Item(prato: Prato) {
  const { title, description, photo, id } = prato;
  const navigage = useNavigate();

  return (
    <div
      className={styles.item}
      onClick={() => navigage(`/prato/${id}`)}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato
          prato={prato}
        />
      </div>
    </div>
  );
}