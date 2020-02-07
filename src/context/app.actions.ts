/**
 * Models
 */
import { Action } from './app.context';
import { IUser } from 'models/user/IUser';

export const fetchUser = (): Action => {
  // You can write here a method to fetch the user details from the API
  const user: IUser = {
    username: 'Chuckie',
    look: process.env.REACT_APP_HABBO_FIGURE ?? ''
  };

  return {
    type: 'setUser',
    value: user
  };
};
