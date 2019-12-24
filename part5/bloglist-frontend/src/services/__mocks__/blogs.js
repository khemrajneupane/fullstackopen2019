const blogs =[
    {
        title: "Gary Vaynerchuk",
        author: "Gary Vaynerchuk",
        url: "https://www.garyvaynerchuk.com/blog/",
        likes: 10001,
        user: {
            username: "admin",
            
        },
        id: "5dfcbdd9bad139290476a13e"
    },
    {
        title: "SparkToro",
        author: "Rand Fiskin",
        url: "https://www.lifehack.org/articles/communication/top-10-most-inspirational-bloggers-the-world.html",
        likes: 9999,
        user: {
            username: "admin",
            
        },
        id: "5dfcbe4cbad139290476a13f"
    },
    {
        title: "Meet Pat Flynn",
        author: "Pat Flynn",
        url: "https://patflynn.com/about/",
        likes: 8000,
        user: {
            username: "user",
            
        },
        id: "5dfcbebbbad139290476a140"
    },
    {
        title: "Brian Clark, Author at Copyblogger Page",
        author: "Brian Clark",
        url: "https://www.copyblogger.com/author/brian-clark/",
        likes: 7539,
        user: {
            username: "user",
            
        },
        id: "5dfcbf24bad139290476a141"
    },
    {
        title: "The Daily Dish",
        author: "Andrew Sullivan",
        url: "http://dish.andrewsullivan.com/",
        likes: 300001,
        user: {
            username: "khem",
           
        },
        id: "5dfcc065bad139290476a143"
    },
    {
        title: "MyTitle",
        author: "Neupane Khem Raj",
        url: "https://www.linkedin.com/in/khemrajneupane/",
        likes: 99882225,
        user: {
            username: "user",
            
        },
        id: "5dff9101dced267b72b20b7b"
    }
];

const getAll = () => {
    return Promise.resolve(blogs);
};

export default { getAll };