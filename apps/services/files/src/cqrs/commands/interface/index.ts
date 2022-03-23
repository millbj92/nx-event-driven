import { File } from '@prisma/client/files';
import { ICommand } from '@nestjs/cqrs'
import { FileCreateInput } from '../../../@generated/prisma-nestjs-graphql/file/file-create.input';
import { FileUpdateInput } from './../../../@generated/prisma-nestjs-graphql/file/file-update.input';
import { FileWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/file/file-where-unique.input';

export interface IFileCommand extends ICommand {
  file: File;
};

export class CreateFileCommand {
  constructor(public readonly file: FileCreateInput) {}
}

export class UpdateFileCommand {
  constructor(public readonly file: FileUpdateInput) {}
}

export class DeleteFileCommand {
  constructor(public readonly file: FileWhereUniqueInput) {}
}

export type FileEventType = 'FILE_CREATED' | 'FILE_UPDATED' | 'FILE_DELETED';
export class SendKafkaCommand {
  constructor(public readonly file: File, public readonly type: FileEventType) {}
}
