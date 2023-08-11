## Endpoints

# GET /api/activities: Gets a list over available activities

# POST /api/activities: Creates a new activity

# PUT /api/activities/:id: Updates hours on activities

# GET /logHours: Allows user to log hours

# GET /ShowActivities: Shows available activities

# GET '/' FrontPage for activities

## Application manual

- npm run dev: runs code.
- npm install: installs necessary packages.
- npm run test: runs available tests in the code
- nom run verify: runs tests with coverage

## Checklist of technologies I should include in my application

* [ ] Some form of Login and access control
* [Half Done] Jest tests
* [Done] Snapshot tests
* [ ] Simulate + jest.fn
* [ ] Supertest
* [] GitHub Actions with coverage report
* [Done] Mongodb
* [Done] Navigating in the application using React Router (remember Express Middleware)
* [Done] Reading data from the server (remember error handling)
* [Done] Writing data to the server
* [Half Done] Deployment to cloud (in this case, Azure)
* [ ] Websockets

## A temporary plan for the project, will evolve as we move further

* [Done] ReadME.md file
* [Done] Client and Server setup
* [Done] Server Working and is displaying something.
* [Done] Setup GitHub actions (Works)
* [Half Done] Setup Deployment to Azure (Same with Azure not working due to no tests implemented yet)
* [Done] Setup MongoDB
* [ ] A log In page
* [Done] A home page
* [Done] Two task related pages
* [ ] Fix the Deployment time for Azure Build (Averages currently 50min build time)



# Grading Requirements

* **R1** Requirements **necessary**, but not **sufficient**, for an **E**
* [x] Write a homepage with React
* [x] Have at least 2 other React pages that can be accessed via React-Router
* [x] At least one page should have some "state", with a change that should be triggered from
  the interface.
* [x] From each page, be able to navigate back (either to previous page or to homepage)
  without using the browser "Back" button.

* **R2** Requirements **necessary**, but not **sufficient**, for a **D**
* [x]Create a RESTful API that handles at least one GET, one POST, one PUT, and one
  DELETE calls and uses JSON for data transfer.
* [x]The frontend must use that RESTful API (for example, using fetch).
* [x]All endpoints must be listed in README.md
* The solution should use continuous integration (in this case GitHub actions). Your code
  should be uploaded onto a GitHub repository, and on every push to the master branch, the CI
  script should run the tests associated with your project.

// For some reason my CI script didn't run automatically even though i set it up do it. You had to manually start the CI workflow and it would always pass as long as the test passed.


# Task Requirements

* **T1** Task requirements **necessary**, but not **sufficient**, for an **E**
* An employee should be able to see
- [x] the activities that are available to them,
- [x] how many hours they have already logged,
- [x] log hours on one or more of those activities, so long as they are still under the
  maximum amount of hours.
* [x] When the application starts in developer mode, you must have some basic test data,
      representing a valid example of use. If you cannot setup the REST API (requirement for grade
      D, see requirement R2), then hardcode such an example in the frontend

### Issues and Assumptions

# Issue 1: MongoDB
- One issue I had with this examination was receiving and displaying data from MongoDB. 
  I tried doing the T1 Tasks with Mongodb, without realising you could perform it by hardcoding data, and later develop a method regarding MongoDB. 
  I tried taking inspiration from "lecture-8", but this time it did not work with me for some reason. My commit logs will tell you my process and time with this issue.
  I would say that I managed the mongodb section poorly. 
  While I would have loved to implement the mongodb data, I can safely say my current method is functional and satisfied the task requirements which is the most important part.

- UPDATE: I managed to make MongoDB data work and coded all necessary code to make it work. I was relieved when I solved the issues I encountered. It also made it easier to develop the application further with a working database. 
          The dummy data was switched with the Data from the Mongo Database. It even made the T1 Requirements easier to fulfill.

# Issue 2: Azure Deployment Job
- This one is interesting, for as of at this moment, I haven't finished uploading the application. It is in works, and hopefully I will make it work. 
  The reason I say it is interesting is that the GitHub Deployment job passes everytime because of the tests and Microsoft Azure Service, but the problem I encountered was the Deployement time.
  It averaged around I would say fifty minutes. That is a long time, especially when is only took 10-20 minutes in the lectures. 
  The reason for this issue was because there was too many files being read, you already get a warning if you have over 10 000 files, and I had over 30 000. 
  I could not find how to reduce the file number, other than maybe adding unnecessary files to gitignore, which I did, but it didn't seem to fix the issue.

 - UPDATE: I was unable to finish the whole deployment job, the Azure actions still remains there, slow deploy time, but will eventually pass. I had an application error at the end. 

# Assumption 1
- One major mistake and maybe the most time-consuming was when I read the "Technologies you should include" as "Technologies you MUST include".
  This was a bad assumption as I hardly had time to do the other tasks because I was busy trying to implement 'Issue 1'. 
  Thankfully I got done with R1 and T1 before moving on to implement other technologies. 

## Tests
- I only had one test, while not very detailed it passes. 

## Conclusion

T1 and R1 Requirements done.
Some R2 Requirements also done. 
Included some technologies to my application. 









