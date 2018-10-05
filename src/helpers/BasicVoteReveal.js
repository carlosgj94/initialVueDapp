import contract from 'truffle-contract'
import BasicVoteReveal from '@contracts/BasicVoteReveal.json'

const BasicVoteRevealHelper = {
  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(GuesserCore)

      self.contract.setProvider(window.web3.currentProvider)
      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
},
