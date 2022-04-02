export interface IDatabase<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}


export type DBKey = string | number | symbol;
export class InMemoryDatabase<T, K extends DBKey> implements IDatabase<T, K> {
  private db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }

  getAll(): T[] {
    return Object.values(this.db);
  }

  delete(id: K): void {
    delete this.db[id];
  }
}
