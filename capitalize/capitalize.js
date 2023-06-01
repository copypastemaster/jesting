const capitalize = (str) => {
  let destructure = [...str];
  let test = destructure.shift();
  let cap = test.toUpperCase();
  let add = destructure.unshift(cap);

  return destructure.join('');
};

module.exports = capitalize;
