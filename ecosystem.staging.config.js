module.exports = {
    apps: [
        {
            name: "portfolio@staging",
            script: "npx next start",
            env: {
                PORT: 3004,
            },
        },
    ],
};
