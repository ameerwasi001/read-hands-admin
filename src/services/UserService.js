// import axios from 'axios';
// import axiosInstance from './axiosInstance';
import { GenericService } from './GenericService';

class CompanyService extends GenericService {
  constructor() {
    super('/api/user');
  }
  getAllCustomers = () => this.get('/admin/account/user/allCustomers');
  blockCustomer = (userId, status) => this.post('/admin/account/user/blockCustomer', {userId: userId, status: status});
  getAllVendors = () => this.get('/admin/account/user/allVendors');
  blockVendor = (userId, status) => this.post('/admin/account/user/blockVendor', {userId: userId, status: status});

}

export default new CompanyService();
