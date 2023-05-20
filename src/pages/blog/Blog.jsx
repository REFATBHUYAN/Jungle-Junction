import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle('Blog');
  return (
    <section className="max-w-full mx-auto bg-green-200 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center py-10 text-5xl">Blogs</h1>
        <div className="grid grid-cols-1 py-10 gap-2 ">
          <div className="card w-full bg-green-400  text-black">
            <div className="card-body">
              <h2 className="card-title text-black">
                1. What is an access token and refresh token? How do they work
                and where should we store them on the client-side?
              </h2>
              <p className="text-black">
                <span className="font-semibold text-black">Access Token:</span> <br /> An access token is like a key that allows a
                user or application to access protected resources. It's
                generated when you log in or authenticate and has an expiration
                time. You include it with your requests to prove your identity
                and get the data you need. <br /> <span className="font-semibold text-black">Refresh Token:</span> <br /> A
                refresh token is a long-lasting key that helps you get a new
                access token when the old one expires. It's issued during
                authentication and used to request a fresh access token without
                logging in again. It helps you stay logged in and avoids
                constant reauthentication. <br /> Storage on Client-side: <br />{" "}
                For web apps, store tokens in secure browser cookies with
                "HttpOnly" and "Secure" flags. For mobile apps, use secure OS
                storage mechanisms like Keychain (iOS) or Keystore (Android).
                For SPAs, store in Local Storage but be cautious of cross-site
                scripting attacks. Protect tokens with encryption and follow
                security best practices.
              </p>
            </div>
          </div>
          <div className="card w-full bg-green-400  text-black">
            <div className="card-body">
              <h2 className="card-title text-black">
                1. Compare SQL and NoSQL databases?
              </h2>
              <p className="font-semibold text-black">SQL databases (Relational Databases):</p>
              <ul className="list-inside list-disc pl-5 text-black">
                <li>
                  Structured Query Language (SQL) databases store structured
                  data in tables with predefined schemas.
                </li>
                <li>
                  They have rigid schemas and use relationships (joins) between
                  tables.
                </li>
                <li>
                  Suitable for complex transactions and enforcing data
                  integrity.
                </li>
                <li>
                  Good for structured data and well-defined relationships.
                </li>
                <li>Examples: MySQL, PostgreSQL, Oracle.</li>
              </ul>
              <p className="font-semibold text-black">NoSQL databases (Non-relational Databases):</p>
              <ul className="list-inside list-disc pl-5 text-black">
                <li>
                  NoSQL databases store unstructured or semi-structured data,
                  offering flexibility in data models.
                </li>
                <li>
                  They don't rely on fixed schemas and use a variety of data
                  models like key-value, document, columnar, or graph.
                </li>
                <li>
                  Suited for scalability, high-performance, and handling large
                  volumes of data.
                </li>
                <li>Good for dynamic and evolving data structures.</li>
                <li>Examples: MongoDB, Cassandra, Redis.</li>
              </ul>
            </div>
          </div>
          <div className="card w-full bg-green-400  text-black">
            <div className="card-body">
              <h2 className="card-title text-black">
                3. What is express js? What is Nest JS?
              </h2>
              <p className=" text-black">
                Express.js is a minimal and flexible web application framework
                for Node.js. It simplifies the process of building web
                applications and APIs by providing a set of features and
                middleware to handle routing, requests, and responses. <br />{" "}
                Nest.js is a progressive and opinionated framework for building
                efficient and scalable server-side applications with Node.js. It
                uses TypeScript and incorporates concepts from Angular to
                provide a modular and structured approach for building robust
                applications.
              </p>
            </div>
          </div>
          <div className="card w-full bg-green-400  text-black">
            <div className="card-body">
              <h2 className="card-title text-black">
                4. What is MongoDB aggregate and how does it work ?
              </h2>
              <p className=" text-black">
                In MongoDB, the aggregate function is used to perform advanced
                data aggregation operations. It allows you to process and
                transform data from multiple documents in a collection. It works
                by providing a pipeline of stages, where each stage performs a
                specific operation like filtering, grouping, sorting, or
                applying calculations. Each stage takes input from the previous
                stage and passes its output to the next stage, allowing you to
                perform complex data manipulations and analysis in a single
                query.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
