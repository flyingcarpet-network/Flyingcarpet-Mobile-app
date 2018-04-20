/*
 * NOTE: We do not use flow since this is a local copy of an existing open-source package.
 * From here: https://github.com/cilphex/ethereum-address
 */

const SHA3 = require('crypto-js/sha3');

const sha3 = value => SHA3(value, {
  outputLength: 256,
}).toString();

const isChecksumAddress = (addressArg) => {
  // Check each case
  const address = addressArg.replace('0x', '');
  const addressHash = sha3(address.toLowerCase());

  for (let i = 0; i < 40; i += 1) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
        (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
      return false;
    }
  }
  return true;
};

const isAddress = (address) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  }

  // Otherwise check each case
  return isChecksumAddress(address);
};

module.exports.isAddress = isAddress;
module.exports.isChecksumAddress = isChecksumAddress;
