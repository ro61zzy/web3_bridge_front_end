import { useState, useEffect } from "react";
import { ethers } from "ethers"; 


const getAccountBalance = async (account) => {
  try {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });
    return ethers.formatEther(balance); 
  } catch (error) {
    console.error("Failed to get account balance:", error);
    return null;
  }
};

const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [network, setNetwork] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        const accountBalance = await getAccountBalance(accounts[0]);
        setBalance(accountBalance);
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setNetwork(parseInt(chainId, 16)); 

       
        window.ethereum.on('accountsChanged', async (accounts) => {
          setAccount(accounts[0]);
          const accountBalance = await getAccountBalance(accounts[0]);
          setBalance(accountBalance);
        });

        window.ethereum.on('chainChanged', async (chainId) => {
          setNetwork(parseInt(chainId, 16)); 
        });
      } catch (error) {
        setErrorMessage(error.message);
        console.error("Wallet connection error:", error);
      }
    } else {
      console.error("Please install MetaMask!");
      setErrorMessage("Please install MetaMask!");
    }
  };

  useEffect(() => {
    checkWalletConnection();

    return () => {
      window.ethereum.removeListener('accountsChanged', () => {});
      window.ethereum.removeListener('chainChanged', () => {});
    };
  }, []);

  return { account, balance, network, errorMessage };
};

export default useWallet;
