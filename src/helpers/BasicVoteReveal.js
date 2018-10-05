import contract from 'truffle-contract'
import BasicVoteReveal from '@contracts/BasicVoteReveal.json'

const GuessHelper = {
  contract: null,

  instance: null,

  address: null,

  // Events
  // GuessCreated: null,

  init: function() {
    let self = this

    return new Promise(function(resolve, reject) {
      self.contract = contract(BasicVoteReveal)
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

  getPollStrings: async (index) => {
    let self = this

    await self.instance.getGuess
      .call(index)
      .then(guess => {
        resolve([
          guess[0], // title
          guess[1], // description
          window.web3.utils.hexToUtf8(guess[2]), // topic
          guess[3], // creator
          new Date(guess[4].c[0] * 1000), // the day it started
          new Date(guess[5].c[0] * 1000) // the final date
        ])
      })
  })
},

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
}

export default GuessHelper
