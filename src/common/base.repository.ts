export abstract class BaseRepository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract create(item: T): Promise<T>;
  abstract update(id: string, newItem: T): Promise<T>;
  abstract delete(id: string): Promise<boolean>;
}
