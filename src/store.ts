import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, MutationTree } from 'vuex'

export interface State {
    account: string;
    balance: number;
    chainId: string;
}

const mutations = <MutationTree<State>>{
    setAccount(state, payload) {
        state.account = payload;
    },
    setBalance(state, payload) {
        state.balance = payload;
    },
    setChainId(state, payload) {
        state.chainId = payload;
    }
};

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        account: "",
        balance: 0.0,
        chainId: "0x0"
    },
    mutations: mutations
})

export function useStore() {
    return baseUseStore(key)
}
