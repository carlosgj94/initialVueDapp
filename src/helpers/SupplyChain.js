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
          console.log(self.instance)

          // Getting the accounts
          window.web3.eth.getAccounts(function(error, accounts) {
            if (error) {
              console.log(error)
            } else {
              self.address = accounts
              console.log(accounts)
              resolve(instance)
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

  getPackageStrings: async (index, instance) => {
    await instance.getPackageStrings.call(index).then(box => {
      return [
        box[0], // package name
        box[1], // sender name
        box[2], // receiver name
        box[3], // origin address
        box[4] // final address
      ]
    })
  },

  getPackageData: async (index, instance) => {
    await instance.getPackageData.call(index).then(box => {
      return [
        box[0], // sender address
        box[1], // receiver address
        box[2] // transporters address
      ]
    })
  },

  createPackage: async (
    instance,
    packageName,
    senderName,
    receiverName,
    originAddress,
    finalAddress,
    receiver
  ) => {
    console.log('Inside')
    instance
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

  addTransporter: async (instance, box, position) => {
    await instance.addTransporter(box, position).then(box => {
      return box
    })
  }
}

export default SupplyChainHelper
