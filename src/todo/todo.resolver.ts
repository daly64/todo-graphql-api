import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
   createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    pubSub.publish('todos', {
      todosUpdated: () => this.todoService.findAll(),
    });
    return this.todoService.create(createTodoInput);
  }

  @Query(() => [Todo], { name: 'todos' })
   findAll() {
     return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
   updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
pubSub.publish('todos', { todos: this.todoService.findAll() });
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Todo)
   removeTodo(id: string) {
    pubSub.publish('todos', { todos: this.todoService.findAll() });
    return this.todoService.remove(id);
  }

  @Subscription(() => [Todo])
  todos() {
    setTimeout(
      () => pubSub.publish('todos', { todos: this.todoService.findAll() }),
      1000,
    );
    return pubSub.asyncIterator('todos');
  }
}
