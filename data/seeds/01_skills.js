
exports.seed = async function(knex) {
  return knex('skills').insert([
    {
      name: 'Node', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'My personal favorite area; back end server building. Utilizing Node.JS, Express, and Knex I built the relational database for this portfolio website. Simple logic, tested to perfection with Jest and Postman, and passwords protected by bcryptjs.'
    },
    {
      name: 'SQLite3', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'An RDBMS that I used to create this two table, one to many relationship database. A lightwheight language, it does the job of constructing and traversing the data tables I make and writing relationships between them.'
    },
    {
      name: 'React', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'A component based library for building stateful single page applications, such as this one here. End-to-end and unit tested with Cypress.io and Jest, styled with styled-components, and managed by Redux, my applications are efficient and simple'
    },
    {
      name: 'Python', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'A language I have used solely for coding challenges and creating data structures. Data queues and stacks, traversals on binary search trees, these are the skills and the logical coding mindset I have learned.'
    },
    {
      name: 'Jest', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'The testing language of choice for javascript applications, I use this to unit test all my endpoints when building a database, and at times to do a sanity test on my react applications. My go-to, however, is always Cypress.io end-to-end testing for front-end applications.'
    },
    {
      name: 'Redux', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'The state management system proved difficult to learn due to the complexity of it, but that is why I have not forgotten it. A basic layout of reducers and actions, what was hard is now essential in my opinion, to simplify how the state of my applications is handled as well as the CRUD operations.'
    },
    {
      name: 'CSS', 
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'No one will buy an ugly house, nor do I expect anyone to accept an ill-designed site. With whimsical as my means for framing my designs, I use LESS and various javascript styling libraries and tools to present functional yet stylish websites.'
    },
    {
      name: 'HTML5',
      education: 'Bloom institute of technology Nov. 2019 - March 2021',
      description: 'The basic building blocks of every web page, I am well versed in accesibility requirements and principles to make my projects available to all'
    }
  ])
};
