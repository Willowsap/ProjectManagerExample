import { User } from "src/app/auth/models/user.model";
import { Item } from "./item.model";
import { ProjectStep } from "./project-step.model";

export interface Project {
    id: number;
    name: string;
    description: string;
    owner: User;
    shoppingList: Array<Item>;
    steps: Array<ProjectStep>;
    createdAt: string;
    updatedAt: string;
    completed: boolean;
}