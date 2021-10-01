import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/jessicamarie7`)
  .then(res => {
    const cardObj = githubMaker(res.data)
    entryPoint.appendChild(cardObj)
  })
  .catch(err => {
    console.log(err)
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  axios.get(`https://api.github.com/users/jessicamarie7/followers`)
  .then(res => {
    for (let i = 0; i < res.data.length; i++){
      const friendObj = githubMaker(res.data[i])
    }})
    
    

  .catch(err => {
    console.log(err)
  })
  
];

console.log(followersArray)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('.cards')

function githubMaker({ avatar_url, name, login, location, url, followers, following, bio }) {
  const gitDiv = document.createElement('div')
  const gitImg = document.createElement('img')
  const gitCard = document.createElement('div')
  const gitName = document.createElement('h3')
  const gitUser = document.createElement('p')
  const gitLocation = document.createElement('p')
  const gitProfile = document.createElement('p')
  const gitFollowers = document.createElement('p')
  const gitFollowing = document.createElement('p')
  const gitBio = document.createElement('p')
  
  
  gitDiv.classList.add('card')
  gitCard.classList.add('card-info')
  gitName.classList.add('name')
  gitUser.classList.add('username')
  
  
  gitImg.src = avatar_url
  gitName.textContent = `${name}`
  gitUser.textContent = `${login}`
  gitLocation.textContent = `Location: ${location}`
  gitProfile.textContent = `Profile: ${url}`
  gitFollowers.textContent = `Followers: ${followers}`
  gitFollowing.textContent = `Following: ${following}`
  gitBio.textContent = `Bio: ${bio}`
  

  gitDiv.appendChild(gitImg)
  gitDiv.appendChild(gitCard)
  gitCard.appendChild(gitName)
  gitCard.appendChild(gitUser)
  gitCard.appendChild(gitLocation)
  gitCard.appendChild(gitProfile)
  gitCard.appendChild(gitFollowers)
  gitCard.appendChild(gitFollowing)


  return gitDiv
}

function myFollowers({ followersArray }) {
  theFollowers = document.createElement('div')
  theFollowers.classList.add('the-followers')
  theFollowers.textContent = `The Followers: ${followersArray}`
  theFollowers.appendChild(entryPoint)

  return theFollowers
} 

console.log(myFollowers)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
