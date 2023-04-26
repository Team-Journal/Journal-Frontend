import { create } from 'zustand';

interface State {
    isLogin: boolean
    toggleIsLogin: () => void
}

const useStore = create<State>((set) => ({
    isLogin: false,
    toggleIsLogin: () => set((state) => ({ isLogin: !state.isLogin }))
}))

export default useStore;