class User {
    static noOfUsers = 0

    constructor() {
        User.noOfUsers += 1
    }

    static displayNumberOfUser() {
        console.log(`Number of users : ${User.noOfUsers}`)
    }
}

const user1 = new User(); // #noOfUsers = 1
const user2 = new User(); // #noOfUsers = 2
const user3 = new User(); // #noOfUsers = 3
const user4 = new User(); // #noOfUsers = 4
const user5 = new User(); // #noOfUsers = 5
const user6 = new User(); // #noOfUsers = 6
const user7 = new User(); // #noOfUsers = 7
const user8 = new User(); // #noOfUsers = 8
User.displayNumberOfUser()
