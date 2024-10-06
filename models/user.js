import { v4 as Id } from 'uuid';

const users = [

    {
        id: Id(),
        email: 'gino@gmail.com',
        password: '$2b$10$AzLvsvfhgnBcgcOUJ1Oc7ubxBLOjU.dyP7z.jM4URBpeLSnlnYva6'
        // use this password Abcdef1! in the login form
    }
];

class User {
    static getByEmail(email) {  
        return users.find(user => user.email === email);
    }

    static add(user) {
        const newUser = {
            id: Id(),
            ...user
        };
        users.push(newUser);
        return newUser;
    }
}

export default User;