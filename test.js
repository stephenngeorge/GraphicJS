'use strict';

import { backgroundSolid, circle } from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// define global variables
const width = canvas.width;
const height = canvas.height;

backgroundSolid(canvas, 'rgba(200, 0, 100, .4)');
circle(ctx).draw().outline();
