'use strict'

class UserController {
    index ({request}){
        const user = request.all();
        return user
    }
    create ({request}){
        const user = request.only(['username', 'email'])
        return user
    }
}

module.exports = UserController
