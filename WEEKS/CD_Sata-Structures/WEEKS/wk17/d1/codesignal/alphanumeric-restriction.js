function csAlphanumericRestriction(input_str) {
  if (/^[a-z]+$/i.test(input_str) || /^\d+$/.test(input_str)) {
    return true;
  } else {
    return false;
  }
}
csAlphanumericRestriction(111111110);
console.log(
  '🚀 ~ file: alphanumeric-restriction.js ~ line 9 ~ csAlphanumericRestriction( 111111110 )',
  csAlphanumericRestriction(111111110)
);
csAlphanumericRestriction('abcdefghijklmnopqrstuvwxyz');
console.log(
  "🚀 ~ file: alphanumeric-restriction.js ~ line 11 ~ csAlphanumericRestriction( 'abcdefghijklmnopqrstuvwxyz' )",
  csAlphanumericRestriction('abcdefghijklmnopqrstuvwxyz')
);

console.log(
  "🚀 ~ file: alphanumeric-restriction.js ~ line 11 ~ csAlphanumericRestriction( 'abcdefghijklmnopqrstuvwxyz' )",
  csAlphanumericRestriction('a565tuvwxyz')
);
console.log(
  "🚀 ~ file: alphanumeric-restriction.js ~ line 11 ~ csAlphanumericRestriction( 'abcdefghijklmnopqrstuvwxyz' )",
  csAlphanumericRestriction('a!2wxyz')
);
console.log(
  "🚀 ~ file: alphanumeric-restriction.js ~ line 11 ~ csAlphanumericRestriction( 'abcdefghijklmnopqrstuvwxyz' )",
  csAlphanumericRestriction('abcdef!ghijklmnopqrstuvwxyz')
);
