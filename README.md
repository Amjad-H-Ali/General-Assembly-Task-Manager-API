# Task_Manager_Project_3
Task Manager for GA Student Assignments

## Technologies Used
	
* Ruby, Sinatra, PostgreSQL, ActiveRecord, Sessions.

## REACT APP

See corresponding REACT app info at https://github.com/Amjad-H-Ali/Genaral-Assembly-Task-Manager-React

## Route Info


### UserController

* #### URL:

	 _/user/register_

* #### METHOD: 
	
	_`POST`_

* #### DETAILS:	

    - Takes in a new username and password.
    - Checks to make sure that username deosn't exist in the DB.
    - If it doesn't already exist, a new user will be created in the DB.
    - The Property "logged_in" in the Session object will set to true, and the user will be ‘logged in’.

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

	 _/user/login_

* #### METHOD: 
	
	_`POST`_	

* ### DETAILS:	 	

    - Takes in a username and password.
    - Checks if given username and password match in the DB.
    - If the information is correct, a Session will be created and the user will be ‘logged in’.

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

	 _/user/logout_

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

* #### URL:

	* _/assignment_

	* _/outcome_

* #### METHOD: 
	
	_`GET`_

* #### DETAILS:	

    - Queries the DB for all the assignments associated with logged in user.

* #### RESPONSE:

	###### SUCCESS

	`{	
		success: true, 
		message: "Found 3 assignment(s) for JohnDoe123.",
		user_assignments: [Object 1, Object 2, Object 3]
	}`

* #### URL:

	* _/assignment_
	* _/outcome_

* #### METHOD: 
	
	_`POST`_

* #### DETAILS:	

    - Creates a new assignment in DB with properties "name, link, notes, and complete (default set to false)".

* #### RESPONSE:

	###### SUCCESS

	`{
		success: true,
		added_assignment: Assignment_Object,
		message: "Added assignment for JohnDoe123."
	}`


* #### URL:

	* _/assignment/:id_

	* _/outcome/:id_

* #### METHOD: 
	
	_`GET`_

* #### DETAILS:	

    - Queries the DB for an assignment with the given Id.

* #### RESPONSE:

	###### SUCCESS

	`{ 
		success: true,
		assignment: Assignment_Object,
		message: "Found Assignment1"
	}`


* #### URL:

	* _/assignment/:id_
	
	* _/outcome/:id_

* #### METHOD: 
	
	_`DELETE`_

* #### DETAILS:	

    - Queries the DB for an assignment with the given Id.
    - Deletes assignment from DB.

* #### RESPONSE:

	###### SUCCESS

	`{
		success: true,
		message: "Delete Assignment1 successful."
	}`


* #### URL:

	* _/assignment/:id_
	
	* _/outcome/:id_

* #### METHOD: 
	
	_`PUT`_

* #### DETAILS:	

    - Queries the DB for an assignment with the given Id.
    - Edits assignment's "name, link, and notes " properties.
  
* #### RESPONSE:

	###### SUCCESS

	`{
		success: true,
		updated_assignment: Assignment_Object,
		message: "Updated assignment."
	}`


* #### URL:

	 _/assignment/:id/check_
	 _/outcome/:id/check_

* #### METHOD: 
	
	_`PUT`_

* #### DETAILS:	

    - Queries the DB for an assignment with the given Id.
    - Updates assignment's 'complete' property to either true or false in DB.

* #### RESPONSE:

	###### SUCCESS

	`{
		success: true,
		assignment_complete: true/false,
		message:"Assignment status updated."
	}`

