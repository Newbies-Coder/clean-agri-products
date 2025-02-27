import { User } from "@/@types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: User | null;
};

type AuthAction = {
  setUser: (user: User) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clear: () => set({ user: null }),
    }),
    {
      name: "auth-store",
    }
  )
);
