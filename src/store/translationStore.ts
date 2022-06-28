import create from "zustand";

interface AppState {
    toTranslate: string,
    currentPage: number,
    setTotranslate: (toTranslate: string) => void
    setCurrentPage: (page: number) => void
}


export const useStore = create<AppState>((set) => ({
    toTranslate: '',
    currentPage: 0,
    setTotranslate: (toTranslate: string) => set({ toTranslate }),
    setCurrentPage: (currentPage: number) => set({ currentPage }),
}));