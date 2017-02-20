'use strict';

import G from './graphic';

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
//ctx.transform(1, 0, 0, -1, 0, 0);
// global variables
const width = canvas.width;
const height = canvas.height;

G.bgSolid(c).cartesian();
G.circle(c, 0, 0, 70).outline();
G.line(c, 0, 0, 0, 70).draw({weight: 2, colour:'#555'});
