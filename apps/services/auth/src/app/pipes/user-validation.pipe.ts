import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform, UnprocessableEntityException } from '@nestjs/common';
import { User } from '@prisma/client/users';
import * as Joi from 'joi';
import { UserForRegister } from '../models';

@Injectable()
export class UserValidationPipe implements PipeTransform<User> {
  public constructor(private readonly schema: Joi.Schema) {}

  async transform(request: any, metadata: ArgumentMetadata) {
    if (!request) {
      throw new BadRequestException('No data submitted');
    }

    const { error, value } = this.schema.validate(request, {
      abortEarly: false,
      convert: true,
      stripUnknown: true,
      allowUnknown: true,
    });

    if (error) {
      console.log(error);
      const errorMessages = error.details.map((d) => d.message);
      throw new UnprocessableEntityException(
        {
          message: 'Invalid input data',
          errors: errorMessages,
        }
      );
    }

    return value;
  }
}
