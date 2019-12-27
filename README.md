# FIFO Pet Adaption Agency

## Pair: Jonny Deates and Heesu Kang

Live Page: [FIFO Pet Adaption Agency](https://fifo-pet-adoption-agency.now.sh/)

Heroku: [heroku](https://petful-api-heesu-jonny.herokuapp.com)

Server Repo: [server](https://github.com/thinkful-ei-heron/Jonny-Heesu-DSA-Petful-Server)

-----------------------

### About

The FIFO Pet Adaption Agency is an animals shelter which allows adoption of dogs and cats. There are many dogs and cats waiting for new sweet family to live together. People can adopt a dog and a cat, but they need to visit our shelter first. Also, people who want to adopt need to wait until their turn.

### /api/users

Gets all of the current users in line waiting to view the adoption list.

### /api/users/line

Moves the line to the next person who is waiting
Also returns the person who just left the line and an updated array of the users.

### /api/users/:id

Gets a users by their specific Id

### /api/cats

Gets all cats on the adoption site
return it as a JSON array

### /api/cats/:id

Gets a single cat on the adoption site
returns it as an JSON Object

### /api/dogs

Gets all cats on the adoption site
return it as a JSON array

### /api/dogs/:id

Gets a single cat on the adoption site
returns it as an JSON Object

-----------------------

### Technical

Client: React.js, JavaScript, HTML, CSS, Zeit

Server: Express.js, Node.js, Heroku
