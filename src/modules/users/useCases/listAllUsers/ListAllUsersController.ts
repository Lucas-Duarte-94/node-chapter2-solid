import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try{
      const header: any = request.headers;

      const all = this.listAllUsersUseCase.execute(header)
  
      return response.json(all);
    }catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }}

export { ListAllUsersController };
