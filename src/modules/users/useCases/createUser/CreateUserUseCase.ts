import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existUser = this.usersRepository.findByEmail(email)

    if(!existUser) {
      const newUser = this.usersRepository.create({ name, email })
      
      return newUser;
    }
    throw new Error("User already exists!")
  }
}

export { CreateUserUseCase };
