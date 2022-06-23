// hide and show mobile menu
const menuContent = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.menu-icon');

hamburger.addEventListener('click', () => {
  document.querySelector('.bi-list').classList.toggle('bi-x');
  menuContent.classList.toggle('menu-show');
});
/* Array of objects which contains events
categories and events under that category.
*/
const eventsArr = [
  {
    category: 'Education',
    description: 'Events purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits ',
    events: [
      {
        date: 'Wed, 22 - Thu, 23 Jun 2022',
        topic: 'Boston Cybersecurity Conference',
        location: 'Boston, USA',
        info: 'Boston Cybersecurity feature industry experts, government agencies and innovative solution providers.',
        tags: 'Conference || IT & Technology',
        hostName: 'Micheal Vini',
        hostImageUrl: './images/educational-events/Micheal-Vini.jpg',
        starCount: 17.1,
      },
      {
        date: 'Sat, 25 - Sun, 26 Jun 2022',
        topic: 'Canadian International Conference on Advances in Education',
        location: 'Toronto, Canada',
        info: 'Technology & Teaching - Challenges & Issues Conference',
        tags: 'Education & Training || IT & Technology',
        hostName: 'Fredrick Akonjiah',
        hostImageUrl: './images/educational-events/Fredrick-Akonjiah.jpg',
        starCount: 33.5,
      },
      {
        date: 'Mon, 04 - Wed, 06 Jul 2022',
        topic: 'Texworld Evolution Paris',
        location: 'Paris, France',
        info: 'Join us for a new kind of sourcing',
        tags: 'Tradeshow || Apparel & Clothing || Fashion & Beauty',
        hostName: 'Nicolas Sarkozy',
        hostImageUrl: './images/educational-events/Nicolas_Sarkozy.jpg',
        starCount: 72.8,
      },
      {
        date: 'Mon, 20 - Fri, 24 Jun 2022',
        topic: 'Africa Human Resources Leaders Conference in New York (AHRLC NEWYORK)',
        location: 'New York, USA',
        info: 'Conference Moving towards Strategic HR Planning Role',
        tags: 'Education & Training || Banking',
        hostName: 'Randi Weingarten',
        hostImageUrl: './images/educational-events/Randi-Weingarten.jpg',
        starCount: 92,
      },
      {
        date: 'Sat, 25 - Sun, 26 Jun 2022',
        topic: 'Exhibition Excellence Awards (EEA2022)',
        location: 'Greater Noida, India',
        info: 'Honouring The Champions of Exhibition Industry',
        tags: 'Business Services || MICE',
        hostName: 'Aabavaanan',
        hostImageUrl: './images/educational-events/Aabavaanan.jpg',
        starCount: 16.9,
      },
      {
        date: 'Mon, 20 - Wed, 22 Jun 2022',
        topic: 'Developing Executive Leadership',
        location: 'San Francisco , USA',
        info: 'The Developing Executive Leadership is an intensive three-day executive leadership training program.',
        tags: 'Education & Training || Paid entry',
        hostName: 'Conrad Wolfram',
        hostImageUrl: './images/educational-events/Conrad-Wolfram.jpg',
        starCount: 119.7,
      },
    ],
    privateClasses: {
      categoryIcon: 'bi bi-layers',
      category: 'education',
    },
  },
  {
    category: 'Entertainment',
    description: 'These events are form of activities that holds the attention and interest of an audience or gives pleasure and delight.',
    events: [
      {
        date: 'Sat, 09 Jul 2022',
        topic: 'The Irish Game Fair & Fine Food Festival',
        location: 'Antrim, canada',
        info: 'The Irish Game Fair & Fine Food Festival objectives included promoting the importance of country sports.',
        tags: 'Entertainment & Media',
        hostName: 'Deborah Meaden',
        hostImageUrl: './images/entertainments-events/Deborah-Meaden.jpg',
        starCount: 55,
      },
      {
        date: 'Sat, 02 Jul 2022',
        topic: 'Long Beach Vegan Food and Music Festival',
        location: 'Long Beach, California',
        info: 'Long Beach Vegan Food and Music Festival',
        tags: 'Tradeshow || Food & Beverages || Entertainment & Media',
        hostName: 'Frank Amusiah',
        hostImageUrl: './images/entertainments-events/Frank-Amusiah.jpg',
        starCount: 89.4,
      },
      {
        date: 'Fri, 24 - Sat, 25 Jun 2022',
        topic: 'Gearfest',
        location: 'Fort Wayne , india',
        info: "This year's GearFest welcomed well over 15,000 gear fanatics to Sweetwater's hometown of Fort Wayne, Indiana, from across the US",
        tags: 'Music & Sound || Entertainment & Media',
        hostName: 'Kody Gerard',
        hostImageUrl: './images/entertainments-events/Kody-Gerard.jpeg',
        starCount: 18.5,
      },
      {
        date: 'Thu, 13 - Sun, 16 Oct 2022',
        topic: 'Dancing Resilience: Dance Studies and Activism in a Global Age',
        location: 'Vancouver, Canada',
        info: 'Dance Studies and Activism in a Global Age is an annual conference that convenes presenters to explore dance',
        tags: 'Training || Music & Sound || Entertainment & Media',
        hostName: 'Jackie Shane',
        hostImageUrl: './images/entertainments-events/Jackie-Shane.jpg',
        starCount: 24,
      },
    ],
    privateClasses: {
      categoryIcon: 'bi bi-music-note-beamed',
      category: 'entertainment',

    },
  },
  {
    category: 'Sports',
    description: 'Events involving physical exertion and skill in which an individual or team competes against another or others for entertainment ',
    events: [
      {
        date: 'Mon, 08 - Tue, 09 Aug 2022',
        topic: 'Gearfest',
        location: 'Accra , Ghana',
        info: "Sports Betting West Africa will be welcoming Africa and the world's most respected stakeholders.",
        tags: 'Sports & Sporting || Entertainment & Media',
        hostName: 'Asum Victor',
        hostImageUrl: './images/sports-events/Asum-Victor.jpg',
        starCount: 8.4,
      },
      {
        date: 'Sat, 23 - Mon, 25 Jul 2022',
        topic: 'International Trade Fair For Equestrian Sports',
        location: 'Cologne, Germany',
        info: 'International Trade Fair For Equestrian Sports, Regardless of whether leisure time or competition sport.',
        tags: 'Sports || Entertainment & Media || Paid entry',
        hostName: 'Johnson Mensah',
        hostImageUrl: './images/sports-events/Johnson-Mensah.jpg',
        starCount: 139.4,
      },
      {
        date: 'Sat, 02 - Sun, 03 Jul 2022',
        topic: 'Asics Sport & Leisure Expo',
        location: 'Gold Coast',
        info: 'Latest and greatest products and services from the sporting, leisure and health world.',
        tags: 'Sports || Wellness || Health & Fitness',
        hostName: 'Amando Musan',
        hostImageUrl: './images/sports-events/Amando-Musan.jpg',
        starCount: 56.9,
      },
      {
        date: 'Fri, 24 - Sat, 25 Jun 2022',
        topic: 'Sports & Football Match',
        location: 'Liverpool , ind',
        info: 'Real Madrid vs Liverpool friendly match',
        tags: 'Sports & Sporting || Football || Entertainment & Media',
        hostName: 'Charlotte Radcliffe',
        hostImageUrl: './images/sports-events/Charlotte-Radcliffe.jpg',
        starCount: 44.3,
      },
    ],
    privateClasses: {
      categoryIcon: 'bi bi-dribbble',
      category: 'sports',
    },
  },
  {
    category: 'News',
    description: 'Information about recent events or happenings, especially as reported by means of newspapers, websites, radio, television, and other forms of media.',
    events: [

      {
        date: '1 hour ago',
        topic: "President Putin's inclusion in a summit of top emerging economies is a signal that Russia is not alone on the world stage",
        location: 'Russia',
        info: '',
        tags: '',
        hostName: 'Marshall Cohen',
        hostImageUrl: './images/news/president-inclusion.jpg',
        starCount: 1327,
      },
      {
        date: '1 day ago',
        topic: 'China sends dozens of warplanes into skies near Taiwan',
        location: 'China',
        info: "Expert: China's military aggression on Taiwan will be 'incredible calamity' ",
        tags: '',
        hostName: 'Brad Lendon',
        hostImageUrl: './images/news/dozens-of-warplanes.jpg',
        starCount: 1034,
      },
      {
        date: '40 munites ago',
        topic: `
                Russian troops have advanced into villages south of 
                Lysychansk -- the last Ukrainian holdout in the 
                key region of Luhansk -- and Moscow's sheer 
                firepower is grinding down defenses
                `,
        location: 'Russia',
        info: '',
        tags: '',
        hostName: 'Helen Regan',
        hostImageUrl: './images/news/russian-troops.jpg',
        starCount: 1761,
      },
      {
        date: '19 hours ago',
        topic: 'Japan tracks eight Russian and Chinese warships near its territory',
        location: 'Japan',
        info: 'At least eight Russian and Chinese warships have been spotted in the seas near Japan this week',
        tags: '',
        hostName: 'Brad Lendon',
        hostImageUrl: './images/news/japan-tracks.jpg',
        starCount: 461,
      },
      {
        date: '2 days ago',
        topic: 'Republican officials take the lead testifying against Trump',
        location: 'USA',
        info: 'Frustrated with hearings, Trump turns ire toward his allies',
        tags: '',
        hostName: 'Ruben Anan',
        hostImageUrl: './images/news/republican-officials.jpg',
        starCount: 617,
      },
      {
        date: '2 weeks ago',
        topic: 'Families of Americans detained abroad call for urgent action from Biden to free their loved ones',
        location: 'America',
        info: "<b>Analysis:</b> Pence ignores Trump's remarkable record of falsehoods",
        tags: '',
        hostName: 'Jennifer Hansler,',
        hostImageUrl: './images/news/families-of-americians.jpg',
        starCount: 542,
      },

    ],
    privateClasses: {
      categoryIcon: 'bi bi-newspaper',
      category: 'news',
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // Automatically choose an active category
  function getRandomIndexOfArray(min, max) {
    const step1 = max - min + 1;
    const step2 = Math.random() * step1;
    const result = Math.floor(step2) + min;
    return result;
  }
  const activeCategory = eventsArr[getRandomIndexOfArray(0, eventsArr.length - 1)];
  activeCategory.privateClasses.active = 'active-category';
  // loop through events Array when page loads and display each category

  eventsArr.forEach((events) => {
    const categoriesCtn = document.querySelector('.event-categories');
    const categoryCtn = document.createElement('div');
    const categoryClass = events.privateClasses.category;
    const categoryContent = `
                        <p class="category-icon ${categoryClass}">
                            <i class='${events.privateClasses.categoryIcon} ${categoryClass}'></i>
                        </p>
                        <p class="category-name ${categoryClass}">${events.category}</p>
                        <p class="category-description">
                            <a class="${categoryClass}" href="#events-category-section">${events.description}</a>
                        </p>
                    `;

    categoryCtn.setAttribute('class', 'category');
    categoryCtn.classList.add(categoryClass, events.privateClasses.active);
    categoryCtn.setAttribute('title', `Click to show ${events.category} events`);
    categoryCtn.innerHTML = categoryContent;

    categoriesCtn.appendChild(categoryCtn);

    // append events
    const eventsSection = document.querySelector('.events-category-section');
    const eventsContainer = document.createElement('div');
    const eachEvent = events.events.map((event) => `
                <div class="an-event-container">
                    <div>
                        <img
                            class="host-image"
                            src=${event.hostImageUrl}
                            alt="Nicolas Sarkozy"
                        />
                    </div>
                    <div>
                        <div class="event-date">
                            ${event.date}
                        </div>
                        <h5 class="event-topic">${event.topic}</h5>
                        <div class="event-location">
                            ${event.location} ~ Get <i style="color:#ec5242;" class="bi bi-star-fill"></i> interested & see live
                        </div>
                        <p class="event-info">${event.info}</p>
                        <p class="event-tags">
                            ${event.tags}
                        </p>
                        <div class="host-interested-container">
                            <div>Host : <u><i>${event.hostName}</i></u></div>
                            <div>
                                <button id='star${event.starCount}' class="interested-btn"><i class="bi bi-star"></i><span>${event.starCount}k</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                `);
    const eventContent = `
                            <h4>Trending ${events.category} Events</h4>
                            <div class="category-events-container">
                                ${eachEvent.join('')}
                            </div>
                        `;
    eventsContainer.setAttribute('class', 'events-parent-container');
    eventsContainer.setAttribute('id', categoryClass);
    eventsContainer.innerHTML = eventContent;
    eventsSection.appendChild(eventsContainer);

    // check an active category and display block
    if (categoryCtn.classList.contains('active-category')) {
      document.getElementById(categoryClass).classList.add('active');
    }
  });
});
// disable any active category and get chance to enable the current category
function disableActiveCategory() {
  eventsArr.forEach((events) => {
    const eventsContainer = document.getElementById(events.privateClasses.category);
    const categoryContainer = document.querySelector(`.${events.privateClasses.category}`);
    if (eventsContainer.classList.contains('active')) {
      eventsContainer.classList.remove('active');
      categoryContainer.classList.remove('active-category');
    }
  });
}
// make the current category active when clicked
document.querySelector('.event-categories').addEventListener('click', (e) => {
  eventsArr.forEach((events) => {
    const eventsContainer = document.getElementById(events.privateClasses.category);
    const categoryContainer = document.querySelector(`.${events.privateClasses.category}`);
    if (e.target.classList.contains(events.privateClasses.category)) {
      disableActiveCategory();
      eventsContainer.classList.add('active', 'active-category');
      categoryContainer.classList.add('active-category');
    }
  });
});
// show and hide login and sign up modal
const signInModal = document.getElementById('sign-in-form-modal');
const signUpModal = document.getElementById('sign-up-form-modal');
// show sign in modal
document.getElementById('sign-in-btn1').addEventListener('click', () => {
  signInModal.style.display = 'block';
});
document.getElementById('sign-in-btn2').addEventListener('click', () => {
  signInModal.style.display = 'block';
});
document.getElementById('sign-in-btn3').addEventListener('click', () => {
  signUpModal.style.display = 'none';
  signInModal.style.display = 'block';
});
// show register modal
document.getElementById('sign-up-btn').addEventListener('click', () => {
  signInModal.style.display = 'none';
  signUpModal.style.display = 'block';
});
// close sign in modal
document.getElementById('modal-close-btn1').addEventListener('click', () => {
  signInModal.style.display = 'none';
});
document.getElementById('cancel-btn1').addEventListener('click', () => {
  signInModal.style.display = 'none';
});
// close register modal
document.getElementById('modal-close-btn2').addEventListener('click', () => {
  signUpModal.style.display = 'none';
});
document.getElementById('cancel-btn2').addEventListener('click', () => {
  signUpModal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === signInModal || event.target === signUpModal) {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  }
};

/*
  Resgister user and login user by storing user data in the local storage of the browser
*/
const registerForm = document.getElementById("sign-up-form");

// add to storage function
function addToStorage(key ,data){
    localStorage.setItem(key, JSON.stringify(data))
}
// remove to storage function
function getFromStorage(key){
    // check if local storage has the value
    const rawData = localStorage.getItem(key);
    if (rawData !== null) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return [];
    }
}
// Register user
registerForm.addEventListener('submit', (event) => { // changed from click to submit - find details on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    const username = document.getElementById('username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const user = {
        username: username,
        email: email,
        password: password
    }
    // addToStorage("User" ,data)
    let errors = [];
    let users = getFromStorage('Users');
    if (users.length === 0) {
        users.push(user);
        addToStorage('Users', users)
        return;
    }
    // check if user already exist or not
    users.forEach(user => {
        if (user.username === username) {
            errors.push("Username areadly exist");
            event.preventDefault();
            return;
        } else if (user.email === email) {
            errors.push("Email address areadly exist");
            event.preventDefault();
        }
    });
    // add user if there is no error
    if (errors.length === 0) {
        users.push(user);
        addToStorage('Users', users);
    }else{
        event.preventDefault();
        alert(errors[0]);
    }
});

