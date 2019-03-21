
const Controller = require('egg').Controller

function toInt(str) {
    if (typeof str === 'number') return str
    if (!str) return str
    return parseInt(str, 10) || 0
}

class UserController extends Controller {
    async index() {
        const user = await this.ctx.model.User.findAll()
        this.ctx.body = user
    }
    async show() {
        const ctx = this.ctx
        ctx.body = await ctx.model.User.findOne({
            where: {
                id: toInt(ctx.query.id),
            }
        })
    }
    async create() {
        const ctx = this.ctx
        const { id, name, age } = ctx.query
        const user = await ctx.model.User.create({ id, name, age })
        ctx.status = 201
        ctx.body = user
    }
    async update() {
        const ctx = this.ctx
        const id = toInt(ctx.query.id)
        const user = await ctx.model.User.findOne({
            where: {
                id: id
            }
        })
        if (!user) {
            ctx.status = 404
            return
        }

        const { name, age } = ctx.query
        await user.update({ name, age })
        ctx.body = user
    }
    async destroy() {
        const ctx = this.ctx
        const id = toInt(ctx.query.id)
        const user = await ctx.model.User.findOne({
            where: {
                id: id
            }
        })
        if (!user) {
            ctx.status = 404
            return
        }

        await user.destroy()
        ctx.status = 200
    }
}

module.exports = UserController
