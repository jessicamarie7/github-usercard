/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";




axios.get("https://api.github.com/users/jessicamarie7")
.then(res => {
  const gitHubInfo = document.querySelector('.cards')
  gitHubInfo.appendChild(newCard(res.data))
   console.log(newCard(res.data))
})
.catch(err => {
    debugger;

  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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

const followersArray = [];

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

function newCard ({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const container = document.createElement('div')
  const cardPic = document.createElement('img')
  const cardContent = document.createElement('div')
  const cardName = document.createElement("h3")
  const gitName = document.createElement('p')
  const gitLocation = document.createElement('p')
  const gitProfile = document.createElement('p')
  const gitAddress = document.createElement('a')
  const gitFollowers = document.createElement('p')
  const gitFollowing = document.createElement('p')
  const gitBio = document.createElement('p')



  container.appendChild(cardPic)
  container.appendChild(cardContent)
  cardContent.appendChild(cardName)
  cardContent.appendChild(gitName)
  cardContent.appendChild(gitLocation)
  cardContent.appendChild(gitProfile)
  cardContent.appendChild(gitAddress)
  cardContent.appendChild(gitFollowers)
  cardContent.appendChild(gitFollowing)
  cardContent.appendChild(gitBio)

  container.classList.add('card')
  cardContent.classList.add('card-info')
  cardName.classList.add('name')
  gitName.classList.add('username')

  cardPic.setAttribute('src', avatar_url)
  cardName.textContent = name
  gitName.textContent = login
  gitLocation.textContent = `Location: ${location}`
  gitProfile.textContent = `Profile: `
  gitAddress.setAttribute('href', html_url)
  gitAddress.textContent = html_url
  gitFollowers.textContent = `Followers: ${followers}`
  gitFollowing.textContent = `Following: ${following}`
  gitBio.textContent = `Bio: ${bio}`
  
  console.log(gitAddress)
  return container
}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
