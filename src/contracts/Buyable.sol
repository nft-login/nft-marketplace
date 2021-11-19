// contracts/Buyable.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

abstract contract Buyable is ERC721 {
    mapping(uint256 => bool) private _forSale;
    mapping(uint256 => uint256) private _price;
    uint256 _basePrice;

    function buy(uint256 tokenId) public payable {
        require(msg.sender != address(0));
        require(_forSale[tokenId], "Buyable: token is not for sale");
        require(msg.value >= _price[tokenId]);
        address payable sendTo = payable(ownerOf(tokenId));
        sendTo.transfer(msg.value);
        _transfer(ownerOf(tokenId), _msgSender(), tokenId);
    }

    function setPrice(uint256 tokenId, uint256 price) public {
        require(
            ownerOf(tokenId) == _msgSender(),
            "Buyable: caller is not owner"
        );
        _price[tokenId] = price;
    }

    function priceOf(uint256 tokenId) public view returns (uint256) {
        return _price[tokenId];
    }

    function isForSale(uint256 tokenId) public view returns (bool) {
        return _forSale[tokenId];
    }

    function toggleForSale(uint256 tokenId) public {
        require(msg.sender != address(0));
        require(
            ownerOf(tokenId) == _msgSender(),
            "Buyable: caller is not owner"
        );
        if (_forSale[tokenId]) {
            _forSale[tokenId] = false;
        } else {
            _forSale[tokenId] = true;
        }
    }

    function _mint(address to, uint256 tokenId) internal virtual override(ERC721) {
        _forSale[tokenId] = true;
        _price[tokenId] = _basePrice;
        super._mint(to, tokenId);
    }
}
