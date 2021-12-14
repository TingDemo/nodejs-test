const userModel = require('../models/user.js');

class testRepository {

    constructor() {
        this.model = userModel;
        console.log('exe testRepository');
    }

    async findUser(conditions) {
        
      return await this.model.findOne({
          where: conditions 
        }).then(Result => {
          return Result;
        }).catch(err => {
          console.error('Unable to findUser', err);
          return "find error";
        });
    }

    async createUser(insertData) {
      return await this.model.create(insertData)
      .then(Result => {
        return Result;
      }).catch(err => {
        console.error('Unable to createUser', err);
        return "create error";
      });
    }

    async updateUser(set,where) {
      return await this.model.update(set,where)
      .then(Result => {
        return Result;
      }).catch(err => {
        console.error('Unable to updateUser', err);
        return "update error";
      });
    }

    async deleteUser(where) {
      return await this.model.destroy(where)
      .then(Result => {
        return Result;
      }).catch(err => {
        console.error('Unable to deleteUser', err);
        return "delete error";
      });
    }
}

module.exports = testRepository;