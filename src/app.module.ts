import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      cors: {
        origin: '*',
        credentials: true,
      },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
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
