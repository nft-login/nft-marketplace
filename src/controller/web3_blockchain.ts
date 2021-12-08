import { ethers } from "ethers";

import { ContractFactory } from 'ethers';
import { Blockchain } from "../model/blockchain";
import * as EarlyAccessGame from "../abis/EarlyAccessGame.json";

function getContract() {
    const search = window.location.search;
    const contract = new URLSearchParams(search).get("contract");
    console.log("?contract=", contract);
    return contract;
}

interface Provider {
    request: Function;
    eth: {
        Contract: Function
    }
    on: Function
}

interface NetworkObjects {
    [keys: string]: {
        address: string;
    }
}

export class Web3Blockchain implements Blockchain {

    provider?: Provider;
    contract?: any;

    constructor() {
        this.init();
    }

    init = async () => {
        this.provider = window.ethereum;
        const accounts = await window.ethereum?.request({ method: "eth_requestAccounts" });
        if (this.provider) {
            console.log("Ethereum successfully detected!");
        } else {
            console.error("Please install MetaMask!");
        }
    }

    loadContract = async (contractAddress: string) => {
        const accounts = await window.ethereum?.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        this.contract = await new ethers.Contract(contractAddress, EarlyAccessGame.abi, signer)
    };

    chainId = async (): Promise<string> => {
        return parseInt(await this.provider?.request({
            method: "eth_chainId",
        }), 16).toString();
    };

    contractAddress = async () => {
        const networkId: string = await this.chainId();
        let networks: NetworkObjects = EarlyAccessGame.networks as unknown as NetworkObjects;
        const networkData: any = networks[networkId];
        if (!networkData) {
            return false;
        }

        const contractAddress = getContract() || networkData.address;
        return contractAddress;
    };

    account = async () => {
        const accounts = await this.provider?.request({ method: "eth_requestAccounts" });
        return accounts[0];
    }

    balance = async () => {
        const balance = await this.provider?.request({
            method: "eth_getBalance",
            params: [await this.account(), "latest"],
        });
        return ethers.utils.formatUnits(balance, "ether");
    };

    nftName = async () => {
        return await this.contract?.name();
    }

    nftSymbol = async () => {
        return await this.contract?.symbol();
    };

    balanceOf = async (account: string) => {
        let totalTokensOwnedByAccount = await this.contract?.balanceOf(account);
        return totalTokensOwnedByAccount.toNumber();
    };

    baseURI = async () => {
        return await this.contract.baseURI();
    };

    tokenCount = async () => {
        return (await this.contract.totalSupply()).toNumber();
    };

    getToken = async (index: number) => {
        const contract = this.contract;
        let price = await contract.priceOf(index);
        price = ethers.utils.formatUnits(price, "ether");
        const token = {
            id: index,
            uri: await contract.tokenURI(index),
            price,
            owner: await contract.ownerOf(index),
            forSale: await contract.isForSale(index),
        };
        return token;
    };

    buyToken = async (tokenId: number, price: string): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            this.contract.buy(tokenId, { from: await this.account(), value: ethers.utils.parseEther(price) }).then((tx: any) => {
                tx.wait().then(resolve);
            }).catch(reject);
        });
    };

    toggleForSale = async (tokenId: number): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            this.contract.toggleForSale(tokenId, { from: await this.account() }).then((tx: any) => {
                tx.wait().then(resolve);
            }).catch(reject);
        });
    };

    changeTokenPrice = async (tokenId: number, price: string): Promise<void> => {
        const newTokenPrice = ethers.utils.parseEther(price);
        return new Promise(async (resolve, reject) => {
            this.contract.setPrice(tokenId, newTokenPrice, { from: await this.account() }).then((tx: any) => {
                tx.wait().then(resolve);
            }).catch(reject);
        });
    };

    deployNew = async (name: string, symbol: string, tokenURI: string, price: string): Promise<string> => {
        return new Promise(async (resolve, reject) => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            const factory = new ContractFactory(EarlyAccessGame.abi, EarlyAccessGame.bytecode, signer);
            console.log(this.contract);
            let contract = await factory
                .deploy(
                    name,
                    symbol,
                    tokenURI,
                    ethers.utils.parseEther(price)
                );
            await contract.deployed()
            resolve(contract.address)
        });
    };

    mint = async (tokenCount: number): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            this.contract
                .mintMultiple(await this.account(), tokenCount, { from: await this.account() }).then((tx: any) => {
                    tx.wait().then(resolve);
                }).catch(reject);
        });
    };
}
