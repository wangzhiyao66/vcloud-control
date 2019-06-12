export default {

    /**
     * 存储token到临时永久存储
     * @param token
     */
    setTokenLocal: function(token) {
        localStorage.setItem('token', JSON.stringify(token));
    },

    /**
     * 从永久存储获取token
     * @returns {string|null}
     */
    getTokenLocal: function(){
        return localStorage.getItem('token');
    },

    setUserData: function(obj){
        localStorage.setItem('user', JSON.stringify(obj));
    },

    getUserData: function() {
        const data = localStorage.getItem('user');
        if (data) {
            return JSON.parse(data);
        }
        return {};
    },
    
    clear : function() {
        localStorage.clear();
    }
    
}