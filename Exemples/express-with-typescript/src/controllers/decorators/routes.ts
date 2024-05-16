import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// A guard to check if the decorators methods takes a request and response as argument
// and return nothing
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

// Create factory decorators
function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);