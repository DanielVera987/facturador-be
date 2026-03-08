import {
  Injectable as NestJSInjectable,
  Inject as NestJSInject,
} from '@nestjs/common';

export function Injectable() {
  return NestJSInjectable();
}

export function Inject(token: symbol | string) {
  return NestJSInject(token);
}
