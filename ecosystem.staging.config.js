module.exports = {
    apps: [
        {
            name: "portfolio@staging",
            script: "next start",
            env: {
                PORT: 3002,
            },
        },
    ],
};
