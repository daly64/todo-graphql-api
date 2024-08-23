import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'The title of the todo item. Required.' })
  readonly title: string;

  @Field(() => String, {
    description: 'The description of the todo item. Optional.',
    nullable: true,
  })
  readonly description?: string;

  @Field(() => Boolean, {
    description: 'Whether the todo item is completed. Defaults to false.',
    defaultValue: false,
  })
  readonly isDone: boolean;
}
