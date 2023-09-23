# MyGroup API

This API provides endpoints for managing and retrieving information about members in the MyGroup.

## Endpoints

### 1. Get All Members

- **Endpoint:** `http://localhost:5000/`
- **Method:** GET
- **Description:** Retrieve information about all members in MyGroup.

### 2. Get Member Information by ID

- **Endpoint:** `http://localhost:5000/20110377/:id`
- **Method:** GET
- **Description:** Retrieve information about a specific member in MyGroup by providing their ID as a parameter.

### 3. Add a New Member

- **Endpoint:** `http://localhost:5000/20110377/:id`
- **Method:** POST
- **Description:** Add a new member to MyGroup by providing their information in the request body in JSON format. The member's ID should be unique.

### 4. Get Member Name by ID or All Member Names

- **Endpoint:** `http://localhost:5000/message/:id`
- **Method:** GET
- **Description:** Retrieve the name of a specific member in MyGroup by providing their ID as a parameter. If no ID is provided, retrieve the names of all members in MyGroup.

## Usage

```console
git clone https://github.com/lekhanhlinh-star/20110377.git
cd 20110377
npm install
npm run server
```



