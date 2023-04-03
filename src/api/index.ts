import axios from 'axios';
import { SignupFormData } from '../types/type';

const signUp = async (formData: SignupFormData) => {
    const response = await axios.post('/* server url */', formData);
    return response.data;
}

export default signUp;