const catService = async() => {
    console.log("Mock Facts");
    return Promise.resolve({
        data: [{
                "fact": "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
                "length": 114
            },
            {
                "fact": "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
                "length": 97
            },
            {
                "fact": "The technical term for a cat’s hairball is a “bezoar.”",
                "length": 54
            },
            {
                "fact": "A group of cats is called a “clowder.”",
                "length": 38
            },
            {
                "fact": "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
                "length": 142
            },
            {
                "fact": "Cats make about 100 different sounds. Dogs make only about 10.",
                "length": 62
            },
            {
                "fact": "Every year, nearly four million cats are eaten in Asia.",
                "length": 55
            },
            {
                "fact": "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
                "length": 100
            },
            {
                "fact": "Approximately 24 cat skins can make a coat.",
                "length": 43
            },
            {
                "fact": "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
                "length": 278
            }
        ],
    });
};

const catServiceByID = async(id) => {
    console.log("Mock Facts by ID");
    return Promise.resolve({
        data: {
            "fact": "Cats have 3 eyelids.",
            "length": 20
        }
    });
};

module.exports = { catService, catServiceByID };