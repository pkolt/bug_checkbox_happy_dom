import { BugCheckboxes } from './pages/BugCheckboxes';
import { Page } from './constants';

export const App = () => {
  const pathname = location.pathname as Page;
  return <>{pathname === Page.Checkboxes && <BugCheckboxes />}</>;
};
