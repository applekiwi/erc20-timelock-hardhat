// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";

contract TimeLock is TokenTimelock {
    constructor(
        address tokenAddress,
        address beneficiaryAddress,
        uint256 releaseTimestamp
    )
        TokenTimelock(
            IERC20(tokenAddress),
            beneficiaryAddress,
            releaseTimestamp
        )
    {}
}
