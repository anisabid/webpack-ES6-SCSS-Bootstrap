'use strict';

export const ENV_DEV = 'dev';
export const ENV_PROD = 'prod';

export class Config {

  constructor() {
    this._env = ENV_DEV;
  }

  get env() {
    return this._env;
  }

  set env(value) {
    this._env = value;
  }
}
