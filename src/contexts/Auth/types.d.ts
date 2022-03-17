export interface AuthContextProps {
  data: User | null;
  error: string;
  loading: boolean;
  isLogged: boolean;
  login(email: string, password: string): void;
  logout(): void;
}
