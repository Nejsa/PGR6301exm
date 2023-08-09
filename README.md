# Checklist of technologies I should include in my application


* [ ] Some form of Login and access control
* [ ] Jest tests
* [ ] Snapshot tests
* [ ] Simulate + jest.fn
* [ ] Supertest
* [Denne] GitHub Actions with coverage report
* [Denne] Mongodb
* [ ] Navigating in the application using React Router (remember Express Middleware)
* [ ] Reading data from the server (remember error handling)
* [ ] Writing data to the server
* [Denne] Deployment to cloud (in this case, Azure)
* [ ] Websockets

## A temporary plan for the project, will evolve as we move further

* [Done] ReadME.md file
* [Done] Client and Server setup
* [Done] Server Working and is displaying something.
* [Done] Setup GitHub actions (Currently not working due to no tests implemented yet)
* [Half Done] Setup Deployment to Azure (Same with Azure not working due to no tests implemented yet)
* [ ] Setup MongoDB
* [ ] A log In page
* [ ] A home page
* [ ] Two task related pages



# Grading Requirements

* **R1** Requirements **necessary**, but not **sufficient**, for an **E**
* Write a homepage with React
* Have at least 2 other React pages that can be accessed via React-Router
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