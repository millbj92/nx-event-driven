import { QueryHandler } from "@nestjs/cqrs";
import { FileService } from "../../../file.service";
import { AllFilesQuery, OneFileQuery } from '../interface/index';


@QueryHandler(AllFilesQuery)
export class AllFilesQueryHandler {
    constructor(
        private readonly service: FileService,
    ) {}

    async execute(query: AllFilesQuery) {
        const { where } = query;
        return this.service.files(where, null);
    }
}


@QueryHandler(OneFileQuery)
export class OneFileQueryHandler {
    constructor(
        private readonly service: FileService,
    ) {}

    async execute(query: OneFileQuery) {
        const { where } = query;
        return this.service.file(where);
    }
}


