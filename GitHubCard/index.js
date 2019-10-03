/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
axios
	.get('https://api.github.com/users/jasminekh96')
	.then((response) => {
		/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards*/
		// const myInfo = response.response;
		console.log(response.data);
		const cardInfo = followers(response.data);
		cards.appendChild(cardInfo);
	})
	.catch((error) => {
		console.log('The data was not returned', error);
	});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 'JustinTrombley96', 'normabunton', 'MelodyRackham', 'HarrisonMS', 'nattroj' ];
function followers(people) {
	const followersCard = document.createElement('div'),
		followersCardInfo = document.createElement('div'),
		followersImage = document.createElement('img'),
		followersName = document.createElement('h3'),
		followersUser = document.createElement('username'),
		followersLocation = document.createElement('p'),
		followersProfile = document.createElement('p'),
		followersFollowers = document.createElement('p'),
		followersFollowing = document.createElement('p'),
		followersBio = document.createElement('p');
	//
	followersImage.src = people.avatar_url;
	followersName.textContent = people.name;
	followersUser.textContent = people.login;
	followersLocation.textContent = `Location: ${people.location}`;
	followersProfile.textContent = people.html_url;
	followersFollowers.textContent = `Followers: ${people.followers}`;
	followersFollowing.textContent = `Following: ${people.following}`;
	followersBio.textContent = `Bio: ${people.bio}`;
	//
	followersCard.classList.add('card');
	followersCardInfo.classList.add('card-info');
	followersName.classList.add('name');
	followersUser.classList.add('username');
	//
	followersCard.appendChild(followersImage);
	followersCard.appendChild(followersCardInfo);
	followersCardInfo.appendChild(followersName);
	followersCardInfo.appendChild(followersUser);
	followersCardInfo.appendChild(followersLocation);
	followersCardInfo.appendChild(followersProfile);
	followersCardInfo.appendChild(followersFollowers);
	followersCardInfo.appendChild(followersFollowing);
	followersCardInfo.appendChild(followersBio);
	//
	return followersCard;
}
followersArray.forEach(function(user) {
	axios.get(`https://api.github.com/users/${user}`).then((response) => {
		const peoples = followers(response.data);
		cards.appendChild(peoples);
		console.log(response);
		console.log(user);
	});
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
