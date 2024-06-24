class ApiResponsec{
    constructor(
        statusCode,
        data,
        message = "Seccess"

    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400
    }
}