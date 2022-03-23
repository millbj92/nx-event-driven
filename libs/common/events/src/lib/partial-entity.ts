import { Identifiableentity } from "@super-rad-poc/common/models";

export type PartialIdentifiableEntity<T extends  Identifiableentity> = Partial<T> & Pick<T, 'id'>;
