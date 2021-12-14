//const { report } = require('../../routes')
const joi = require('joi');
const testDto = require('../dto/testDto');
const testCreateDto = require('../dto/testCreateDto');
const testUpdateDto = require('../dto/testUpdateDto');
const testServices  = require('../services/testServices');

class testController {

    constructor() {
        console.log('exe testController');
    }

    async createUser(req,res) {

        //驗證參數
        let JoiSchema = joi.object({
            name:joi.string().min(4).max(16).required()
        });

        try {
            
            let joiValue = await JoiSchema.validateAsync(req.body)

        } catch(err) {
            console.log('err',err.details[0].message);
            return res.status(400).json({err:err.details[0].message});
        }

        //新增User
        let testServicesObj = new testServices();
        let result = await testServicesObj.createUser(new testCreateDto(req.body));

        return res.json(result);
    }

    async getUser(req,res) {
        
        //驗證參數
        let JoiSchema = joi.object({
            id:joi.number().integer().required()
        });
        //JoiSchema.validate(req.params);

        try {
            
            let joiValue = await JoiSchema.validateAsync(req.params)

        } catch(err) {

            return res.status(400).json({err:err.details[0].message});
        }

        //查詢user
        let testServicesObj = new testServices();
        let result = await testServicesObj.findUser(new testDto(req.params));

        return res.json(result);
    }

    async updateUser(req,res) {

        //驗證參數
        let JoiSchema = joi.object({
            id:joi.number().integer().required(),
            pwd:joi.string().min(4).max(16).required()
        });

        try {
            
            let joiValue = await JoiSchema.validateAsync(req.body)

        } catch(err) {

            return res.status(400).json({err:err.details[0].message});
        }

        //更新user
        let testServicesObj = new testServices();
        let result = await testServicesObj.updateUser(new testUpdateDto(req.body));

        return res.json(result);
    }

    async deleteUser(req,res) {

        //驗證參數
        let JoiSchema = joi.object({
            id:joi.number().integer().required()
        });
        //JoiSchema.validate(req.params);

        try {
            
            let joiValue = await JoiSchema.validateAsync(req.params)

        } catch(err) {

            return res.status(400).json({err:err.details[0].message});
        }

        //刪除user
        let testServicesObj = new testServices();
        let result = await testServicesObj.deleteUser(new testDto(req.params));

        return res.json(result);
    }
}

module.exports = testController;