# Smart Dependency Resolver

A graph-based dependency resolution system built using **C++ (Topological Sort)** and **Node.js Express backend**.

## Tech Stack
- C++
- Node.js
- Express
- MongoDB

## Features
- Task dependency resolution
- Topological sorting
- Cycle detection
- REST API
- MongoDB persistence

## Example

Input:

Tasks:
A,B,C,D

Dependencies:
A → B  
A → C  
B → D  
C → D

Output:

A → B → C → D

## API

POST /resolve

Example request:

{
 "tasks":["A","B","C","D"],
 "dependencies":[
   ["A","B"],
   ["A","C"],
   ["B","D"],
   ["C","D"]
 ]
}

Response:

{
 "executionOrder":["A","B","C","D"]
}