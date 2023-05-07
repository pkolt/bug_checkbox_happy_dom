import { Page } from '../../constants';

export const HomePage = () => {
  const paths = Object.values(Page);
  return (
    <ul>
      {paths.map((path) => (
        <li>
          <a href={path}>{path}</a>
        </li>
      ))}
    </ul>
  );
};
