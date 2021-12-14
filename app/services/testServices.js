const testRepository = require('../repositories/testRepository');

class testServices {

    constructor() {
        console.log('exe testServices');
    }
    
    async findUser(params) {

        let userInfo = await new testRepository().findUser(params);
        userInfo.pwd = undefined;
        return userInfo;
    }

    async createUser(params) {
        let result = await new testRepository().createUser(params);
        userInfo.pwd = undefined;
        return result;
    }

    async updateUser(params) {
        
        let set = {
            pwd : params.pwd,
        }

        let where = {
            where : {id :params.id}
        }

        let result = await new testRepository().updateUser(set,where);
        return result;
    }

    async deleteUser(params) {

        let where = {
            where : {id :params.id}
        }

        let result = await new testRepository().deleteUser(where);
        return result;
    }
}

module.exports = testServices;