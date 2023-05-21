import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blog = () => {
    return (
        <HelmetProvider>

            <Helmet>
                <title>Cooking Toy | Blog</title>
            </Helmet>

            <div className='mx-2 md:mx-40'>
                <h1 className='text-center font-bold text-2xl my-10'>Question And Answer Section</h1>

                <div>
                    <h1 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

                    <p> <b>Ans:</b> Access tokens and refresh tokens are important components of authentication systems. An access token is a credential granted to a client for accessing protected resources. It is obtained from an authentication server and has an expiration time. The access token is included in each request to the server to authenticate and authorize the client.

                        A refresh token is a long-lived credential that allows the client to obtain a new access token when the current one expires. It is securely stored by the client and is only sent to the authentication server when requesting a new access token. The server validates the refresh token and issues a fresh access token without requiring the client to provide their credentials again.

                        For client-side storage, there are a few options. One approach is to store the tokens as secure HTTP-only cookies. This ensures that the tokens are automatically sent with each request, but careful security measures are necessary to prevent cross-site scripting attacks.

                        Another option is to store the tokens in the client's browser using local storage. However, this approach requires additional security measures to protect against cross-site scripting vulnerabilities.

                        Alternatively, you can use session storage, which limits token storage to the current browser session. However, tokens stored in session storage will be lost when the session ends.

                        In summary, access tokens authenticate clients and allow access to protected resources, while refresh tokens provide a way to obtain new access tokens. When storing tokens on the client-side in PHP applications, it's important to consider security implications and choose a suitable storage method like cookies, local storage, or session storage while implementing necessary security measures.</p>
                </div> <br />

                <div>
                    <h1 className='font-bold'>2. Compare SQL and NoSQL databases?</h1>

                    <p> <b>Ans:</b> SQL databases are relational databases that use structured tables with predefined schemas. They prioritize data consistency and integrity and are ideal for applications with complex relationships. NoSQL databases are non-relational and offer flexibility and scalability. They are suitable for handling large volumes of unstructured or semi-structured data but may sacrifice data consistency for performance. The choice depends on specific application requirements and preferences.</p>
                </div> <br />

                <div>
                    <h1 className='font-bold'>3. What is express js? What is Nest JS?</h1>

                    <p> <b>Ans:</b> Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and APIs by handling HTTP requests and responses. Express.js is known for its lightweight nature and allows developers to easily handle routing, middleware, and templating.

                        NestJS is a powerful, scalable, and opinionated Node.js framework for building server-side applications. It is built on top of Express.js and incorporates features from other frameworks like Angular. NestJS follows a modular and structured approach, promoting the use of decorators, dependency injection, and TypeScript. It provides a robust architecture for creating highly maintainable and scalable applications, with built-in support for features such as routing, validation, and dependency injection.</p>
                </div> <br />

                <div>
                    <h1 className='font-bold'>4. What is MongoDB aggregate and how does it work ?</h1>

                    <p> <b>Ans:</b> MongoDB's aggregate is a powerful framework for performing data aggregation operations on collections. It allows you to process and analyze data, combining multiple stages into a pipeline to transform, filter, and compute results from your data.

                        The aggregation pipeline consists of multiple stages, each performing a specific operation on the data. These stages can include tasks like filtering documents, grouping data, performing calculations, sorting results, and more. Each stage takes the output of the previous stage as its input and passes the modified data to the next stage.

                        Aggregation operations in MongoDB can be used for tasks such as generating reports, performing data analysis, calculating statistics, and creating complex queries. It provides a flexible and efficient way to manipulate and extract insights from large amounts of data stored in MongoDB collections.</p>
                </div> <br />
            </div>
        </HelmetProvider>
    );
};

export default Blog;