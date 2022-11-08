import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mx-10 py-5">
      <h1 className="text-white text-4xl text-center">Welcome To Blog Page</h1>
      <h1 className="text-white text-3xl mt-10">
        1. Difference between SQL and NoSQL
      </h1>
      <p className="text-amber-500">
        SQL is the programming language used to interface with relational
        databases. Relational databases model data as records in rows and tables
        with logical links between them. NoSQL is a class of DBMs that are
        non-relational and generally do not use SQL.SQL programming can be
        effectively used to insert, search, update, delete database records.
        That doesn’t mean SQL cannot do things beyond that. It can do a lot of
        things including, but not limited to, optimizing and maintenance of
        databases.
      </p>
      <h1 className="text-white text-3xl">
        2. What is JWT, and how does it work?
      </h1>
      <p className="text-amber-500">
        JSON Web Token (JWT) is an open standard for securely transmitting
        information between parties as JSON object. It is compact, readable and
        digitally signed using a private key/ or a public key pair by the
        Identity Provider(IdP). So the integrity and authenticity of the token
        can be verified by other parties involved.
      </p>
      <p className="text-amber-500">
        The purpose of using JWT is not to hide data but to ensure the
        authenticity of the data. JWT is signed and encoded, not encrypted. JWT
        is a token based stateless authentication mechanism. Since it is a
        client-side based stateless session, server doesn't have to completely
        rely on a datastore(database) to save session information.
      </p>
      <h1 className="text-white text-3xl">
        3. What is the difference between javascript and NodeJS?
      </h1>
      <p className="text-amber-500">
        JavaScript is a simple programming language that can be used with any
        browser that has the JavaScript Engine installed. Node.js, on the other
        hand, is an interpreter or execution environment for the JavaScript
        programming language. It requires libraries that can be conveniently
        accessed from JavaScript programming to be more helpful.
      </p>
      <p className="text-amber-500">
        It's a bridge, open-source Js runtime environment for executing Js on
        the server.It's a JavaScript translator and environment that includes
        some valuable libraries for JavaScript programming.
      </p>
      <h1 className="text-white text-3xl">
        3. How does NodeJS handle multiple requests at the same time?
      </h1>
      <p className="text-amber-500">
        NodeJS receives multiple client requests and places them into
        EventQueue. NodeJS is built with the concept of event-driven
        architecture. NodeJS has its own EventLoop which is an infinite loop
        that receives requests and processes them. EventLoop is the listener for
        the EventQueue
      </p>
    </div>
  );
};

export default Blog;
