import { BugCheckboxes } from './pages/BugCheckboxes';
import { BugMediaQuery } from './pages/BugMediaQuery';
import { HomePage } from './pages/HomePage';
import { Page } from './constants';

export const App = () => {
  const pathname = location.pathname as Page;
  return (
    <>
      {pathname === Page.HomePage && <HomePage />}
      {pathname === Page.BugCheckboxes && <BugCheckboxes />}
      {pathname === Page.BugMediaQuery && <BugMediaQuery />}
    </>
  );
};
