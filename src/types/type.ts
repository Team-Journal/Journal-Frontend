export interface HeaderProps {
    title: string
}

export interface SignupFormData {
    email: string
    password: string
    confirmPassword: string
    verifyCode: string
}

export interface ErrorFormData {
    emailError: boolean
    passwordError: boolean
    confirmPasswordError: boolean
    verifyCodeError: boolean
}

export interface LoginFormData {
    email: string
    password: string
}