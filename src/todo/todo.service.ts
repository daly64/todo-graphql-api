import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

   create(createTodoInput: CreateTodoInput) {
    const newTodo = new this.todoModel(createTodoInput);
    newTodo.save();

  }

   findAll() {
     this.todoModel.find().exec();
  }

  findOne(id: string) {
     this.todoModel.findById(id).exec();
  }

   update(id: string, updateTodoInput: UpdateTodoInput) {
     this.todoModel
      .findByIdAndUpdate(id, updateTodoInput, { new: true })
      .exec();
  }

   remove(id: string) {
     this.todoModel.findByIdAndDelete(id).exec();
  }
}
