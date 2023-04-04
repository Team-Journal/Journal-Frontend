import axios from 'axios';

const signUp = async (email: string, password: string) => {
    try {
        const response = await axios.post('/* server url */', {email, password});
        const userData = response.data;
        return userData;
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export default signUp;