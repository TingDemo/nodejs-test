module.exports = class testDto {

    constructor(props) {
        this.id;
        Object.assign(this,props)
        return {
            id:this.id
        };
    }
}