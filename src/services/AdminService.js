// import axios from 'axios';
//import localStorageService from "./localStorageService";
import { GenericService } from './GenericService';
// var { GenericService } = require("./GenericService");
class AdminService extends GenericService {
  constructor() {
    super('');
  }
  getAdmin = data => this.post('/admin/account/', data);
  loginUser = data => this.post('/admin/account/login', data);
  generateAccount = data => this.post('/admin/account/generate_account', data)
  getStaff = () => this.get('/admin/account/get_staff')
  deleteStaff = data => this.post('/admin/account/delete_staff', data)
  updateAdmin = data => this.post('/admin/account/update_info', data);

}

export default new AdminService();
