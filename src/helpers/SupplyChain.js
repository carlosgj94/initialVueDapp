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
  },

  getPackageData: async index => {
    let self = this

    await self.instance.getPackageData.call(index).then(box => {
      return [
        box[0], // sender address
        box[1], // receiver address
        box[2] // transporters address
      ]
    })
  },

  createPackage: async (
    packageName,
    senderName,
    receiverName,
    originAddress,
    finalAddress,
    receiver
  ) => {
    let self = this

    await self.instance
      .createPackage(
        packageName,
        senderName,
        receiverName,
        originAddress,
        finalAddress,
        receiver
      )
      .then(box => {
        return box
      })
  },

  addTransporter: async (box, position) => {
    let self = this

    await self.instance.addTransporter(box, position).then(box => {
      return box
    })
  }
}

export default SupplyChainHelper
