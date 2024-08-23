import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field((type) => String, { description: 'The id of the todo' })
  id: string;

  @Field({ nullable: true, description: 'The title of the todo' })
  readonly title?: string;

  @Field({ nullable: true, description: 'The description of the todo' })
  readonly description?: string;

  @Field({ nullable: true, description: 'The completed of the todo' })
  readonly isDone?: boolean;
}
