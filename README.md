<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
 

# NestJS CRUD Project

This is a CRUD (Create, Read, Update, Delete) application built with NestJS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)

## Introduction

This project demonstrates how to create a RESTful API for managing employees using NestJS. It showcases the implementation of basic CRUD operations:

- **Create:** Add new employees to the database.
- **Read:** Retrieve employee data from the database.
- **Update:** Modify existing employee records.
- **Delete:** Remove employees from the database.

## Features

- **Easy-to-Use API**: Simple and intuitive endpoints for managing employee data.
- **MongoDB Integration**: Utilizes MongoDB as the database for storing employee records.
- **Unit Testing**: Includes unit tests for controllers, services, and other components.
- **Jest Testing Framework**: Uses Jest, a delightful JavaScript testing framework, for unit testing.
- **TypeScript Support**: Fully written in TypeScript for enhanced type safety and code readability.

## Usage

Once the server is running, you can interact with the API using tools like Postman or curl. Here are some sample API endpoints:

- **GET /employees**: Retrieve all employees.
- **GET /employees/:id**: Retrieve a specific employee by ID.
- **POST /employees**: Create a new employee.
- **PUT /employees/:id**: Update an existing employee.
- **DELETE /employees/:id**: Delete an employee by ID.

