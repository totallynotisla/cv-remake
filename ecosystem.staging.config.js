module.exports = {
    apps: [
        {
            name: "portfolio@prod",
            script: "next start",
            env: {
                PORT: 3001,
            },
        },
    ],
};
