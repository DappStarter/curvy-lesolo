require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strategy crawl soap unique hundred light army ghost'; 
let testAccounts = [
"0x5c2325ba99ab8a83f167f4e98f26ce081c17563922aaa6441066a7c9fc96f921",
"0x0e8c669521f576abf9748bca4abde4333bb6ca1f47caeda495f4b1068a264dcd",
"0x461a2ff581de91beec5c493ed6fbaadae774d529c0292a1ad221ffafdc04d934",
"0xd455b713ae82bea314d8b2487bdd9673ea06af39410b3ca2bad6ee94412c3143",
"0x15213d97587c02669af176e45e74fc8cbc64aecaab9ef4ca96add1b8bee4f7d1",
"0x856b07a24176f382637e8377e924331ca7340d9a9055087586624629217ab932",
"0xfcdf245091127a66ea5b81d78f23b2fc42fd3f70bceba1ef37870eb4b7b67529",
"0x9fa170675eff485322eb2275d8f7415e1314cb871e0483e3b66cde3101279fc3",
"0xd72e62ee5313c44abe3293c400916ced4406af046755f95e41241fc8c1bdde7b",
"0x5d9a7a2fd105679333184a1e4d3818d9daf9de25c3dae050a7a2f4832c12812c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

