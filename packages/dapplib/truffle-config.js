require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remember social idea process sure stable'; 
let testAccounts = [
"0x030bbb7494cf3b8277c63eed96f869625682ba69952796b20a21c15026747225",
"0x0dbc20825ffaa79d2965d265499a43af5e80038bbb313d1b0f2a279c8a5bda7c",
"0x4bc1e608b6e4af6c0ce658857735adc2ff8113b34bb02ef1f7fead33bab54ea1",
"0xb0dd55afd97d6189103befd99b8aab59acdb0feddad9388fc34b64b9ebacbf8f",
"0x3b6c0875e7714dd8501fd4868a17216e4773c242e1775b57f135f2839a733e6f",
"0x0618039c7a4c11f8f68f66d1a9b3173da911866e7853024eb28a0497b12d1d33",
"0x4adc179250b3953c05a398427f103f89e4f7f4ecf925d952c594d5145e5ce075",
"0x7fb3214298492c6396730ad4db660510fc20227b0e54cc706d46ef72cbbf3e74",
"0x8ef530da1276212ad340f0f018af03d8e8fb502b94a006da39120321c6055b81",
"0x88622d3bdf1f17299c511cc7ba53fc496177662c1443a40803eddb51b35621e4"
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

