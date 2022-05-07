import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log(user_id)
    const existUser = this.usersRepository.findById(user_id);

    if(!existUser) {
      throw new Error("User does not exists!")
    }
    if(!existUser.admin) {
      throw new Error("This user is NOT an admin!")
    }

    const all = this.usersRepository.list()

    // const allParsed = all.map

    return all
  }
}

export { ListAllUsersUseCase };
