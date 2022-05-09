# Recovery Ventures

This repository holds a React app and an Express app used for the Recovery Ventures website 

## How to Run Recovery Ventures
### On the MHC network
From Mount Holyoke's network, you should be able to access the Recovery Ventures website by simply clicking [this link](http://cs-vm-05.cs.mtholyoke.edu:31600/)

Note: In order to use the account setup feature on the MHC hosted version of the website, you need to use the pin "123" for a mentor account.
### Alternative Access
If you are not on the Mount Holyoke network, you will need to clone this repository, and run the code locally on your machine. To do this, follow the steps outlined below:
1. Clone the main branch of this repo to your machine. ([How to Clone a Github Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. From inside the directory you just cloned (cs-316-project-primespiders), navigate to the Backend folder: `cd Backend`
3. Inside of Backend, run `npm install`.
4. If MariaDB is already installed and the database is set up, then skip these steps. Otherwise, do the following:
    *  Install MariaDB ([tutorial](https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/))
    *  Login to MariaDB with “mariadb -u root -p” and then enter your password. 
    *  Create a new database “CREATE DATABASE dbName;”
    *  In the Backend folder, create a .env file with the following environment variables:
    `MYSQL_HOST=localhost`,
    `MYSQL_USER=yourUserName`,
    `MYSQL_PASSWORD=yourPassword`,
    `MYSQL_DB=dbName`
5. Once all dependencies have finished installing inside the Backend folder, run 'npm start'
6. You should now be able to access the site from http://localhost:9000/. Note that once the site is running, you will need to have pins in the database to allow for the account creation feature. In order to add pins to the database, send an HTTP PUSH request to “http://localhost:9000/pins” with a JSON body containing, for example: `{ "account": "mentor",  "num": "some number" }`


## Directory Structure
#### Frontend
stuff 
#### Backend 
stuff

## Functionality
The Recovery Ventures website has a number of implemented use cases. 
#### Use Cases

- Navigation between both static and dynamic pages
  - The user should be able to use the navagation bar to click around to different pages on the website. The following pages have been created and can currently be navigated to by the user
    - Landing Page (static page)
    - Our Model (static page)
    - Volunteer (static page)
    - Connect With Mentors (dynamic page)
    - Login (dynamic page)
    - Setup Account (dynamic page)
- Account Creation and Login
  - The user can create an account from the front end, and their account data will be stored in the database. The account creation process for users who enter the mentor pin ("123") will include a mentor profile creation page where users can enter their bio for clients to view. 
  - Once an account has been created, the user can log in. The login page will check the database to confirm login credentials.
  - Both of these pages have error checking and will alert the inform the user via the help box on the right side of the screen if there is a problem. 
- Mentor Profiles Display and Searching
  - The user can search mentor bios from the database based on the criteria of "expertise". 
  - Bios are displayed on the screen as a grid that users can scroll through. Each bio box has a profile picture, a set of info tags about the mentor, and a written bio description of the mentor. If the user is logged in, they will be able to see the mentor's contact info amongst the other info tags. 


## Diviations from original plan 
stuff
## Known Problems
stuff


