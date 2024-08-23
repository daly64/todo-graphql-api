import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String, { description: 'Unique identifier for the todo' })
  id: string;

  @Field(() => String, { description: 'The title of the todo' })
  title: string;

  @Field(() => String, { description: 'The description of the todo' })
  description: string;

  @Field(() => Boolean, { description: 'Whether the todo is completed or not' })
  isDone: boolean;
}
