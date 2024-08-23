import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const newTodo = new this.todoModel(createTodoInput);
    return newTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

 async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async update(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo> {
    return this.todoModel
      .findByIdAndUpdate(id, updateTodoInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
