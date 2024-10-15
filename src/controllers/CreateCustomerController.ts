import { FastifyRequest, FastifyReply } from 'fastify'

import { CreateCustomerService } from  '../services/CreateCustomerService'
import { constants } from 'buffer';

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply ){
     const {name, email } = request.body as { name: string, email: string};


    const customerServices = new CreateCustomerService ()

    const customer = await customerServices.execute({ name, email});

    reply.send(customer)

    }
}

export { CreateCustomerController }