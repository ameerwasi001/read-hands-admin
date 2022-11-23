// import axios from 'axios';
// import axiosInstance from './axiosInstance';
import { GenericService } from './GenericService';

class CompanyService extends GenericService {
  constructor() {
    super('/api/user');
  }
  getBanners = () => this.get('/admin/banner/banners');
  getCategories = () => this.get('/admin/categories/getCategories');
  getAppItems = () => this.get('/admin/appItems/');

  removeBanner = (banner) => this.post('/admin/banner/remove_banner', {bannerObj: banner});
  addBanner = (image) => this.post('/admin/banner/add_banner', {image: image});
  removeCategory = (category) => this.post('/admin/categories/remove_category', {category: category});
  addCategory = (category) => this.post('/admin/categories/add_category', {category: category});
  updateAppImages = (image, screen) => this.post('/admin/appItems/update_images', {image: image, screen: screen});
  updateAppLinks = (type, url) => this.post('/admin/appItems/update_links', {type: type, url: url});
  updateAppRadius = (radius) => this.post('/admin/appItems/update_radius', {radius: radius});

}

export default new CompanyService();
