module.exports = class userCreateDto {

    constructor(props) {
        
        this.name = props.name;
        return {
            name : this.name,
            pwd : Math.random().toString(36).slice(-8)
        };
    }
}