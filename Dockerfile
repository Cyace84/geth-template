FROM ethereum/client-go:latest

COPY signer /root/signer

COPY password.txt /root/password.txt

COPY genesis.json /root/genesis.json
COPY scripts/init_genesis.sh /root/init_genesis.sh
RUN chmod +x /root/init_genesis.sh

ENTRYPOINT ["/root/init_genesis.sh"]
