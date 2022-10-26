import React from 'react';

const Blog = () => {
    return (
        <div className='mt-3 text-center'>
            <h2 className=''>Here are some important questions and their answers</h2>
            <div className='container mt-3 py-5'>
                <div className='mb-4 p-2 p-lg-3 border border-dark rounded'>
                    <p className='fs-4 fw-bold'>Ques. No. 1 : What is CORS?</p>
                    <p>Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                </div>
                <div className='mb-4 p-2 p-lg-3 border border-dark rounded'>
                    <p className='fs-4 fw-bold'>Ques. No. 2 : Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p>We should use firebase because it has incredible built in analytitcs.It is free and has the capacity to report 500 event types, each with up to 25 attributes.You can identify custom audiences can in the Firebase console based on device data, custom events, or user properties. Then you can use these audiences that you have specified with other Firebase features when targeting new features or notifications.</p>
                    
                    <p className='text-start ms-3'>We can use Back4App, Backendless, Kuzzle, Pubnub, Kumulos etc. as a firebase alternatives.</p>
                </div>
                <div className='mb-4 p-2 p-lg-3 border border-dark rounded'>
                    <p className='fs-4 fw-bold'>Ques. No. 3 : How does the private route work?</p>
                    <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.The constraints for Public and Private routes are that Public routes can be  accessed before login and Private routes should not be accessible before login.</p>
                </div>
                <div className='mb-4 p-2 p-lg-3 border border-dark rounded'>
                    <p className='fs-4 fw-bold'>Ques. No. 4 :  What is Node? How does Node work?</p>
                    <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;