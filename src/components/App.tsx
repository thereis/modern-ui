import * as React from 'react';

/**
 * Dependencies
 */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useAppDispatch } from 'context/app.context';
import * as AppActions from '../context/app.actions';

/**
 * Components
 */
import Login from './routes/Login';
import Me from './routes/Me';
import PageNotFound from './routes/PageNotFound';
import NewsArticle from './routes/NewsArticle';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(AppActions.fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/me" />

        <Route exact path={['/me', '/me/news', '/me/friends']} component={Me} />
        <Route path="/community/news/:id" component={NewsArticle} />
        <Route path="/login" component={Login} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
