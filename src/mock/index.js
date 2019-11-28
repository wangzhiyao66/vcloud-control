import Mock from 'mockjs';
import getUserInfo from './response/user';

Mock.mock('/data/menu.json', getUserInfo);
// Mock.mock('/control/login', getUserInfo);
//


//
export default Mock