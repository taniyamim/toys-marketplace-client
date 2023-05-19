import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">What is an Access Token and Refresh Token?</h2>
          <p className="text-gray-600">
            An access token is a credential that allows a client to access protected resources on a server. It is typically short-lived and contains information about the user's permissions and authorization. Refresh tokens are long-lived credentials that can be used to obtain a new access token once the original token expires.
          </p>
          <p className="text-gray-600">
            Access tokens are usually sent with each request to the server to authenticate the user and determine their level of access. They should be stored on the client-side, often in memory or local storage. Refresh tokens, however, should be securely stored on the server-side, typically in a secure database or key management system.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Comparison between SQL and NoSQL databases</h2>
          <p className="text-gray-600">
            SQL (Structured Query Language) databases are based on the relational data model and use tables with predefined schemas to store and organize data. They ensure data consistency, support complex queries, and provide strong transactional support. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.
          </p>
          <p className="text-gray-600">
            NoSQL (Not Only SQL) databases, on the other hand, are more flexible and schema-less. They store data in various formats such as key-value pairs, documents, column families, or graphs. NoSQL databases offer scalability, high performance, and easy horizontal scaling. Some popular NoSQL databases are MongoDB, Couchbase, and Cassandra.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">What is Express.js and Nest.js?</h2>
          <p className="text-gray-600">
            Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and lightweight set of features for building web applications and APIs. Express.js is known for its middleware system, which allows developers to add functionality to the request/response cycle.
          </p>
          <p className="text-gray-600">
            Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides a higher level of abstraction, making it easier to develop complex applications. Nest.js incorporates modern design patterns such as dependency injection, decorators, and modules.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">What is MongoDB Aggregate and how does it work?</h2>
          <p className="text-gray-600">
            MongoDB Aggregate is a powerful feature of the MongoDB database that allows for advanced data aggregation and analysis. It enables users to perform complex operations on the data stored in MongoDB collections, such as filtering, grouping, sorting, joining, and transforming data.
          </p>
          <p className="text-gray-600">
            Aggregation pipelines in MongoDB consist of multiple stages that are executed sequentially, allowing for the manipulation and transformation of data. Each stage performs a specific operation on the input data and passes the results to the next stage. Aggregation pipelines in MongoDB are written using a declarative syntax, similar to SQL's query language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
