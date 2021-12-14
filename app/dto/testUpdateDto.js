module.exports = class userCreateDto {

    constructor(props) {
        
        this.id = props.id;
        this.pwd = props.pwd;

        return {
            id : this.id,
            pwd : this.pwd
        };
    }
}