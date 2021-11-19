const { assert } = require("chai");

const EarlyAccessGame = artifacts.require("./EarlyAccessGame.sol");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("Early Access Game", async (accounts) => {
  let earlyAccessGame, result, earlyAccessGameCount;

  before(async () => {
    earlyAccessGame = await EarlyAccessGame.deployed(
      "EarlyAccessGame",
      "EAG",
      "https://example.com/",
      web3.utils.toWei("1", "Ether")
    );
  });

  describe("Deployment", async () => {
    it("contract has an address", async () => {
      const address = await earlyAccessGame.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await earlyAccessGame.name();
      assert.equal(name, "EarlyAccessGame");
    });

    it("has a symbol", async () => {
      const symbol = await earlyAccessGame.symbol();
      assert.equal(symbol, "EAG");
    });
  });

  describe("application features", async () => {
    it("does not allow any users to mint ERC721 token", async () => {
      earlyAccessGameCount = await earlyAccessGame.totalSupply();
      assert.equal(earlyAccessGameCount.toNumber(), 0);
      await earlyAccessGame
        .tokenByIndex(1, { from: accounts[0] })
        .then(assert.fail)
        .catch((error) => {
          assert.include(error.message, "global index out of bounds");
        });

      await earlyAccessGame
        .mint(accounts[2], { from: accounts[2] })
        .then(assert.fail)
        .catch((error) => {
          assert.include(error.message, "must have minter role to mint");
        });
      assert(await earlyAccessGame.mint(accounts[2], { from: accounts[0] }));

      earlyAccessGameCount = await earlyAccessGame.totalSupply();
      assert.equal(earlyAccessGameCount.toNumber(), 1);
      assert.equal(
        await earlyAccessGame.ownerOf(0, { from: accounts[2] }),
        accounts[2]
      );
    });

    it("allows users to get uri of token", async () => {
      assert.equal(
        await earlyAccessGame.tokenURI(0, { from: accounts[2] }),
        "https://example.com/0"
      );
    });

    it("allows users to buy token", async () => {
      assert.equal(await earlyAccessGame.isForSale(0), true);
      await earlyAccessGame
        .toggleForSale(0, { from: accounts[3] })
        .then(assert.fail)
        .catch((error) => {
          assert.include(error.message, "caller is not owner");
        });
      await earlyAccessGame.buy(0, {
        from: accounts[3],
        value: web3.utils.toWei("0.0001", "Ether"),
      }).should.be.rejected;
      await earlyAccessGame.buy(0, {
        from: accounts[3],
        value: web3.utils.toWei("0.01", "Ether"),
      });

      await earlyAccessGame.toggleForSale(0, { from: accounts[3] });
      assert.equal(await earlyAccessGame.isForSale(0), false);

      await earlyAccessGame.toggleForSale(94, { from: accounts[2] }).should.be
        .rejected;
    });

    it("allows users to change token price", async () => {
      await earlyAccessGame.toggleForSale(0, { from: accounts[3] });
      assert.equal(await earlyAccessGame.isForSale(0), true);

      await earlyAccessGame
        .setPrice(0, web3.utils.toWei("2", "Ether"), { from: accounts[2] })
        .then(assert.fail)
        .catch((error) => {
          assert.include(error.message, "caller is not owner");
        });
      assert.equal(
        web3.utils.fromWei(await earlyAccessGame.priceOf(0), "ether"),
        0.001
      );
      await earlyAccessGame.setPrice(0, web3.utils.toWei("2", "Ether"), {
        from: accounts[3],
      });

      assert.equal(
        web3.utils.fromWei(await earlyAccessGame.priceOf(0), "ether"),
        2
      );
    });

    it("allows users to mint batch token", async () => {
      await earlyAccessGame.mintMultiple(accounts[0], 5, { from: accounts[0] });
      earlyAccessGameCount = await earlyAccessGame.totalSupply();
      assert.equal(earlyAccessGameCount.toNumber(), 6);
    });
  });
});
