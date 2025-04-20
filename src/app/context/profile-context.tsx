import { createContext, ReactNode, useEffect, useState } from "react";

export type Profile = {
  id: string;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
  locale: string;
  isLoading: boolean;
};

const initialValue: Profile = {
  id: "",
  name: "",
  given_name: "",
  family_name: "",
  email: "",
  picture: "",
  locale: "",
  isLoading: false,
};

export const UserContext = createContext<{
  profile: Profile;
}>({ profile: initialValue });

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(initialValue);

  useEffect(() => {
    const fetchUserDetails = async (userId: string) => {
      setProfile((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/users/${userId}`);
      const data = await response.json();
      setProfile({ ...data, isLoading: false });
    };

    fetchUserDetails("108200847501413324737");
  }, []);

  return (
    <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>
  );
}
