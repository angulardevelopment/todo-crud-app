JSON Server
 powerful tool frontend developers use to create a mock REST API for development and testing purposes. It allows front end developers to develop a full fake REST API with zero coding in seconds. 

 Advantages of Using JSON Server
Using JSON Server for frontend development offers numerous advantages:

Rapid Prototyping: JSON Server allows developers to generate a full fake REST API based on a JSON file, which can be used for rapid prototyping.
Flexibility: JSON Server allows developers to create custom routes and default routes, providing flexibility in how the API endpoints are structured.
Data Manipulation: JSON Server supports all the basic CRUD operations (Create, Read, Update, Delete), allowing developers to simulate real-world data interactions.
Consistency: JSON Server uses a JSON database file to ensure data consistency across different application parts.
Development Efficiency: By providing a mock server, JSON Server enables frontend developers to work independently of the backend, increasing overall development efficiency.

npm install json-server
json-server --watch db.json --port 4000
http://localhost:3000/posts?userId=1