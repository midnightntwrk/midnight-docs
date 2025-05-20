---
slug: connect-dapp-lace-wallet
title: How to connect a dapp to the Lace wallet?
authors: claude
tags: [dapp, wallet, midnight.js]
---

# How to Connect a dApp to the Midnight Network Using the Lace Wallet

> Note that this blog post follows MidnightJS version 1.0.0; the steps described here may change in future versions.

As the Midnight blockchain, a network focused on data protection gains momentum, developers building decentralized applications (dApps) need secure and user-friendly ways to connect users to the network to interact with it.  

The [Lace wallet for Midnight](https://docs.midnight.network/relnotes/lace), a special edition of the Lace wallet for Cardano developed by the Midnight team and created to work on Midnight, makes this process seamless by injecting a secure interface directly into the browser window.  

> Note: the use of a special wallet to interact with Midnight is only a temporary solution. In the future, Midnight will be integrated directly into the Lace wallet.

In this post, we’ll walk through the exact steps required to detect, connect, and interact with the Lace wallet, unlocking the Midnight network for your dApp.

## 🧭 Step 1: Detect the Lace Wallet
The Lace wallet injects an instance of the [DappConnectorApi](https://docs.midnight.network/develop/reference/midnight-api/dapp-connector/) into the global `window` object under `window.midnight.mnLace`. The Dapp Connector API gives you access to various properties and methods that you can use to build interactions between the dapp and the wallet, as well as to read information from the wallet (like the user's address).  

The very first step is to check for its existence:
```ts
if (window.midnight && window.midnight.mnLace) {
  const mnLace = window.midnight.mnLace;
  // Proceed with next steps
}
```
If this object is not present, you can guide the user to install the wallet by linking to the official download page: https://docs.midnight.network/relnotes/lace

## 🔒 Step 2: Check if the Wallet is Authorized
Before interacting with the wallet, you need to check whether the user has already granted your dApp permission to access their wallet:
```ts
const isEnabled = await mnLace.isEnabled();
```
If isEnabled is `true`, your dApp is already authorized and can proceed to access wallet features. If not, you’ll need to explicitly request access (next step).

## ✅ Step 3: Request Access (Enable)
If the user hasn’t yet authorized the dApp, prompt them to connect by calling:
```ts
const walletApi = await mnLace.enable();
```
This will trigger a UI popup from the Lace wallet asking the user to approve the connection. Once approved, they gain access to a full wallet API interface.
> Note: it is generally consider best practice to have the user interact with the interface to approve the wallet instead of having a popup window opens when the app is loading.

## 🧾 Step 4: Fetch the User’s Address
Once connected, you can query the wallet for user details using the `state()` method provided by the walletApi:
```ts
const state = await walletApi.state();
const userAddress = state.address;
```

This gives you the user's Midnight network address, which you can use for different things, for example, to display in your UI.

## 🔧 Step 5: Get Service Configuration (Optional)
The wallet also exposes additional configuration metadata, such as [service endpoints](https://docs.midnight.network/develop/reference/midnight-api/dapp-connector/interfaces/ServiceUriConfig). You can fetch these like so:
```ts
const config = await mnLace.serviceUriConfig();
```
It will return an object with the URL for the node, the indexer and the proof server the wallet is currently connected to.

This can be useful if your dApp integrates with specific Midnight services or APIs that depend on the current environment, for example, if you need the address of the proof server to prove transactions.

## 💡 Example Flow
Here’s a simplified flow of what your connection logic might look like in plain JavaScript:
```ts
async function connectToMidnight() {
    if (window.midnight && window.midnight.mnLace) {
        const mnLace = window.midnight.mnLace;
        const walletApi = await mnLace.isEnabled();

        const state = await walletApi.state();
        console.log("User address:", state.address);

        const config = await mnLace.serviceUriConfig();
        console.log("Service config:", config);
    } else {
        alert("Please install the Lace wallet to connect to Midnight.");
    }
}
```

Here’s a quick checklist of what the above code snippet does to connect to Midnight via the Lace wallet:
1. Detect the `window.midnight.mnLace` object.
2. Check authorization with `isEnabled()`.
3. Request access using `enable()` if not already authorized.
4. Retrieve user info like the Midnight address using state().
5. Optionally fetch service config for advanced usage.

With these simple but secure steps, your dApp will be fully connected to the Midnight blockchain using the Lace wallet, giving users a seamless and private experience right in their browser.

## 🧠 Conclusion
Integrating the Lace wallet into your dApp for the Midnight network is a straightforward process that prioritizes both security and user experience.  
By following the steps outlined—detecting the wallet’s presence, verifying authorization, requesting access, and retrieving user data—you can seamlessly connect users to the Midnight blockchain while maintaining privacy and reliability.  
The temporary reliance on a dedicated Lace wallet edition ensures compatibility today, but developers should remain aware of future updates that may simplify this process further.  
As Midnight evolves, adhering to these guidelines will keep your dApp aligned with the network’s standards, empowering users to interact securely with your application. Always reference [the official documentation](https://docs.midnight.network/) for the latest API changes and best practices to ensure your implementation stays up-to-date.
