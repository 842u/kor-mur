import styles from './ProjectDetailsCard.module.scss';

export default function ProjectDetailsCard({ project }) {
  const { year, location, area, budget } = project;

  return (
    <table aria-label="Project details" className={styles['details-card']}>
      <tbody>
        <tr>
          <th>Rok</th>
          <td>{new Date(year).getFullYear()}</td>
        </tr>
        <tr>
          <th>Miejsce</th>
          <td>{location}</td>
        </tr>
        <tr>
          <th>Powierzchnia</th>
          <td>{area}</td>
        </tr>
        <tr>
          <th>Budżet</th>
          <td>{budget}</td>
        </tr>
      </tbody>
    </table>
  );
}
