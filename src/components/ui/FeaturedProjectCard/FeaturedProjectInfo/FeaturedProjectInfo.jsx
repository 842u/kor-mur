import TagsContainer from '../../TagsContainer/TagsContainer';
import styles from './FeaturedProjectInfo.module.scss';

export default function FeaturedProjectInfo({ project, className }) {
  const { name, tags, descriptionFirst } = project;

  const style = `${styles['project-info']} ${className}`;

  return (
    <div aria-label="Project Information" className={style} role="region">
      <h3>{name}</h3>

      <TagsContainer tags={tags} />
      <p>{descriptionFirst}</p>
    </div>
  );
}
