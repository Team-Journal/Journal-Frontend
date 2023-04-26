import axios from 'axios';

const logIn = async (email: string, password: string) => {
    await axios.post('', {
        email: email,
        password: password
    })
}

export default logIn;