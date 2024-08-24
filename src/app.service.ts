import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <style>
      h1, h2 {
        text-align: center;
      }

      a {
        color: #66d9ef;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
    <h1>Welcome to Todo GraphQL API</h1>
    <h2>
      Explore the API via
      <a href="/graphql">GraphQL Playground</a>
      or
      <a href="/graphql/docs">API Documentation</a>
    </h2>
    `;
  }
}
