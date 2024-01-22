# Bitcoin Price Tracking App

This repository contains a full-stack application for tracking historical Bitcoin prices. The application is built using Nuxt.js for the frontend, Node.js for the server, and MongoDB for storing historical data. Docker containers are used to deploy the entire system.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Environment Variables](#environment-variables)
  - [Build and Run Docker Containers](#build-and-run-docker-containers)
- [Usage](#usage)
- [License](#license)

## Prerequisites
- Docker installed on your machine
- Git installed on your machine

## Getting Started

### Clone the Repository

- git clone https://github.com/VENOMM9/bitcoin-price-app.git
- cd bitcoin-price-app

## Environment Variables
Create a .env file in the root directory and set the following environment variables:
- MONGODB_URI=mongodb://mongo:27017/bitcoin-price-db

## Build and Run Docker Containers
docker-compose up --build

Visit http://localhost:3450 in your browser to access the application.

## Usage
- Open your browser and go to http://localhost:3450
- Select the desired display period for Bitcoin price data
- Explore the historical price chart



## License
This project is licensed under the MIT License.
