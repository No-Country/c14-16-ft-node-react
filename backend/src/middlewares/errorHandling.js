import BusinessError from "./BusinessError";

export const errorHandling = ( err, req, res, next) => {
    if(err instanceof BusinessError){
        res.status(err.statusCode).send(err.message);
        return;
    }
    res.status(500).send(err.message);
}