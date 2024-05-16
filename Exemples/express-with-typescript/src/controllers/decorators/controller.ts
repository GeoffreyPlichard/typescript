import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }

    // If target ES2016, use this instead
    // Object.getOwnPropertyNames(target.prototype).forEach((key) => {
    //   const routeHandler = target.prototype[key];
    //   const path = Reflect.getMetadata('path', target.prototype, key);
    // });
  }
}