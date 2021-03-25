const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: "Mike",
    password: "Pitofha133123!",
    email: "mike@asodjoadsl.com", 
}

// non-existent user
const userTwo = {
    name: "Ghost",
    email: "iactuallydontexist@hihohuhohohonn.com",
    password: "Pudhnks12!@"
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Alexovichskyski",
        password: "Password123!",
        email: "motykaalex@gmail.com"
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})


test('Should not login non-existant user', async () => {
    await request(app).post('/users/login').send({
        email: userTwo.email,
        password: userTwo.password
    }).expect(400)
})