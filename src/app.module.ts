import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true, // Enables subscriptions
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/todo-api'),
    TodoModule,
         MongooseModule.forRoot(
      'mongodb+srv://daly:123123123@cluster0.tunc1.mongodb.net/todo-api',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
