import web3 from '~/plugins/web3'
import SupplyChain from '../../build/contracts/SupplyChain'
// import web3Abi from 'web3-eth-abi'

// PI CAMBIA ESTO TODO EL PUTO RATO
const tokenAddress = '0x0aff4b5f48caf616f7f72680dcbcd5c897b2326b' // insert deployed EIP20 token address here
const sp = new web3.eth.Contract(SupplyChain.abi, tokenAddress)

let account
web3.eth.getAccounts().then(res => {
  account = res[0]
})

export const state = () => ({})

export const mutations = {}

export const actions = {
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
    /*
    const createPackageMethod = sp.abi.find(method => {
      return method.name === 'createPackage'
    })

    const transferMethodTransactionData = web3Abi.encodeFunctionCall(
      createPackageMethod,
      [
        params.packageName,
        params.senderName,
        params.receiverName,
        params.originAddress,
        params.finalAddress,
        params.receiver
      ]
    )

    const estimateGas = await web3.eth.estimateGas({
      from: account,
      to: tokenAddress,
      data: transferMethodTransactionData
    })

    const receipt = await web3.eth.sendTransaction({
      from: account,
      to: tokenAddress,
      data: transferMethodTransactionData,
      value: 0,
      gas: estimateGas
    })
    */

    return receipt
  }
}

export const getters = {}
