import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../_services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const customerService = new DeleteCustomerService();

        const customer = await customerService.execute({ id });

        reply.send(customer);
    }
}
export { DeleteCustomerController };
