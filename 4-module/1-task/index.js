function makeFriendsList(friends) {
  let ul = document.createElement("UL");
  for (let item of friends) {
    ul.insertAdjacentHTML('beforeend', `<li>${item.firstName} ${item.lastName}</li>`);
  }
  return ul;
}
