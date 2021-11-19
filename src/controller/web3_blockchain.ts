import { ethers } from "ethers";

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
            this.provider.on("network", (newNetwork: any, oldNetwork: any) => {
                if (oldNetwork) {
                    window.location.reload();
                }
            });
        } else {
            console.error("Please install MetaMask!");
        }
    }

    loadContract = async (contractAddress: string) => {
        const accounts = await window.ethereum?.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(contractAddress, accounts, provider);
        this.contract = await new ethers.Contract(contractAddress, EarlyAccessGame.abi, provider)
        console.log(this.contract);
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
}
