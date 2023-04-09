import axios from 'axios';

const signUp = async (email: string, password: string) => {
    await axios.post('', {
        email: email,
        password: password
    })
}

export default signUp;