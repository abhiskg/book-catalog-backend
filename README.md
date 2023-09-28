## Book Catalog Backend

## Live Link - https://book-catalog-backend-pi-ten.vercel.app

### Application Routes:

### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/d75aa434-e63a-44e4-b60a-3c2b644857fe (Single GET)
- api/v1/users/d75aa434-e63a-44e4-b60a-3c2b644857fe (PATCH)
- api/v1/users/d75aa434-e63a-44e4-b60a-3c2b644857fe (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/f0d62f53-31f8-4196-975b-364d6d19b604 (Single GET)
- api/v1/categories/f0d62f53-31f8-4196-975b-364d6d19b604 (PATCH)
- api/v1/categories/f0d62f53-31f8-4196-975b-364d6d19b604 (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
