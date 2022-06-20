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

    ],
    privateClasses: {
      categoryIcon: 'bi bi-layers',
    },
  },
  {
    category: 'Entertainment',
    description: 'These events are form of activities that holds the attention and interest of an audience or gives pleasure and delight.',
    events: [

    ],
    privateClasses: {
      categoryIcon: 'bi bi-music-note-beamed',
    },
  },
  {
    category: 'Sports',
    description: 'Events involving physical exertion and skill in which an individual or team competes against another or others for entertainment ',
    events: [

    ],
    privateClasses: {
      categoryIcon: 'bi bi-dribbble',
    },
  },
  {
    category: 'News',
    description: 'Information about recent events or happenings, especially as reported by means of newspapers, websites, radio, television, and other forms of media.',
    events: [

    ],
    privateClasses: {
      categoryIcon: 'bi bi-newspaper',
    },
  },
];
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
document.addEventListener('DOMContentLoaded', () => {
  eventsArr.forEach((events) => {
    const categoriesCtn = document.querySelector('.event-categories');
    const categoryCtn = document.createElement('div');
    const categoryContent = `
                        <p class="category-icon"><i class='${events.privateClasses.categoryIcon}'></i></p>
                        <p class="category-name">${events.category}</p>
                        <p class="category-description">
                            ${events.description}
                        </p>
                    `;

    categoryCtn.setAttribute('class', `category ${events.privateClasses.active}`);
    categoryCtn.setAttribute('title', `Click to show ${events.category} events`);
    categoryCtn.innerHTML = categoryContent;

    categoriesCtn.appendChild(categoryCtn);
  });
});