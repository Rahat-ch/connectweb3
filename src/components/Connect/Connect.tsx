import React, { FC, ButtonHTMLAttributes } from "react";
import { ethers } from "ethers";
import useState from "react";

//choose network
//metamask
//customise button styling
//customise button naming

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const [addi, setPublickey] = useState();
const [network, setNetwork] = useState();
const [chainId, setChainId] = useState();
const [msg, setMsg] = useState();
const avlNetwork = {
  137: {
    chainId: `0x${Number(137).toString(16)}`,
    rpcUrls: ["https://polygon-rpc.com"],
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  43114: {
    chainId: `0x${Number(43114).toString(16)}`,
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    chainName: "Avalanche C-Chain",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io/"],
  },
};

const connectButton = async () => {
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  if (ethereum.isMetaMask) {
    // const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await setPublickey(signer.getAddress());
    // await window.ethereum.request({
    //   method: "wallet_addEthereumChain",
    //   params: [avlNetwork[`${chainId}`]],
    // });
    // const { name, chainId } = await provider.getNetwork();
    // setNetwork(name);
    // setChainId(chainId);
    // setPublickey(accounts[0]);
  } else {
    setMsg("Install MetaMask");
  }
};

// const switchNetwork = async (chainId) => {
//   try {
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [avlNetwork[`${chainId}`]],
//     });
//     setNetwork(avlNetwork[`${chainId}`].chainName);
//     setChainId(chainId);
//   } catch (error) {
//     setMsg(error);
//   }
// };

const Connect: FC<ButtonProps> = ({ children, ...props }) => (
  <>
    <button {...props} onclick={connectButton}>
      {children}
    </button>

    {addi && <p>{addi}</p>}
  </>
);

export default Connect;
