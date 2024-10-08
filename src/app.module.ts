import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
autoSchemaFile: true,
      // autoSchemaFile: 'schema.gql', // <-- GraphQL schema generated from schema.gql',
      installSubscriptionHandlers: true, // Enables subscriptions
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/todo-api'),
    TodoModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://daly:123123123@cluster0.tunc1.mongodb.net/todo-api',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
