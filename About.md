## Inspiration

New games often are available as early access. In this phase the game finished, but a fan community can be build and the game designer get already an income.
NFTs are a good way to finance game development but also give the fans the ability to show up they founded the game.

## What it does

The marketplace allows game makers deploy contracts and mint NFT Tokens.
The fan community can buy the nft tokens then.

The game hextris is not part of the hackathon and just embedded into our page.

## How we built it

First we cloned a marketplace called crypto boys and modified it a little bit.
But in the end we decided to develop the smart contract from scratch.

## Challenges we ran into

Sometimes there were problems to get tokens from the faucets.
We needed the tokens to deploy the contract.

## Accomplishments that we're proud of

We are proud that we deployed a erc721 smart contract and hosted a marketplace.

## What we learned

We learned to deploy smart contracts and how to host web3 software on github pages.
We played with ipfs and learned how to integrate it into web pages as the data for the contracts is stored on ipfs while the
hash address of the data is stored in the contract.

## What's next for the project

Next we need to give the frontend a redesign.
An extra contract should be created to list all games which provide NFTs.

Connect more chains. Currently connected are:

- https://nft-login.github.io/nft-login-marketplace/kovan/
- https://nft-login.github.io/nft-login-marketplace/okt/
- https://nft-login.github.io/nft-login-marketplace/heco/
- https://nft-login.github.io/nft-login-marketplace/celo/
- https://nft-login.github.io/nft-login-marketplace/lisk/

## OKEx Blockchain

Visit https://nft-login.github.io/nft-login-marketplace/okt/, login to your metamask and buy a token.

You can test you own this token by visiting https://nft-login.github.io/nft-login-demo/okt/ and login by signing the message with your account that owns the token.

## Heco Blockchain

Visit https://nft-login.github.io/nft-login-marketplace/heco/, login to your metamask and buy a token.
Also hosted on 4everland https://market.nft-login.net/ and https://nft-login-marketplace.4everland.app/ .

You can test you own this token by visiting https://nft-login.github.io/nft-login-demo/heco/ and login by signing the message with your account that owns the token. Alternatively you can test it on 4everland https://heco-nft-login-demo.4everland.app.

## Lisk Blockchain

See the video for the Lisk Blockchain here:
[![Lisk submission](https://img.youtube.com/vi/AIU80ymJ41c/0.jpg)](https://www.youtube.com/watch?v=AIU80ymJ41c)

We did not finish, as we struggled in the beginning.
We planned to host the blockchain in docker container, but we had problems to change the host which allows anyone to connect, not only localhost. Thanks to the community in discord that really helped to find the way to do it.
The documentation was good, which helped to understand how the framework works.
Nevertheless we could not finish. In the end in this video, you see our frontend hosted on github https://nft-login.github.io/nft-login-marketplace/lisk/?account=lsktrqzuehzhmh4senwdwz3bo2rtqenfuujegjveu&contract=http://localhost:8080/

and the backend hosted on localhost running in a container.
The backend is the nft-demo https://github.com/LiskHQ/lisk-sdk-examples/tree/development/tutorials/nft rewritten in typescript. We did not change much...

The frontend is lagging in functions and just shows the available tokens and the addresses that own ist.
The functionality for transfer the tokens will be built afterward.

Sources can be found: https://github.com/nft-login/lisk-nft-market

and here in the lisk branch https://github.com/nft-login/nft-login-marketplace/tree/lisk

Thanks again to the discord community of lisk.

## Notice

We also developed the project OIDC NFT Login which is independent but visible in the videos as we use it to demonstrate how nfts can be used.

## Built with

rust, web3, github-pages, react, solidity, heco, okex, metis, lisk-sdk
