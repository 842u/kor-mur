// import Tag from '../../TagLabel/Tag';
import styles from './FeaturedProjectInfo.module.scss';

export default function FeaturedProjectInfo({ project, className }) {
  const { name, tags, descriptionFirst } = project;

  const style = `${styles['project-info']} ${className}`;

  return (
    <div aria-label="Project Information" className={style} role="region">
      <h3>{name}</h3>

      {/* <div className={styles['tag-container']}>
        {tags?.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div> */}

      <p>{descriptionFirst}</p>
    </div>
  );
}
