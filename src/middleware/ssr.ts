import koa from 'koa';

type middlewareFunction = koa.Middleware

const ssrMiddleware: middlewareFunction = async (ctx, next) => {
    await next();
}

export default ssrMiddleware;