import Mock from 'mockjs';
import getUserInfo from './response/user';

Mock.mock('/data/menu.json', getUserInfo);
//


//
export default Mock