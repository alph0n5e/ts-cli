#!/usr/bin/env node
import yargs from 'yargs';

import {debugChoices, DEFAULT_DEBUG_TYPE} from "..";

const argv = yargs
  .usage('Usage: ts-cli <command> [options]')
  .command('test', 'This is a test')
  .options({
    option: {
      alias: 'o',
      description: 'Option',
      choices: debugChoices,
      default: DEFAULT_DEBUG_TYPE
    }
  })
  .argv;

console.log(argv);