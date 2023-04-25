import Web3 from "web3";
const axios = require('axios/dist/browser/axios.cjs'); // browser
import packageJSON from "package.json";


const connectWallet =async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        console.log(`account ${account} has been connected！)`);
        const web3 = new Web3(window.ethereum);
        const sign_msg = `You are signing signature to login aipepe by your one-time nonce: `;
        let data = new FormData();
        data.append('address',account);
        axios.post(`${packageJSON.url.baseUrl}/login`,data).then(res => {
            console.log("login success!");
        }).catch(err => {
            console.log("ERROR",err);
        })
    }else {
        console.log('MetaMask is not installed!');
    }
}

const getShareCode = (walletAddress) => {
    axios.get(`${packageJSON.url.baseUrl}/user-share-code?wallet_address${walletAddress}`).then(res => {

        })

}



