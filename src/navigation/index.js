import { Route, Switch } from 'react-router';
import { Guardian } from '../components/Guardian';
import { Secret } from '../pages/secretPage';
import { Contacts } from '../pages/contactsPage';
import { Home } from '../pages/homePage';
import { book } from './book';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={book.root}>
        <Home />
      </Route>
      <Route exact path={book.contacts}>
        <Contacts />
      </Route>
      <Guardian>
        <Route exact path={book.secret}>
          <Secret />
        </Route>
      </Guardian>
    </Switch>
  );
};
