const { ethers } = require("hardhat");

async function main() {
    const TimeLock = await ethers.getContractFactory("TimeLock");

    var tokenAddress = "";
    var beneficiaryAddress = "";
    var releaseTimestamp = "";

    const timeLock = await TimeLock.deploy(tokenAddress, beneficiaryAddress, releaseTimestamp);

    await timeLock.deployed();

    console.log("Contract deployed to:", timeLock.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
