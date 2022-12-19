export interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  userLogin: (
    formData: iFormLoginData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUser {
  email: string;
  name: string;
  id: number;
}

export interface iFormLoginData {
  email: string;
  password: string;
}