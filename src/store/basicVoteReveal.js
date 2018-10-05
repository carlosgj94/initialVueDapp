import web3 from '~/plugins/web3'
import BasicVoteReveal from '../../build/contracts/BasicVoteReveal'
import web3Abi from 'web3-eth-abi'

const pollsAddress = '0xCccCAd506B6445C9eD85A6E53207880f5d23f350' // insert deployed EIP20 token address here
const bvr = new web3.eth.Contract(BasicVoteReveal.abi, tokenAddress)
const instance = bvr.deployed();

let account
web3.eth.getAccounts().then(res => {
  account = res[0]
})

export const state = () => ({})

export const mutations = {}

export const actions = {
  getName() {
    return bvr.methods.name().call({ from: account })
  },
}

export const getters = {}
