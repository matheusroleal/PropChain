# PropChain
A file vote service using ethereum

## How it Works
This is a file vote service using ethereum network. By using this service, you will be able to vote proposals sent as files. In order to maintain data imutability, we store the data in a WORM database. Write once read many (WORM) describes a data storage device in which information, once written, cannot be modified. This write protection affords the assurance that the data cannot be tampered with once it is written to the device. On ordinary (non-WORM) data storage devices, the number of times data can be modified is limited only by the lifespan of the device, as modification involves physical changes that may cause wear to the device. The "read many" aspect is unremarkable, as modern storage devices permit unlimited reading of data once written. In this website you can create, list and show the data store in a proposal.

Using this project you will be able to:

Create a file proposal
---
Vote for proposals
---
List existing proposals
---
View the winner

## Using Web3 JS
In order to use the maximum of this project, you need a bridge that allows you to visit the distributed web of tomorrow in your browser today. This will allow you to run Ethereum dApps right in your browser without running a full Ethereum node. Please install [Metamask](https://github.com/MetaMask/metamask-extension) or other bridge provider.

## Run Locally
1) install Docker and Docker Compose
[Install Compose and Docker](https://docs.docker.com/compose/install/)
2) Run Docker Compose
```
make up
```
