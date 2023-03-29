export interface HeaderProps {
    title: string
    menu1: string
    menu2: string
    menu3: string
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