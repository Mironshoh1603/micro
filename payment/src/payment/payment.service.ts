import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}
  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const newPayment = await this.paymentRepository.create(createPaymentDto);
      await this.paymentRepository.save(newPayment);

      return {
        status: 200,
        success: true,
        message: 'Done',
      };
    } catch (error) {
      return {
        status: error.status || 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      const payments = await this.paymentRepository.find();

      return {
        status: 200,
        success: true,
        message: 'Found it',
        data: payments,
      };
    } catch (error) {
      return {
        status: error.status || 500,
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: string) {
    try {
      const payment = await this.paymentRepository.findOneBy({ id });

      if (payment) {
        return {
          status: 200,
          success: true,
          message: 'Found it',
          data: payment,
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'This payment does not exists',
        };
      }
    } catch (error) {
      return {
        status: error.status || 500,
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    try {
      const checkPayment = await this.paymentRepository.findOneBy({ id });

      if (checkPayment) {
        await this.paymentRepository.update(id, updatePaymentDto);

        return {
          status: 200,
          success: true,
          message: 'Updated successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'THis payment does not exists',
        };
      }
    } catch (error) {
      return {
        status: error.status || 500,
        success: false,
        message: error.message,
      };
    }
  }

  async remove(id: string) {
    try {
      const checkPayment = await this.paymentRepository.findOneBy({ id });

      if (checkPayment) {
        await this.paymentRepository.delete(id);

        return {
          status: 200,
          success: true,
          message: 'Deleted successfully',
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'THis payment does not exists',
        };
      }
    } catch (error) {
      return {
        status: error.status || 500,
        success: false,
        message: error.message,
      };
    }
  }
}
