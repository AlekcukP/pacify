# Pacify

Welcome to Pacify, a Laravel and React/Redux-based project designed to enhance the shopping experience for stores with discount systems. This application aims to streamline interactions with shoppers, providing them with SMS-based discounts while empowering sellers with tools to manage shoppers, analyze data, and more.

## Requirements

- PHP version 8.1 or higher.

## Introduction

Pacify is a web application that bridges the gap between stores and shoppers with its discount system integration. Leveraging Laravel for the backend and React/Redux for the frontend, Pacify offers a seamless experience for both sellers and shoppers alike.

## Installation

To run Pacify on your local system, make sure you have PHP 8.1 or higher installed. Then follow these steps:

1. Clone the repository:

`git clone https://github.com/alekcukp/pacify.git`

2. Install composer dependencies:

`composer install`

3. Set up the database:

Create a new database and update the `.env` file with the database credentials.

4. Run the application with Laravel Sail:

`./vendor/bin/sail up`

5. Install npm dependencies:

`./vendor/bin/sail npm install`

6. Run migrations and seeders:

`./vendor/bin/sail php artisan migrate --seed`

7. Compile the frontend assets:

`./vendor/bin/sail npm run dev`

Your Pacify application should now be up and running at `http://localhost/`.

## License

The Pacify project is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use, modify, and distribute the code as per the terms of this license.
