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
  // const userId = "H8nqZdjoMsxZLrsCB9nlrWfYPEXBBCkn";

  // fetch user details here using the user id
  return (
    <UserContext.Provider value={undefined}>{children}</UserContext.Provider>
  );
}
