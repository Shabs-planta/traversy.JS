// init github Class...
const github = new GitHub();

// init UI Class...
const ui = new UI;



// search input User "ID"...
const searchUser = document.querySelector('#searchUser');

// search Input EventListener...
searchUser.addEventListener('keyup', (e) => {
   // get inputText
   const userText = e.target.value;

   if(userText !== '') {
      // Make http call
      github.getUser(userText)
      .then(data => {
         if (data.profile.message === 'Not Found') {
            // show alert
            ui.showAlert('User not found', 'alert alert-danger');
         } else {
            // show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
         }
      })
   } else {
      // clear Profile
      ui.clearProfile()

   }
})