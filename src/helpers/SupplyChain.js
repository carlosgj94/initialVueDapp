import contract from 'truffle-contract'
var SupplyChain = require('../../build/contracts/SupplyChain.json')

const SupplyChainHelper = {
  contract: null,

  instance: null,

  address: null,

  // Events
  // GuessCreated: null,

  init: function() {
    let self = this

    return new Promise(function(resolve, reject) {
      self.contract = contract(SupplyChain)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract
        .deployed()
        .then(instance => {
          self.instance = instance

          // Getting the accounts
          window.web3.eth.getAccounts(function(error, accounts) {
            // Getting events
            // self.GuessCreated = self.instance.GuessCreated()
            if (error) {
              console.log(error)
            } else {
              self.address = accounts
              console.log(accounts)
              resolve()
            }
          })
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /*
  CreatedGuessEvent: function () {
    this.GuessCreated.watch(function (error, result) {
      if (!error) {
        console.log('No error on creating guess event catcher! See: ', result)
      } else {
        console.log(error)
      }
    })
  },*/

  getPackageStrings: async index => {
    let self = this

    await self.instance.getPackageStrings.call(index).then(box => {
      return [
        box[0], // package name
        box[1], // sender name
        box[2], // receiver name
        box[3], // origin address
        box[4] // final address
      ]
    })
  }

  /*
  voteGuess: function(_guessIndex, _option, ethAmount) { // Option has to be between 1 and 2
    let self = this

    ethAmount = 10 * (ethAmount / 10)
    return new Promise((resolve, reject) => {
      console.log(self.address[0])
      self.instance
        .voteGuess(
          _guessIndex,
          _option,
          {from: self.address[0],
            value: window.web3.utils.toWei(ethAmount.toString(), 'ether'),
            gas: 6385875} // TODO: Gas forced
        ).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
    })
  }
  */
}

export default SupplyChainHelper
