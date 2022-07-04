import create from 'zustand';

interface AppState {
  toTranslate: string | null;
  currentPage: number;
  setTotranslate: (toTranslate: string | null) => void;
  setCurrentPage: (page: number) => void;
}

export const useStore = create<AppState>((set) => ({
  toTranslate: null,
  currentPage: 0,
  setTotranslate: (toTranslate: string | null) => set({ toTranslate }),
  setCurrentPage: (currentPage: number) => set({ currentPage })
}));
