import Tag from '../../TagLabel/Tag';
import styles from './FeaturedProjectInfo.module.scss';

export default function FeaturedProjectInfo({ project }) {
  const { name, tags, descriptionFirst } = project;

  return (
    <div aria-label="Project Information" className={styles['project-info']} role="region">
      <h3>{name}</h3>

      {tags?.map((tag) => (
        <Tag tag={tag} />
      ))}

      <p>{descriptionFirst}</p>
    </div>
  );
}
