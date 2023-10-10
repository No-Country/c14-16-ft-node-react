export default class BusinessError extends Error{
    constructor (message, statusCode){
        super( message, statusCode );
        this.statusCode = message;
    }
}