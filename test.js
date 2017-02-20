'use strict';

import G from './graphic';

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
//ctx.transform(1, 0, 0, -1, 0, 0);
// global variables
const width = canvas.width;
const height = canvas.height;

G.bgSolid(c).cartesian(1);
G.circle(c, 0, 0, 60).outline({weight: 4, colour: '#808080'});
