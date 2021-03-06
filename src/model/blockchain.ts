import { Token } from "./token";

export interface Blockchain {
    init(): Promise<void>;
    chainId(): Promise<string>;
    contractAddress(): Promise<string>;
    loadContract(contractAddress: string): Promise<void>;
    account(): Promise<string>;
    balance(): Promise<string>;
    nftName(): Promise<string>;
    nftSymbol(): Promise<string>;
    balanceOf(account: string): Promise<number>;
    baseURI(): Promise<string>;
    tokenCount(): Promise<number>;
    getToken(tokenId: number): Promise<Token>;
    buyToken(tokenId: number, price: string): Promise<void>;
    toggleForSale(tokenId: number): Promise<void>;
    changeTokenPrice(tokenId: number, newPrice: string): Promise<void>;
    deployNew(name: string, symbol: string, tokenURI: string, price: string): Promise<string>;
    mint(tokenCount: number): Promise<void>;
}
