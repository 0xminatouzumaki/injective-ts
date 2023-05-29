import {
  devnetChainInfo,
  localChainInfo,
  mainnetChainInfo,
  testnetChainInfo,
} from './chainInfos'
import {
  oldEndpointsMainnet,
  oldEndpointsLocal,
  oldEndpointsTestnet,
  oldEndpointsTestnetK8s,
  oldEndpointsTestnetOld,
  oldEndpointsPublic,
  oldEndpointsDevnet,
  oldEndpointsMainnetK8s,
  oldEndpointsMainnetLB,
  oldEndpointsStaging,
  oldEndpointsDevnet1,
  oldEndpointsDevnet2,
  oldEndpointsInternal,
} from './old-endpoints'
import {
  endpointsMainnet,
  endpointsLocal,
  endpointsTestnet,
  endpointsTestnetK8s,
  endpointsTestnetOld,
  endpointsPublic,
  endpointsDevnet,
  endpointsMainnetK8s,
  endpointsMainnetLB,
  endpointsStaging,
  endpointsDevnet1,
  endpointsDevnet2,
  endpointsInternal,
} from './endpoints'
import {
  ChainInfo,
  Network,
  OldNetworkEndpoints,
  NetworkEndpoints,
} from './types'

/**
 * @deprecated - use networkEndpoints
 */
export const oldNetworkEndpoints: Record<Network, OldNetworkEndpoints> = {
  [Network.MainnetK8s]: oldEndpointsMainnetK8s,
  [Network.MainnetLB]: oldEndpointsMainnetLB,
  [Network.Staging]: oldEndpointsStaging,
  [Network.Mainnet]: oldEndpointsMainnet,
  [Network.Public]: oldEndpointsPublic,
  [Network.Internal]: oldEndpointsInternal,
  [Network.Devnet]: oldEndpointsDevnet,
  [Network.Devnet1]: oldEndpointsDevnet1,
  [Network.Devnet2]: oldEndpointsDevnet2,
  [Network.Testnet]: oldEndpointsTestnet,
  [Network.TestnetK8s]: oldEndpointsTestnetK8s,
  [Network.TestnetOld]: oldEndpointsTestnetOld,
  [Network.Local]: oldEndpointsLocal,
}

export const networkEndpoints: Record<Network, NetworkEndpoints> = {
  [Network.MainnetLB]: endpointsMainnetLB,
  [Network.MainnetK8s]: endpointsMainnetK8s,
  [Network.Staging]: endpointsStaging,
  [Network.Mainnet]: endpointsMainnet,
  [Network.Public]: endpointsPublic,
  [Network.Internal]: endpointsInternal,
  [Network.Devnet]: endpointsDevnet,
  [Network.Devnet1]: endpointsDevnet1,
  [Network.Devnet2]: endpointsDevnet2,
  [Network.Testnet]: endpointsTestnet,
  [Network.TestnetK8s]: endpointsTestnetK8s,
  [Network.TestnetOld]: endpointsTestnetOld,
  [Network.Local]: endpointsLocal,
}

export const chainInfos: Record<Network, ChainInfo> = {
  [Network.MainnetLB]: mainnetChainInfo,
  [Network.MainnetK8s]: mainnetChainInfo,
  [Network.Staging]: mainnetChainInfo,
  [Network.Mainnet]: mainnetChainInfo,
  [Network.Public]: mainnetChainInfo,
  [Network.Internal]: mainnetChainInfo,
  [Network.Devnet]: devnetChainInfo,
  [Network.Devnet1]: devnetChainInfo,
  [Network.Devnet2]: devnetChainInfo,
  [Network.Testnet]: testnetChainInfo,
  [Network.TestnetOld]: testnetChainInfo,
  [Network.TestnetK8s]: testnetChainInfo,
  [Network.Local]: localChainInfo,
}

/**
 * @deprecated - use getNetworkEndpoints instead and adjust for the return type change
 * @param network de
 * @returns
 */
export const getEndpointsForNetwork = (network: Network): OldNetworkEndpoints =>
  oldNetworkEndpoints[network]

export const getNetworkEndpoints = (network: Network): NetworkEndpoints =>
  networkEndpoints[network]

/**
 * @deprecated - use getNetworkChainInfo instead
 * @param network de
 * @returns
 */
export const getChainInfoForNetwork = (network: Network): ChainInfo =>
  chainInfos[network]

export const getNetworkChainInfo = (network: Network): ChainInfo =>
  chainInfos[network]

export const getNetworkInfo = (
  network: Network,
): ChainInfo & OldNetworkEndpoints & NetworkEndpoints => ({
  ...chainInfos[network],
  ...oldNetworkEndpoints[network],
  ...networkEndpoints[network],
})

export const isMainnet = (network: Network) =>
  [
    Network.Public,
    Network.Staging,
    Network.Mainnet,
    Network.MainnetK8s,
    Network.Internal,
    Network.MainnetLB,
  ].includes(network)

export const isDevnet = (network: Network) =>
  [Network.Devnet, Network.Devnet1, Network.Devnet2, Network.Local].includes(
    network,
  )

export const isTestnet = (network: Network) =>
  [Network.Testnet, Network.TestnetOld, Network.TestnetK8s].includes(network)

export const isTestnetOrDevnet = (network: Network) =>
  isDevnet(network) || isTestnet(network)
