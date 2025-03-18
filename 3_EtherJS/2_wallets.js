// EthersJS: Wallets.
/////////////////////

// Ethers JS:
// https://docs.ethers.org/v6/

function exit() {
    console.log('Exercise ' + exercise + ' completed.');
    process.exit(0);
    console.log('I will not be printed to console :(');
}

// Exercise 1. Create a Random Wallet.
//////////////////////////////////////
exercise = '1a';

const ethers = require("ethers");

// a. Create a random wallet and print the address, the private key,
// and the mnenomic phrase.
// Hint: ethers.Wallet.createRandom();
let wallet = ethers.Wallet.createRandom();
console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
console.log("Mnemonic phrase:", wallet.mnemonic.phrase);

// exit();

// b. Bonus. Print the derivation path of the wallet and check that it is
// equal to `baseDevPath`. 

exercise = '1b';

let baseDevPath = "m/44'/60'/0'/0/";

// Wait is the derivation path? 
// Basically, the mnemonic alone isn't enough to determine an address
// and you need this extra bit of information. You may learn more here:
// https://www.youtube.com/watch?v=tPCN3nDVzZI
// Also:
// https://vault12.com/securemycrypto/crypto-security-basics/what-is-bip39/

// Note by Nhat: Essentially, a derivation path is like a set of directions that a crypto wallet uses to turn your secret "seed phrase" into specific wallet addresses. If you use the wrong directions, you'll end up with empty addresses, even if your seed phrase is correct.

console.log("Derivation path:", wallet.path);

// Your code here!
console.log("Derivation path:", wallet.path);
console.log("Is the derivation path equal to baseDevPath?", wallet.path === baseDevPath);


// exit();

// Exercise 2. Bonus. Create a Hierarchical Deterministic Wallet.
/////////////////////////////////////////////////////////////////
console.log();
exercise = 2;

// From the same wallet, you can derive a deterministic sequence of addresses.
// First, pick a mnemonic, then create a hierarchical deterministic wallet, 
// finally print the first 10 addresses and private keys generated.
// Hint: You need to append an index to the derivation path.

// Your code here!

// exit();