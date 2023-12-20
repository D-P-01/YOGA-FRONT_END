# Project Title - YOGA-Application
## Problem Statement:
Assume that you are the CTO of an outsourcing firm which has been chosen to build an
admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:
- Only people within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.
- They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in the
same month they need to be in the same batch.


## Features
- User can create account.
- User details while sign up will be validated
- User can subscribe a plan.
- A Mock Function for Payment is implemented.
- Once Subscribed can't changed the plan for whole month.

  
## Technology Used
React for Frontend
Node and Express for backend
Mysql as a Database

## ER Diagram:

![Screenshot (513)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/f62be719-5791-4aa2-9936-6665e81f8b4d)

The system comprises two main components: "user" and "userplan." 
In the context of userplan, there exists a scenario of partial participation, allowing users to possess a user account without necessarily subscribing to any batch or plan.
The Email ID serves as the primary key, while the "Valid till" attribute is considered a derived attribute.

## Results:

![Screenshot (525)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/0632e38d-1126-457a-9c3e-89aace2c3ea2)
####Login Page 

![Screenshot (526)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/d4a7aa0f-4837-4f21-bc14-a22921409477)
####Dahboard for Registered Candidate

![Screenshot (527)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/9f62a0d5-0e0b-4297-9346-0c518aa164cf)
####Class Details of Registered Candidate

![Screenshot (528)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/433ce7ae-8bb9-4495-8482-c51b0b110b52)
####Registration Form for enrollment in Yoga Class

![Screenshot (529)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/894317a5-6330-438c-8324-84e076f19ff2)
####Age constraint is between 18 and 65 for registration

![Screenshot (530)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/447f009e-4ebf-4049-a38e-82e3d107cbe8)
####Dashboard for a candidate who has made account but not yet enrolled

![Screenshot (531)](https://github.com/D-P-01/YOGA-FRONT_END/assets/148607994/c859a2da-2bd0-4f0f-a3ca-4b5d48bd4b27)
####Payment Page 






