
function getData() {


    const inputValue = document.querySelector("#text").value;

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const username = document.querySelector("#username");
      const name = document.querySelector("#name");
      const repo = document.querySelector("#repo");
      const blog = document.querySelector("#blog");
      const bio = document.querySelector("#bio");
      const followers = document.querySelector("#followers");
      const following = document.querySelector("#following");
      const location = document.querySelector("#location");
      const twitter = document.querySelector("#twitter");
      const image = document.querySelector('#image');
      image.src = data.avatar_url
      twitter.innerHTML = data.twitter_username;
      name.innerHTML = data.name;
      username.innerHTML = data.login;
      location.innerHTML = data.logation;
      repo.innerHTML = data.public_repos;
      blog.innerHTML = data.blog;
      bio.innerHTML = data.bio;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
      location.innerHTML = data.location;
    });
}
function displayData() {
  getData();
}
