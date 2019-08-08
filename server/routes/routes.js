const productsRoutes = require('./products');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    productsRoutes(app, fs);

};

module.exports = appRouter;