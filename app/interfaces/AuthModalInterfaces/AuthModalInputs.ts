export interface IAuthModalInputs {
  inputs: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    password: string,
  };
  handleChangeInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
}