#!/bin/sh

echo "Initializing genesis block"
geth init --datadir /root/.ethereum root/genesis.json

echo "Starting geth"

mv /root/signer /root/.ethereum/keystore/signer


exec geth --http --http.addr=0.0.0.0 --http.port=4242 --http.corsdomain=* --http.api=eth,net,web3,debug,personal --networkid=133742 --nat=any --nodiscover --datadir /root/.ethereum \
  --allow-insecure-unlock --unlock 0 --password /root/password.txt --mine --miner.etherbase 0x2d4f800ffa34ea25522544e3c912a77c9c070e1e 

#exec geth --dev --dev.period 5 --http --http.addr=0.0.0.0 --http.port=4242 --http.api "web3,eth,debug,personal,net" --http.corsdomain "*" --allow-insecure-unlock
