import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { book } from '../../navigation/book';

export const Guardian = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace(book.root);
    }
  }, [history, isAuthenticated]);

  return <>{children}</>;
};
