import { createContext, ReactNode } from "react";

export type Profile = {
  id: string;
};

export const UserContext = createContext<
  | {
      profile: Profile;
    }
  | undefined
>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // fetch user details here using the user id
  return (
    <UserContext.Provider value={undefined}>
      <nav className="w-full border-2 p-4">Navbar here</nav>
      {children}
    </UserContext.Provider>
  );
}
