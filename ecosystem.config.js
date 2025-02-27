module.exports = {
    apps: [
        {
            name: "portfolio@prod",
            script: "npx next start",
            env: {
                PORT: 3001,
            },
        },
    ],
};
