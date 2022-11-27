// const data = [
//    {
//       name: 'Shabs Planta',
//       age: 26,
//       gender: 'Male',
//       lookingfor: 'Female',
//       location: 'Lagos Ikeja',
//       image: 'https://randomuser.me/api/portraits/men/82.jpg'
//    },

//    {
//       name: 'James Nana',
//       age: 32,
//       gender: 'Male',
//       lookingfor: 'Female',
//       location: 'Ibadun Ifako',
//       image: 'https://randomuser.me/api/portraits/men/62.jpg'
//    },

//    {
//       name: 'Tolu Lope',
//       age: 26,
//       gender: 'Female',
//       lookingfor: 'Male',
//       location: 'Lagos Island',
//       image: 'https://randomuser.me/api/portraits/women/12.jpg'
//    }
// ]

// // init iterator and pass in the Data.
// const profile = setIterator(data);

// // set Profile display default...
// nextProfile();

// // Add data to the DOM
// document.getElementById('next').addEventListener('click', nextProfile);

// function nextProfile() {
//    // init profile
//    const currentData = profile.next().value;

//    if(currentData !== undefined) {
//       // create profileDisplay
//    document.getElementById('imageDisplay').innerHTML = `
//    <img src="${currentData.image}">
//    `;
//    document.getElementById('profileDisplay').innerHTML = `
//      <ul class="list-group">
//          <li class="list-group-item">Name: ${currentData.name}</li>
//          <li class="list-group-item">Age: ${currentData.age}</li>
//          <li class="list-group-item">Gender: ${currentData.gender}</li>
//          <li class="list-group-item">Looking For: ${currentData.lookingfor}</li>
//          <li class="list-group-item">Location: ${currentData.location}</li>
//      </ul>
//    `;
//    } else {
//       window.location.reload();
//    }
// }



// // create an iterator function
// function setIterator(profiles) {
//    let nextIndex = 0;

//    return {
//       next: function() {
//          return nextIndex < profiles.length ?
//          { value: profiles[nextIndex++], data: false} :
//          { data: true};
//       }
//    }
// }





// **** generator example profile

function* profileData() {
   yield {
      name: 'Shabs Planta',
      age: 26,
      gender: 'Male',
      lookingfor: 'Female',
      location: 'Lagos Ikeja',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
   };
   yield {
      name: 'James Planta',
      age: 36,
      gender: 'Male',
      lookingfor: 'Female',
      location: 'Lagos Ifako Ijaye',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
   }
   yield {
      name: 'Tolu Lope',
      age: 27,
      gender: 'Female',
      lookingfor: 'Male',
      location: 'Lagos Songo',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
   }
}

// init iterator and pass in the Data.
const profile = profileData();

// set Profile display default...
nextProfile();

// Add data to the DOM
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
   // init profile
   const currentData = profile.next().value;

   if(currentData !== undefined) {
      // create profileDisplay
   document.getElementById('imageDisplay').innerHTML = `
   <img src="${currentData.image}">
   `;
   document.getElementById('profileDisplay').innerHTML = `
     <ul class="list-group">
         <li class="list-group-item">Name: ${currentData.name}</li>
         <li class="list-group-item">Age: ${currentData.age}</li>
         <li class="list-group-item">Gender: ${currentData.gender}</li>
         <li class="list-group-item">Looking For: ${currentData.lookingfor}</li>
         <li class="list-group-item">Location: ${currentData.location}</li>
     </ul>
   `;
   } else {
      window.location.reload();
   }
}