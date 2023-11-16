This is a Full Stack MERN project which has following functionalities implemented:

1. Google OAuth integration: Enable users to log in using Google OAuth.
2. Communication details: Allow users to view their communication history, including sent and
received emails.
3. Send email: Implement an endpoint to send emails using the Postmarkapp.com API.

To setup the project follow these steps:
1. Clone this repository to your local computer.
2. Change the .env file and put the necessary values there
3. As the project uses MongoDB database and Postmarkapp API you need to login to both so as to get the unique API key and secret key.
4. Replace those keys in the project.
5. CLIENT : This folder contains the react frontend of the project.
6. SERVER : This folder contains the node.js backend of the project.
7. Client -> index.js is the entry point and App.js contains all the routes and also check if user is authenticated or not.
8. Server -> server.js is the entry point for the server, db.js has the necessary database connection, and routes folder contains the routes to different endpoints.

END TO END WORKFLOW OF THE PROJECT:

---Log in Form---
Google OAuth Integration

Login:

Step 1: Click on Sign in
![image](https://github.com/Tarezh/commsystem/assets/100041569/fd91718e-b58a-4454-a0b6-5d91753e960e)

Step 2: Choose an email
![image](https://github.com/Tarezh/commsystem/assets/100041569/7608aab7-9639-4217-8e5f-ad48582dcae3)

Main Page:

Fetches from MongoDB database and displays it at the frontend. All the mails displayed is fetched from backend.

 ![image](https://github.com/Tarezh/commsystem/assets/100041569/523f8c5b-12de-417c-98fe-1e0c1d65933f)
 
MongoDB collection:

![image](https://github.com/Tarezh/commsystem/assets/100041569/2bd80317-f57f-46d3-9f4f-0e60c666dd1b)

Compose Mail Button:

![image](https://github.com/Tarezh/commsystem/assets/100041569/92ab029b-a155-4a9b-9e33-43acb4e032b1)

Here you can put the address of receiver, subject and message of the mail -> click Send

![image](https://github.com/Tarezh/commsystem/assets/100041569/cab7deea-63b1-4771-9013-e797f4df1f4c)

The Sent mail is updated at last of the list:

![image](https://github.com/Tarezh/commsystem/assets/100041569/f0ecae02-5fd9-4ab2-801e-bd5f5d41b4e9)

Email is Sent:

![image](https://github.com/Tarezh/commsystem/assets/100041569/7afe69f5-6b69-44ce-b9ef-0131cb051486)

You can also logout here:

![image](https://github.com/Tarezh/commsystem/assets/100041569/77bd86f4-e4f6-4c44-ba24-551247fcb897)












