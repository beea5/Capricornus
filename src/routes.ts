import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import { CreateCustomerController } from './controllers/CreateCustomerController'
import { ListCustomersController } from './controllers/ListCustomersController'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async (request: FastifyRequest, replay: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, replay: FastifyReply) => {
     return new CreateCustomerController().handle(request, replay)
    })

    fastify.get("/customers", async (request: FastifyRequest, replay: FastifyReply) => {
        return new ListCustomersController().handle(request, replay)
       })

     fastify.delete("/customer", async (request: FastifyRequest, replay: FastifyReply) => {
     return new DeleteCustomerController().handle(request, replay)
     })

}