var F=Object.defineProperty;var $=(a,e,t)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>($(a,typeof e!="symbol"?e+"":e,t),t);import{_ as R,o as r,c as p,p as L,a as S,b as i,d as b,e as f,R as B,W as O,C as E,f as N,g as D,u as q,w as c,h as y,i as k,j as x,t as T,F as _,r as M,k as o,l as u,S as g,M as H,m as U,n as P,q as G,s as V}from"./vendor.08039054.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function t(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=t(n);fetch(n.href,d)}};W();const j={},K=a=>(L("data-v-e5993138"),a=a(),S(),a),z={class:"footer"},J=K(()=>i("p",null,"(c) chriamue",-1)),Q=[J];function X(a,e){return r(),p("div",z,Q)}var Y=R(j,[["render",X],["__scopeId","data-v-e5993138"]]);const v=b({setup(a){const e=!0,t="#4289b9";return(s,n)=>(r(),f(B,{loading:e,color:t}))}}),Z=[{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"string",name:"baseTokenURI",type:"string"},{internalType:"uint256",name:"basePrice",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isForSale",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"priceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"toggleForSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"count",type:"uint256"}],name:"mintMultiple",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],ee={"42":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x3B8270447b913d0b935e09d1C2daEc3F5CDD968f",transactionHash:"0x9e04cc827f062286f88cc1039d6cb2a7368179de12dc29dede56c1ac36f326e5"},"65":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0xf0263c1D56A167cDCF72086071f96CbB8a077AE9",transactionHash:"0xa5e691b1c1f9466d6d788827ef9d01eb949f4cb3c127c19ccdcffdcc6a984343"},"256":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0xa0d4E5CdD89330ef9d0d1071247909882f0562eA",transactionHash:"0x743ce5abf297be93fcd6eacaa5716b544bdaa9720245fbcdbd9e738b902961b5"},"588":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x8866afd737201d9Fcc16438b65f1E3db7A3A5Ddb",transactionHash:"0x6e6fcdf05ed6ccf7f8eaa78d97a5e37fdab1cc63097002ebb59317e277a455ad"},"1337":{events:{},links:{},address:"0x393467F50bE8BF6615627F3cFb2C91Ca205Ec438",transactionHash:"0xed53de8d2e9a7ef5b3a1848540cd1ee9d313a9d24419075d25c7a98e96f60788"},"80001":{events:{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b":{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"}},links:{},address:"0x8866afd737201d9Fcc16438b65f1E3db7A3A5Ddb",transactionHash:"0x8bbb90e8dcf092b77cca6832ba4a63b4ba081e62e2d2eb60381f5028dcf759b7"}};function te(){const a=window.location.search,e=new URLSearchParams(a).get("contract");return console.log("?contract=",e),e}class ne{constructor(){l(this,"provider");l(this,"contract");l(this,"init",async()=>{var e;this.provider=window.ethereum,await((e=window.ethereum)==null?void 0:e.request({method:"eth_requestAccounts"})),this.provider?(console.log("Ethereum successfully detected!"),this.provider.on("network",(t,s)=>{s&&window.location.reload()})):console.error("Please install MetaMask!")});l(this,"loadContract",async e=>{var n;const t=await((n=window.ethereum)==null?void 0:n.request({method:"eth_requestAccounts"})),s=new O(window.ethereum);console.log(e,t,s),this.contract=await new E(e,Z,s),console.log(this.contract)});l(this,"chainId",async()=>{var e;return parseInt(await((e=this.provider)==null?void 0:e.request({method:"eth_chainId"})),16).toString()});l(this,"contractAddress",async()=>{const e=await this.chainId(),s=ee[e];return s?te()||s.address:!1});l(this,"account",async()=>{var t;return(await((t=this.provider)==null?void 0:t.request({method:"eth_requestAccounts"})))[0]});l(this,"balance",async()=>{var t;const e=await((t=this.provider)==null?void 0:t.request({method:"eth_getBalance",params:[await this.account(),"latest"]}));return N(e,"ether")});l(this,"nftName",async()=>{var e;return await((e=this.contract)==null?void 0:e.name())});l(this,"nftSymbol",async()=>{var e;return await((e=this.contract)==null?void 0:e.symbol())});l(this,"balanceOf",async e=>{var s;return(await((s=this.contract)==null?void 0:s.balanceOf(e))).toNumber()});l(this,"baseURI",async()=>await this.contract.baseURI());l(this,"tokenCount",async()=>(await this.contract.totalSupply()).toNumber());this.init()}}const ae={setAccount(a,e){a.account=e},setBalance(a,e){a.balance=e},setBlockchainLoaded(a,e){a.blockchainLoaded=e,a.blockchain=a.blockchain}},I=Symbol(),se=D({state:{account:"",balance:0,blockchain:new ne,blockchainLoaded:!1},mutations:ae});function h(){return q(I)}const de={key:0},re={key:1},ie=b({async setup(a){let e,t;const s=h(),n=window.ethereum;var d="";return n?(console.log("Ethereum successfully detected!"),d=([e,t]=c(()=>s.state.blockchain.chainId()),e=await e,t(),e)):console.error("Please install MetaMask!"),(m,w)=>(r(),p(_,null,[y(n)?(r(),p("div",de,"Metamask successfully detected")):k("",!0),y(n)?k("",!0):(r(),p("div",re,"Please install MetaMask!")),x(" Chain ID: "+T(y(d)),1)],64))}});const oe={class:"row"},pe={class:"col-12"},ye={class:"navbar navbar-expand-lg navbar-light bg-light"},le=x("Home"),ue=x("Marketplace"),ce=x("About"),me={class:"col-12 bg-light border p-3"},be={key:1},fe={style:{"text-align":"center","padding-top":"20px"}},Te=x(" Loading please wait ... "),xe={class:"col-12 bg-info"},_e=b({setup(a){const e=h();return e.state.blockchain.init().then(async()=>{await e.state.blockchain.loadContract(await e.state.blockchain.contractAddress()),e.commit("setBlockchainLoaded",!0)}),(t,s)=>{const n=M("router-link"),d=M("router-view");return r(),p(_,null,[i("div",oe,[i("div",pe,[i("div",ye,[o(n,{to:"/",class:"btn btn-info"},{default:u(()=>[le]),_:1}),o(n,{to:"/marketplace",class:"btn btn-info"},{default:u(()=>[ue]),_:1}),o(n,{to:"/about",class:"btn btn-info"},{default:u(()=>[ce]),_:1})])]),i("div",me,[y(e).state.blockchainLoaded?k("",!0):(r(),f(v,{key:0})),y(e).state.blockchainLoaded?(r(),p("div",be,[o(d)])):k("",!0),(r(),f(g,null,{default:u(()=>[o(ie)]),fallback:u(()=>[i("div",fe,[o(v),Te])]),_:1}))])]),i("div",xe,[o(Y)])],64)}}}),ve={key:0},he=b({async setup(a){let e,t;const s=h();var n=([e,t]=c(()=>s.state.blockchain.contractAddress()),e=await e,t(),e),d=([e,t]=c(()=>s.state.blockchain.nftName()),e=await e,t(),e),m=([e,t]=c(()=>s.state.blockchain.nftSymbol()),e=await e,t(),e);return(w,C)=>y(s).state.blockchainLoaded?(r(),p("div",ve,[x(T(y(d))+" "+T(y(m))+" ",1),i("p",null,"Contract "+T(y(n)),1)])):k("",!0)}}),we=b({async setup(a){let e,t;const s=h(),n=([e,t]=c(()=>s.state.blockchain.account()),e=await e,t(),e),d=([e,t]=c(()=>s.state.blockchain.balance()),e=await e,t(),e),m=([e,t]=c(()=>s.state.blockchain.balanceOf(n)),e=await e,t(),e);return(w,C)=>(r(),p(_,null,[i("h1",null,T(y(n)),1),i("p",null,"Balance "+T(y(d)),1),i("p",null,"Tokens "+T(y(m)),1)],64))}}),ke=b({async setup(a){let e,t;const s=h(),n=([e,t]=c(()=>s.state.blockchain.baseURI()),e=await e,t(),e);console.log(n);const d=([e,t]=c(async()=>([e,t]=c(()=>fetch(n)),e=await e,t(),e).text()),e=await e,t(),e);return console.log(d),(m,w)=>(r(),p("div",null,[o(y(H),{source:y(d)},null,8,["source"])]))}}),ge=i("h1",null,"Home",-1),Ae={style:{"text-align":"center","padding-top":"20px"}},Re={style:{"text-align":"center","padding-top":"20px"}},Me={style:{"text-align":"center","padding-top":"20px"}},Ie=b({setup(a){return(e,t)=>(r(),p(_,null,[ge,(r(),f(g,null,{default:u(()=>[o(he)]),fallback:u(()=>[i("div",Ae,[o(v)])]),_:1})),(r(),f(g,null,{default:u(()=>[o(we)]),fallback:u(()=>[i("div",Re,[o(v)])]),_:1})),(r(),f(g,null,{default:u(()=>[o(ke)]),fallback:u(()=>[i("div",Me,[o(v)])]),_:1}))],64))}}),Ce=b({async setup(a){let e,t;const s=h(),n=([e,t]=c(()=>s.state.blockchain.tokenCount()),e=await e,t(),e);return console.log(n),(d,m)=>(r(),p("ul",null,[(r(!0),p(_,null,U(y(n),w=>(r(),p("li",{key:w}))),128))]))}}),Fe=i("h1",null,"Marketplace",-1),$e={style:{"text-align":"center","padding-top":"20px"}},Le=b({setup(a){return(e,t)=>(r(),p(_,null,[Fe,(r(),f(g,null,{default:u(()=>[o(Ce)]),fallback:u(()=>[i("div",$e,[o(v)])]),_:1}))],64))}}),Se={};function Be(a,e){return r(),p("h1",null,"NFT Marketplace")}var Oe=R(Se,[["render",Be]]);const Ee=[{path:"/",component:Ie},{path:"/marketplace",component:Le},{path:"/about",component:Oe}],Ne=P({history:G(),routes:Ee}),A=V(_e);A.use(Ne);A.use(se,I);A.mount("#app");
