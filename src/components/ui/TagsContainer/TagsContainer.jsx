import Tag from './Tag/Tag';
import styles from './TagsContainer.module.scss';

export default function TagsContainer({ tags, className }) {
  const style = `${className} ${styles['tags-container']}`;

  return (
    <div className={style} data-testid="tag-container">
      {tags?.map((tag) => (
        <Tag key={tag?._id} tag={tag} />
      ))}
    </div>
  );
}
