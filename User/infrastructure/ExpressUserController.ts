import { Request, Response } from "express";
import { ServiceContainer } from "../../Share/infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class ExpressUserControlle {
  // * Get All User
  async getAll(req: Request, res: Response) {
    const user = await ServiceContainer.user.getAll.run();
    return res.json(user).status(200);
  }

  // * Get One User
  async getOneById(req: Request, res: Response) {
    try {
      const user = await ServiceContainer.user.getOneById.run(req.params.id);
      //* Done: the user was found
      return res.json(user).status(200);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).send({ message: error.message });
      }

      // ! Error: is distint to notFound
      throw error;
    }
  }

  async create(req: Request, res: Response) {
    const { id, name, email, createAt } = req.body as {
      id: string;
      name: string;
      email: string;
      createAt: string;
    };
    await ServiceContainer.user.create.run(id, name, email, new Date(createAt));
    return res.status(201).send();
  }

  async edit(req: Request, res: Response) {
    const { id, name, email, createAt } = req.body as {
      id: string;
      name: string;
      email: string;
      createAt: string;
    };
    await ServiceContainer.user.edit.run(id, name, email, new Date(createAt));
    return res.status(204).send();
  }

  async delete(req: Request, res: Response) {
    await ServiceContainer.user.delete.run(req.params.id);
    return res.status(204).send();
  }
}
