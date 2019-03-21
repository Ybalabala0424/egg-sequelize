
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/user', controller.user.index)
    router.get('/show', controller.user.show)
    router.get('/create', controller.user.create)
    router.get('/update', controller.user.update)
    router.get('/destroy', controller.user.destroy)
}
