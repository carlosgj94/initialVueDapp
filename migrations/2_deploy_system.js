const BasicVoteReveal = artifacts.require('./BasicVoteReveal.sol')

module.exports = deployer => {
  deployer.deploy(BasicVoteReveal)
}
