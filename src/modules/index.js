import transactionRouter from './transaction'

const apiPrefix = '/api/v1';


const  routes = (app) => {
    app.use(apiPrefix, transactionRouter)
    return app;
};

export default routes;
