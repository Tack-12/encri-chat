# BLOGGY 

A backend service built using **TypeScript**, **Express**, and **Prisma (PostgreSQL)**. This project is a learning project and provides RESTful API endpoints along with real-time messaging functionality using **Socket.IO**, secured with **JWT authentication**.


---

## Features

* RESTful API architecture
* TypeScript for scalability and type safety
* Express.js server setup
* Prisma ORM with PostgreSQL
* Real-time messaging with Socket.IO
* Room-based chat functionality
* JWT-based authentication and authorization
* Protected routes via middleware
* API tested using Postman

---

## Tech Stack

* Backend: Express.js
* Language: TypeScript
* Database: PostgreSQL
* ORM: Prisma
* Realtime: Socket.IO
* Auth: JSON Web Tokens (JWT)
* Client Storage: localStorage
* Testing: Postman

---

## Project Structure

```id="mk2d91"
.
├── controller   ## HAS ALL THE LOGIC FOR ROUTES
├── generated
├── node_modules
├── package.json
├── package-lock.json
├── prisma 
├── prisma.config.ts
├── routes   ## All the Routes
├── server.ts  ## Main Server
├── tsconfig.json
└── utils   ## Passport.js Functions
```

---

## Installation

```bash id="kz4v7l"
# Clone repository
git clone <your-repo-url>

# Navigate into project directory
cd <your-project-name>

# Install dependencies
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env id="q5x1zl"
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/db_name"
PORT=5000
SECRET_KEY="your_secret_key"
```

---

## Prisma Setup

```bash id="s7q4de"
npx prisma generate
npx prisma migrate dev
```






## API Endpoints (Examples)

| Method | Endpoint           | Description       | Protected |
| ------ | ------------------ | ----------------- | --------- |
| GET    | /api/messages      | Retrieve messages | Yes       |
| POST   | /api/messages      | Send a message    | Yes       |
| POST   | /api/chats         | Creates a chat between users | Yes       |
| POST   | /api/auth/login    | Login             | No        |
| POST   | /api/auth/register | Register          | No        |

---

## Real-Time Messaging (Socket.IO)

### Join a chat room

```js id="y2m9ka"
socket.emit("joinChat", chatId);
```

### Server listens

```ts id="d8p3sr"
socket.on("joinChat", (chatId) => {
  socket.join(chatId);
});
```

### Emit message

```ts id="r1n6tz"
io.to(chatId).emit("newMessage", newMessage);
```


---

## Testing

* All endpoints tested using Postman
* JWT flow verified (login → token → protected routes)
* Socket.IO tested via client tools or frontend
* Postman has limited WebSocket testing support

---

## Known Limitations

* No refresh token mechanism
* Limited validation and error handling
* No role-based access control (RBAC)
* No rate limiting or advanced security middleware
* Socket scaling not implemented

---

## Future Improvements

* Refresh tokens and session handling
* HttpOnly cookie-based authentication
* Role-based authorization (RBAC)
* Input validation (Zod/Joi)
* Logging (Winston/Morgan)
* Docker and CI/CD setup
* Redis adapter for Socket.IO scaling

---

* Socket.IO
* Postman
