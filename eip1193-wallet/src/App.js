import React, { useState } from 'react';
import useWallet from './wallet_script/useWallet';
import { Container, TextField, Button, Typography } from '@mui/material';

const App = () => {
  const { account, balance, getBalance, errorMessage } = useWallet(); // Ensure getBalance is included
  const [inputAddress, setInputAddress] = useState('');

  const handleAddressChange = (event) => {
    setInputAddress(event.target.value);
  };

  const handleCheckBalance = async () => {
    console.log("Checking balance for address:", inputAddress); // Debug log
    await getBalance(inputAddress); // Call getBalance with the input address
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4">Wallet Connection</Typography>
      {account && <Typography variant="h6">Connected Account: {account}</Typography>}
      <TextField
        label="Enter Address"
        variant="outlined"
        fullWidth
        value={inputAddress}
        onChange={handleAddressChange}
        style={{ margin: '1rem 0' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckBalance}
        style={{ marginBottom: '1rem' }}
      >
        Check Balance
      </Button>
      {balance !== null && (
        <Typography variant="h6">Balance: {balance} ETH</Typography>
      )}
      {errorMessage && (
        <Typography variant="h6" color="error">{errorMessage}</Typography> // Show error messages if any
      )}
    </Container>
  );
};

export default App;
