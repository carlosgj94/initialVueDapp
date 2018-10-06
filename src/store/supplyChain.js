import web3 from '~/plugins/web3'
import SupplyChain from '../../build/contracts/SupplyChain'
// import web3Abi from 'web3-eth-abi'

// PI CAMBIA ESTO TODO EL PUTO RATO
const tokenAddress = '0xe34ed11c2a7af66de5f04ac333feeacee57f67be' // insert deployed EIP20 token address here
const sp = new web3.eth.Contract(SupplyChain.abi, tokenAddress)

let account
web3.eth.getAccounts().then(res => {
  account = res[0]
})

export const state = () => ({})

export const mutations = {}

export const actions = {
  getAccount() {
    return account
  },
  getPackageStrings(context, params) {
    return sp.methods
      .getPackageStrings(params.index)
      .call({ from: account, to: tokenAddress })
  },
  getPackageData(context, params) {
    return sp.methods
      .getPackageData(params.index)
      .call({ from: account, to: tokenAddress })
  },
  callCreatePackage(context, params) {
    const receipt = sp.methods
      .createPackage(
        params.packageName,
        params.senderName,
        params.receiverName,
        params.originAddress,
        params.finalAddress,
        params.receiver
      )
      .call({ from: account, to: tokenAddress })
    return receipt
  },
  async transfer(context, params) {
    const receipt = await sp.methods.createPackage(
      params.packageName,
      params.senderName,
      params.receiverName,
      params.originAddress,
      params.finalAddress,
      params.receiver
    )
    await receipt.send({ from: account, to: tokenAddress })
    console.log(receipt)

    return receipt
  },

  async addTransporter(context, params) {
    const receipt = await sp.methods.addTransporter(
      params.packageNum, // The number of the package
      params.position // The position in the array for the new transporter
    )
    await receipt.send({ from: account, to: tokenAddress })
    console.log(receipt)

    return receipt
  }
}

export const getters = {}
