// export interface UserState {
//   isLoggedIn: boolean;
//   shouldCreateAccount: boolean;
//   logIn: () => void;
//   logOut: () => void;
//   accountCreated: () => void;
//   noAccountCreated: () => void;
// }

export interface State {
  token: string;
}

export interface Action {
  setToken: (token: string) => void;
}
