# bookstore-api

I challenged myself to create an API using node.js, express and mongodb to get a deeper understanding of the intricacies of APIs.

## Run tests

To run tests run `mocha` from the root of the project

## Documentation

To use the API, start a server by opening your command line and run `npm run server` from the root of the project (the port that the application is running on will appear in the console). Leave this running and then follow the instructions beneath depending on how you wish to interact with the API.

#### GET `/api/genres`

Returns a list of genres.

```
curl "http://localhost:3000/api/genres"
```

On success, the above command returns JSON structured like this:

```
[
  {
    _id: "1",
    name: "Horror & ghost stories",
    create_date: "2019-05-02T21:15:04.442Z"
    },
    {
    _id: "2",
    name: "Classic fiction",
    create_date: "2019-05-02T21:15:04.442Z"
  }
]
```

#### POST `/api/genres`

Creates a new genre.

```bash
curl "http://localhost:3000/api/genres" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "New Genre"}'
```
On success, the above command returns JSON structured like this:

```json
{
    "_id": "3",
    "name": "New Genre",
    "create_date": "2019-05-03T15:32:54.686Z",
    "__v": 0
}
```

#### PUT `/api/genres/:_id`

Updates a genre.

```bash
curl "http://localhost:3000/api/genres/4" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Genre Name"}'
```

On success, the above command returns JSON structured like this:

```json
{
    "_id": "4",
    "name": "Previous Genre Name",
    "create_date": "2019-05-03T15:32:54.686Z",
    "__v": 0
}
```

#### GET `/api/books`

Returns a list of the books in the library.

```
curl "http://localhost:3000/api/books"
```

On success, the above command returns JSON structured like this:

```
[
  {
    _id: "5ccb4a30e7179a596b1a149b",
    title: "Dr Jekyll and Mr Hyde",
    genre: "Classic fiction",
    author: "Robert Louis Stevenson",
    pages: 128,
    image_url: "https://cdn.waterstones.com/bookjackets/large/9780/1413/9780141389509.jpg",
    buy_url: "https://www.waterstones.com/book/dr-jekyll-and-mr-hyde/robert-louis-stevenson/9780141389509"
  },
  {
    _id: "5ccb4ae7e7179a596b1a14ff",
    title: "Frankenstein",
    genre: "Classic fiction",
    author: "Mary Shelley",
    pages: 352,
    image_url: "https://cdn.waterstones.com/bookjackets/large/9780/1414/9780141439471.jpg",
    buy_url: "https://www.waterstones.com/book/frankenstein/mary-shelley/maurice-hindle/9780141439471"
  }
]
```

#### GET `/api/books/:_id`

Returns an individual book

```
curl "http://localhost:3000/api/books/5ccb4c27e7179a596b1a1579"
```

On success, the above command returns JSON structured like this:

```
{
  _id: "5ccb4c27e7179a596b1a1579",
  title: "Sense and Sensibility",
  genre: "Classic fiction",
  author: "Jane Austen",
  pages: 432,
  image_url: "https://cdn.waterstones.com/bookjackets/large/9780/1414/9780141439662.jpg",
  buy_url: "https://www.waterstones.com/book/sense-and-sensibility/jane-austen/ros-ballaster/9780141439662"
}
```

#### POST `/api/books`

Creates a new book.

```bash
curl "http://localhost:3000/api/books" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"title": "Nine Perfect Strangers", "genre": "Crime & mystery", "author": "Liane Moriarty", "pages": 448, "image_url": "https://cdn.waterstones.com/bookjackets/large/9781/4059/9781405919463.jpg", "buy_url": "https://www.waterstones.com/book/nine-perfect-strangers/liane-moriarty/9781405919463"}'
```

On success, the above command returns JSON structured like this:

```json
{
    "_id": "5cd1abc3f880c4a9335863f3",
    "title": "Nine Perfect Strangers",
    "genre": "Crime & mystery",
    "author": "Liane Moriarty",
    "pages": 448,
    "image_url": "https://cdn.waterstones.com/bookjackets/large/9781/4059/9781405919463.jpg",
    "buy_url": "https://www.waterstones.com/book/nine-perfect-strangers/liane-moriarty/9781405919463",
    "__v": 0
}
```