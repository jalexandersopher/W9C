

var tweets = [
    {
        tweet: "tweet 1",
        username: "Jake",
        age: 26,
        created_at: "05-15-2020"
    },

    {
        tweet: "tweet 2",
        username: "Ben",
        age: 21,
        created_at: "05-16-2020"
    },

    {
        tweet: "tweet 3",
        username: "Mike",
        age: 28,
        created_at: "05-17-2020"
    },
    {
        tweet: "tweet 4",
        username: "Dave",
        age: 24,
        created_at: "05-15-2020"
    },

    {
        tweet: "tweet 5",
        username: "Lisa",
        age: 19,
        created_at: "05-16-2020"
    },

    {
        tweet: "tweet 6",
        username: "Beth",
        age: 16,
        created_at: "05-17-2020"
    },
    {
        tweet: "tweet 7",
        username: "Wes",
        age: 27,
        created_at: "05-15-2020"
    },

    {
        tweet: "tweet 8",
        username: "Matt",
        age: 45,
        created_at: "05-16-2020"
    },

    {
        tweet: "tweet 9",
        username: "Millie",
        age: 29,
        created_at: "05-17-2020"
    },
    {
        tweet: "tweet 10",
        username: "Tom",
        age: 14,
        created_at: "05-15-2020"
    },

    {
        tweet: "tweet 11",
        username: "Mark",
        age: 50,
        created_at: "05-16-2020"
    },

    {
        tweet: "tweet 12",
        username: "Sasha",
        age: 17,
        created_at: "05-17-2020"
    },
];

function ageCheck(tweets) {
    return tweets.age >= 18;
}

var overEighteentweets = tweets.filter(ageCheck);
console.log(overEighteentweets);