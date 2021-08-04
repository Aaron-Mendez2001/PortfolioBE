
exports.seed = async function(knex) {
  await knex('experience').insert([
    {
      name: 'Farm Fresh Produce',
      url: 'https://keen-boyd-c1b80c.netlify.app/',
      description: 'This app was designed to connect local consumers to their local farms to live well and support their local farmers and businesses. I was responsible for creating this landing page and about us page with HTML, CSS, and LESS.',
      skills_1: 7,
      skills_2: 8,
      skills_3: null,
    },
    {
      name: 'Food Truck TrackR',
      url: 'https://truck-tracker-login.netlify.app/',
      description: 'Hungry? This site is for food truck owners to broadcast their locations, menus, special events, and more to potential customers. My role was to produce react forms and components for the login page, and for truck drivers to include their information.',
      skills_1: 3,
      skills_2: 5,
      skills_3: 7,
    },
    {
      name: 'How2',
      url: 'https://how-to-sepia.vercel.app/',
      description: 'Using Redux, Jest, and React, I constructed the CRUD operations and state management for this app. The purpose being to allow people to share their wisdom and experience and learn on a variety of topics',
      skills_1: 3,
      skills_2: 5,
      skills_3: 6,
    },
    {
      name: 'Anywhere Fitness',
      url: 'https://anywhere-fitness-tt-webpt-88.herokuapp.com/',
      description: 'The problem: short on time, crazy schedule, searching around for gyms and exercise program but not finding what you need. The solution: an application that allows instructors to connect with the people in their community, and offer them recorded sessions, a full schedule, and even personalized sessions. I designed the relational node database with the help of a colleague.',
      skills_1: 1,
      skills_2: 2,
      skills_3: 5,
    },
    {
      name: 'Express Groomers',
      url: 'https://github.com/Lambda-School-Labs/express-groomer-b-be',
      description: 'I got the chance to learn about the Twilio API to implement the SMS features on the back-end of this app. The purpose of which, is to provide greater exposure for grooming services, and provide ease of scheduling and payment online for dog lovers.',
      skills_1: 1,
      skills_2: 2,
      skills_3: 5,
    },
  ])
};
