import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, MutationTree } from 'vuex'
import { Blockchain } from './model/blockchain';
import { Web3Blockchain } from './controller/web3_blockchain';

export interface State {
    account: string;
    balance: number;
    blockchain: Blockchain;
    blockchainLoaded: boolean;
}

const mutations = <MutationTree<State>>{
    setAccount(state, payload) {
        state.account = payload;
    },
    setBalance(state, payload) {
        state.balance = payload;
    },
    setBlockchainLoaded(state, payload) {
        state.blockchainLoaded = payload;
        state.blockchain = state.blockchain;
    }
};

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        account: "",
        balance: 0.0,
        blockchain: new Web3Blockchain(),
        blockchainLoaded: false
    },
    mutations: mutations
})

export function useStore() {
    return baseUseStore(key)
}
