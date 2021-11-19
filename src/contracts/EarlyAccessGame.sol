// contracts/EarlyAccessGame.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Buyable.sol";

contract EarlyAccessGame is
    ERC721URIStorage,
    AccessControlEnumerable,
    ERC721Enumerable,
    Buyable
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        uint256 basePrice
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
        _basePrice = basePrice;
        _setupRole(MINTER_ROLE, _msgSender());
    }

    function _baseURI()
        internal
        view
        virtual
        override(ERC721)
        returns (string memory)
    {
        return _baseTokenURI;
    }

    function mintMultiple(address to, uint256 count) public virtual {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            "EarlyAccessGame: must have minter role to mint"
        );
        for (uint256 i = 0; i < count; i++) {
            mint(to);
        }
    }

    function mint(address to) public virtual {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            "EarlyAccessGame: must have minter role to mint"
        );
        _mint(to, _tokenIds.current());
        _tokenIds.increment();
    }

    function _mint(address to, uint256 tokenId)
        internal
        virtual
        override(Buyable, ERC721)
    {
        super._mint(to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControlEnumerable, ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721URIStorage, ERC721)
    {
        return super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721URIStorage, ERC721)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function baseURI() public view returns (string memory) {
        return _baseURI();
    }
}
