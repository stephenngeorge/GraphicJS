'use strict';

export default function map(value, range_1A, range_1B, range_2A, range_2B) {
  let Diff_1 = Math.abs(range_1A - range_1B);
  let Diff_2 = Math.abs(range_2A - range_2B);

  let range_1_min = range_1A < range_1B ? range_1A : range_1B;
  let range_2_min = range_2A < range_2B ? range_2A : range_2B;

  let value_relative = value - range_1_min;
  if (value_relative < 0) {
    console.error({
      status: 'ERROR',
      message: 'Could not calculate - the initial value must be within the first range'
    });
  }
  else {
    let value_percentRange1 = ((value - range_1_min) / Diff_1) * 100;
    return ((Diff_2 / 100) * value_percentRange1) + range_2_min;
  }
}
