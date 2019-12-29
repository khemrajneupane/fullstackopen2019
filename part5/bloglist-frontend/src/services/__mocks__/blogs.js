const blogs =[
    {
        title: "Gary Vaynerchuk",
        author: "Gary Vaynerchuk",
        url: "https://www.garyvaynerchuk.com/blog/",
        likes: 10001,
        user: {
            username: "admin",
            name:"admin"
            
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
            name:"admin"
            
        },
        id: "5dfcbe4cbad139290476a13f"
    },
];
const setToken = () => {};
const getAll = () => {
    return Promise.resolve(blogs);
};

export default { getAll,setToken };