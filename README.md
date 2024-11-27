# JGS-assignment

# Orders App - Full-Stack Application

This is a full-stack application to manage and display a large dataset of orders with a virtualized, scrollable table. The application utilizes a backend built with Node.js and Express, and a frontend developed using React with TypeScript.

## Features:
- Efficient cursor-based pagination on the backend.
- Virtualized scrolling table on the frontend for handling large datasets.
- Sorting and filtering capabilities for the order data.
- React Query for efficient data fetching and caching on the frontend.
- Fully responsive and optimized for smooth performance.

---

## Tech Stack

**Backend:**
- Node.js
- Express
- MongoDB (for data storage)
- Mongoose (for MongoDB object modeling)
- Cursor-based pagination
- TypeScript

**Frontend:**
- React.js
- TypeScript
- React Query (for data fetching)
- React Virtualized (for virtualized scrolling table)

---

## Setup Instructions

### Backend Setup:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/orders-app.git
   cd orders-app

2. **Navigate to the backend folder:**

    ```bash
    cd backend

3. Install dependencies:
    You will need to install the required Node.js dependencies.

    ```bash
    npm install

4. ### Set up the environment variables:

    Create a `.env` file in the `backend` directory and configure the necessary environment variables.

    Example `.env` file:

    ```env
    MONGO_URI=mongodb://localhost:27017/orders
    PORT=5000

5. Seed the database with dummy data:

    To generate 10,000 dummy orders for testing:

    ```bash
    npm run seed

    This will generate random order records and insert them into the MongoDB database.

6. Start the backend server:

    ```bash
    npm start

    The backend API will be available at http://localhost:5000.

7. Frontend Setup:
    Navigate to the frontend folder:

    ```bash
    cd frontend

8. Install dependencies:

    You will need to install the required dependencies for React:

    ```bash
    npm install

9. Start the frontend development server:

    ```bash
    npm run dev

The frontend application will be available at http://localhost:3000.

## API Endpoints

#### GET /api/orders

Fetch a list of orders with cursor-based pagination.

Query Parameters:

    cursor: The pagination cursor (string, optional)
    limit: Number of records per page (integer, default: 50)
    sort: Field to sort by (string, default: "createdAt")
    sortDirection: Sorting direction, either asc or desc (default: "desc")

Response:

    ```json
    Copy code
    {
    "data": [
        {
        "id": "1",
        "customerName": "John Doe",
        "orderAmount": 150.00,
        "status": "completed",
        "items": [
            { "name": "Item 1", "quantity": 2, "price": 50 },
            { "name": "Item 2", "quantity": 1, "price": 50 }
        ],
        "createdAt": "2023-11-01T10:00:00Z"
        }
    ],
    "nextCursor": "some-cursor-value",
    "totalCount": 10000
    }
### Frontend Structure

The frontend consists of the following main components:

- `App.tsx`: Main component that renders the order list and manages data fetching.
- `OrderTable.tsx`: Table component used to display the orders with virtualized scrolling for performance optimization.
- `api.ts`: API functions to fetch orders using React Query.
- `styles.css`: Global styling applied throughout the app.

### Performance Optimizations

#### Backend:
- **Cursor-based Pagination**: Instead of sending all records at once, the backend only sends a limited number of records based on the cursor and limit query parameters.
- **Indexing**: Ensure proper indexing on MongoDB collections to speed up query performance, especially for sorting and pagination operations.

#### Frontend:
- **Virtualized Scrolling**: The table utilizes `react-virtualized` to render only visible rows. This ensures that even with large datasets (like 10,000 records), the browser remains performant.
- **React Query**: We use React Query to manage server state and cache data, ensuring a smooth user experience with minimal data fetching.

### Development Notes

- React Query handles infinite scrolling and caching on the frontend, fetching only the necessary data when needed.
- Cursor-based pagination on the backend ensures that the API does not return the entire dataset at once, optimizing response times and reducing memory usage.
- Database indexing on the fields used for sorting (`createdAt`, `orderAmount`, etc.) is critical for efficient query performance.
