const registers = function(username) {
    console.log(`user has ${username} registerd`)
}

const login = function(user) {
    console.log(`user has ${user} logged`)
}

module.exports = {
    registers,
    login
}