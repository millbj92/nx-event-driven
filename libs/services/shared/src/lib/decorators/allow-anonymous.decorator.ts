import { SetMetadata } from "@nestjs/common";

export const ALLOW_ANINONYMOUS_META_KEY = 'allowAnonymous';

export const AllowAnonymous = () =>
SetMetadata(ALLOW_ANINONYMOUS_META_KEY, true);