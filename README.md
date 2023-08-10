# Checklist of technologies I should include in my application


* [ ] Some form of Login and access control
* [Basic] Jest tests
* [ ] Snapshot tests
* [ ] Simulate + jest.fn
* [ ] Supertest
* [Denne] GitHub Actions with coverage report
* [] Mongodb
* [Done] Navigating in the application using React Router (remember Express Middleware)
* [ ] Reading data from the server (remember error handling)
* [ ] Writing data to the server
* [Half Done] Deployment to cloud (in this case, Azure)
* [ ] Websockets

## A temporary plan for the project, will evolve as we move further

* [Done] ReadME.md file
* [Done] Client and Server setup
* [Done] Server Working and is displaying something.
* [Done] Setup GitHub actions (Works)
* [Half Done] Setup Deployment to Azure (Same with Azure not working due to no tests implemented yet)
* [ ] Setup MongoDB
* [ ] A log In page
* [ ] A home page
* [Done] Two task related pages
* [ ] Fix the Deployment time for Azure Build (Averages currently 50min build time)



# Grading Requirements

* **R1** Requirements **necessary**, but not **sufficient**, for an **E**
* [x]Write a homepage with React
* [x]Have at least 2 other React pages that can be accessed via React-Router
* At least one page should have some "state", with a change that should be triggered from
  the interface.
* From each page, be able to navigate back (either to previous page or to homepage)
  without using the browser "Back" button.

# Task Requirements

* **T1** Task requirements **necessary**, but not **sufficient**, for an **E**
* An employee should be able to see
- the activities that are available to them,
- how many hours they have already logged,
- log hours on one or more of those activities, so long as they are still under the
  maximum amount of hours.

### Issues, Assumptions and Self Evaluation

# Issue 1: MongoDB
- One issue I had with this examination was receiving and displaying data from MongoDB. 
  I tried doing the T1 Tasks with Mongodb, without realising you could perform it by hardcoding data, and later develop a method regarding MongoDB. 
  I tried taking inspiration from "lecture-8", but this time it did not work with me for some reason. My commit logs will tell you my process and time with this issue.
  I would say that I managed the mongodb section poorly. 
  While I would have loved to implement the mongodb data, I can safely say my current method is functional and satisfied the task requirements which is the most important part.

# Issue 2: Azure Deployment Job
- This one is interesting, for as of at this moment, I haven't finished uploading the application. It is in works, and hopefully I will make it work. 
  The reason I say it is interesting is that the GitHub Deployment job passes everytime because of the tests and Microsoft Azure Service, but the problem I encountered was the Deployement time.
  It averaged around I would say fifty minutes. That is a long time, especially when is only took 10-20 minutes in the lectures. 
  The reason for this issue was because there was too many files being read, you already get a warning if you have over 10 000 files, and I had over 30 000. 
  I could not find how to reduce the file number, other than maybe adding unnecessary files to gitignore, which I did, but it didn't seem to fix the issue.

# Assumption 1
- One major mistake and maybe the most time-consuming was where I read the "Technologies you should include" as "Technologies you MUST include".
  This was a bad assumption as I hardly had time to do the other tasks because I was busy trying to implement 'Issue 1'. 
  Thankfully I got done with R1 and T1 before moving on to implement other technologies. 

#






