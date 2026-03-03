# HealthChat Application

- Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/healthcare-chat-app
SESSION_SECRET=your-session-secret
```

## Running the Application

1. Make sure MongoDB is running
2. Start the application:
   ```
   npm run dev
   ```
   or
   ```
   pnpm run dev
   ```

1. Register as either a doctor or patient
2. Log in with your credentials
3. For patients: Browse available doctors and initiate chats
4. For doctors: View patient requests and respond to chats
5. Messages are saved and can be viewed in the conversation history 
