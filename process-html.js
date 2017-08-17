#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { map, pipe, trim } = require('ramda');
const cheerio = require('cheerio');

const { fromReadableStream } = require('./utils.js');

const processHTML = (html) => {
  const $ = cheerio.load(html);

  const $links = $('.docs_finder-list > a')
    .each((index, el) => {
      console.log('sutff');
    })

  return $.html();
};

const main = pipe(
  fromReadableStream,
  map(trim),
  map(processHTML)
);

main(process.stdin).subscribe(
  result => console.log(result),
  err => {
    console.error(err);
    process.exit(1);
  },
);