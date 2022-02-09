import axios, {AxiosResponse} from 'axios';
import {IUser} from 'models';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get('./users.json');
  }
}
