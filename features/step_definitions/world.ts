import { setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';

class World extends CucumberWorld {
  constructor(options) {
    super(options);
  }
}

setWorldConstructor(World);
