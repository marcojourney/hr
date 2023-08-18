import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({cmd: 'get_order'})
  findOne() {
    return 'return get an order';
  }

  @MessagePattern({cmd: 'get_orders'})
  findAll() {
    return 'return get all orders';
  }

  @MessagePattern({cmd: 'delete_order'})
  delete() {
    return 'return status of delete order';
  }
}
