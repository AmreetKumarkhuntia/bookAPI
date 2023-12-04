# bookAPI
 BookAPI
## Manual Installation

Clone the repo:

```bash
git clone https://github.com/AmreetKumarkhuntia/bookAPI.git
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash

# Port
PORT = # default 5001

# URL of the Mongo DB
DATABASEURL = mongodb://127.0.0.1:27017/database_name

```

## Project Structure

```
root\
 |--.env            # Environment variables
 |--models\         # Mongoose models
 |--routes\         # Routes
 |--App.js        # App entry point
```

### API Endpoints

List of available routes:


**User routes**:\
`POST api/books/` - Add a book
`GET api/books/` - Get Books (optional parameters can be passed such as id, name, email, author, year, and the parameters should be passed in the body)
`PUT api/books/:id` - Update Book

## License

[MIT](LICENSE)
