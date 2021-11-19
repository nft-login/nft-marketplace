export interface Blockchain {
    init(): Promise<void>;
    chainId(): Promise<string>;
    contractAddress(): Promise<string>;
    loadContract(contractAddress: string) : Promise<void>;
    account(): Promise<string>;
    nftName(): Promise<string>;
    nftSymbol(): Promise<string>;
}