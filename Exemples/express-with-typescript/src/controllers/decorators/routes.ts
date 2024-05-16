import 'reflect-metadata';

// Create factory decorator
export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  }
}