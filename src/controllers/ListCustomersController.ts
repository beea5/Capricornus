import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController{
 async handle(request: FastifyRequest, replay: FastifyReply){
   const listCustomersService = new ListCustomersService();
    
   const customers = await listCustomersService.execute();

   replay.send(customers);
 }
}
export { ListCustomersController }