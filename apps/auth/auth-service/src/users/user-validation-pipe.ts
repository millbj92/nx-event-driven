import { ArgumentMetadata, BadRequestException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import * as Joi from 'joi';

@Injectable()
export class UserValidationPipe implements PipeTransform<any> {
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
      throw new HttpException(
        {
          message: 'Invalid input data',
          errors: errorMessages,
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return value;
  }
}
