import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // Handle the case with multiple middleware decorators are added
    const middlewares = 
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
  
    // middlewares.push(middleware); // we can use typescript syntax instead
    //  [...middlewares, middleware]

    Reflect.defineMetadata(
      MetadataKeys.middleware, 
      [...middlewares, middleware], 
      target, 
      key
    );
  };
}
