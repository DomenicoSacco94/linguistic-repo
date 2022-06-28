import create from "zustand";

interface AppState {
    toTranslate: string,
    setTotranslate: (toTranslate: string) => void
}


export const useStore = create<AppState>((set) => ({
    toTranslate: '',
    setTotranslate: (toTranslate: string) => set({ toTranslate })
}));