# Task_Manager_Project_3
Task Manager for GA Student Assignments

## Technologies Used
	
	* Ruby, Sinatra, PostgreSQL, ActiveRecord, Sessions.

## REACT APP

See corresponding REACT app info at https://github.com/Amjad-H-Ali/Genaral-Assembly-Task-Manager-React

## Route Info


### UserController

* #### URL:

	 _/register_

* #### METHOD: 
	
	_`POST`_

* #### DETAILS:	

    - Takes in a new username and password.
    - Checks to make sure that username deosn't exist.
    - If it doesn't already exist, a new user will be created, a session will be created, and the user will be ‘logged in’.

* #### RESPONSE:

	###### SUCCESS

	`{
		success: true,
		username: JohnDoe123,
		message: "Logged in as JohnDoe123."
	}`

	###### Fail

	`{
		success: false,
		message: "Username already taken."
	}`


* #### URL:

	 _/login_

* #### METHOD: 
	
	_`POST`_	

* ### DETAILS:	 	

    - Takes in a username and password.
    - Checks against users database.
    - If the information is correct, a session will be created and the user will be ‘logged in’.

* #### RESPONSE:

	###### SUCCESS:

	`{
		success: true,
		username: JohnDoe123,
		message: "Logged in as JohnDoe123."
	}`

	###### Fail

	`{
		success: false,
		message: "Invalid Username or Password."
	}`

* #### URL:

	 _/logout_

* #### METHOD:
	
	_`POST`_

* ### DETAILS:

	- Destroys the session, effectively ‘logging the user out’	

* #### RESPONSE:
	
	`{
		success: true,
		message:"Logged out."
	}`
    

### AssignmentController + OutcomesController

- Get ‘/‘
    - Finds all of the assignments in the homework or outcomes table associated with the session’s user
- Post ‘/‘
    - Finds the user associated with the session
    - Creates a new assignment based on user input and adds to either the homework or outcomes table
- Get ‘/:id’
    - Finds an assignment based on its id
- Delete ‘/:id’
    - Finds an assignment based on its id
    - Deletes assignment from homework or outcomes table
- Put ‘/:id’
    - Finds an assignment based on its id
    - Edits assignment based on user input
    - Saves edited assignment to either the homework or outcomes table
- Put ‘/:id’
    - Finds an assignment based on its id
    - Edits assignment based on whether the user has checked the assignment as complete 
    - Saves edited assignment to either the homework or outcomes table