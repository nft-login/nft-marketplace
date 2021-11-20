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
}
