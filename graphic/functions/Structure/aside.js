'use strict';

export default function aside (ctx, func) {
  return new Promise((res, rej) => {
    ctx.save();
    func();
    ctx.restore();
    res({
      status: 'RESOLVED',
      message: 'aside completed'
    })
  })
}
