// This is the question funstions that contain questions and the answers. 
// They are in multidimensional array with inner array elements

var questions = [
    { 
        question: "How would you properly access the third item of an array named 'myArray' in Javascript?", 
        answers: [
            { text: "myArray(3)", correct: false },
            { text: "myArray[3]" , correct: false},
            { text: "myArray[2]", correct: true},
            { text: "myArray.3", correct: false }
        ]
    },
    { 
        question: "Which of the following function of Array object calls a function for each element in the array?", 
        answers: [
            { text: "concat()", correct: false },
            { text: "filter()", correct: false },
            { text: "forEach()", correct: true },
            { text: "split()", correct: false }
        ]
    },
    { 
        question: "What does ORM stand for", 
        answers: [
            { text: "Objective Regulation Mechanism", correct: false },
            { text: "Official React Manual", correct: false },
            { text: "iOnline Runtime Manager", correct: false },
            { text: "Object Relational Mapping", correct: true }
        ]
    },
    { 
        question: "Which of the following best describes Node.js?", 
        answers: [
            { text: "A Javascript library designed to more easily interface with the DOM.", correct: false },
            { text: "A platform for hosting websites and web apps.", correct: false },
            { text: "An external run time environment for executing Javascript code outside of the browser.", correct: true},
            { text: "A popular blogposting site for Javascript developers.", correct: false }
        ]
    },
    { 
        question: "How do you round the number 102.456, to the nearest integer?",
        answers: [
            { text: "Math.random(102.456)", correct: false },
            { text: "Math.rnd(102.456)", correct: false },
            { text: "round(102.456)", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
    { 
        question: "What is one advantage of using GraphQL?", 
        answers: [
            { text: "You are able to display data from your server in a preformatted graph.)", correct: false },
            { text: "GraphQL is the only way to make requests to a database with a Node.js backend.]", correct: false},
            { text: "GraphQL is made by Facebook, so Facebook developers will routinely debug all of your GraphQL projects for you!)", correct: false },
            { text: "None of the aboveYou are not restricted by API endpoints and can therefore access specific amounts and types of data in a single request.", correct: true }
        ]
    },
    { 
        question: "What is a Progressive Web Application?",
        answers: [
            { text: "An app that must be downloaded on a mobile device through an app store.", correct: false },
            { text: "An app that uses tools such as service workers and manifests to replicate functionalities of native apps.", correct: true },
            { text: "An app that has received an award for exceptional creativity.", correct: false },
            { text: "A term for an app that has met certain accessability criteria.", correct: false }
        ]
    },
];