export default class BusinessError extends Error{
    constructor (error, statusCode){
        super( error, statusCode);
        this.statusCode = statusCode;
    }
}