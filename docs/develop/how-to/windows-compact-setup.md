---
title: Setting Up Your High-Performance Midnight Development Environment on Windows
sidebar_label: Windows Environment Setup
description: A comprehensive guide to setting up WSL, Docker, and the Lace wallet for Midnight development on Windows.
---

This comprehensive guide shows you how to establish a robust, fully functional Windows development environment specifically tailored for building decentralized applications (DApps) on the Midnight Network. We will walk you through the essential setup steps, including the installation and configuration of the Windows Subsystem for Linux (WSL), Docker Desktop, and the Midnight Lace wallet.
By the time you complete this expanded tutorial, you will have a production-ready environment capable of receiving essential Testnet tokens (tDUST), running the core Midnight Dev proof server, and seamlessly interacting with the Midnight Testnet. Adhering to these detailed steps ensures your development workflow is optimized and aligned with best practices for efficient and secure development on Midnight.


**1. Install and Configure the Windows Subsystem for Linux (WSL)**
Developing DApps for the Midnight network often requires compiling and running various components (like the proof server or complex scripts) that are traditionally Linux-based. The Windows Subsystem for Linux (WSL) is a critical component that allows you to run a native Linux environment directly within Windows without the overhead of a traditional virtual machine.
Step-by-Step Installation:

Open the Start Menu on your Windows desktop.


Search for Windows PowerShell (or Command Prompt) and right-click on the result. Select "Run as administrator." This elevation is necessary to install system-level features like WSL.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azunze475qiad8qvnmea.png)

In the command terminal, enter the following streamlined installation command:

```
Bash

wsl --install -d ubuntu
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/udzzpfa7fmvnkerruifw.png)

This command performs three primary functions automatically:
It enables the required Windows features for WSL (Virtual Machine Platform and Windows Subsystem for Linux).
It downloads and installs the recommended Ubuntu distribution (the default and most widely supported Linux environment).

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/15y290h3vgsdliqmbc69.png)

It restarts the necessary services.

**Note on Patience:** The initial download and installation of the required components and the Ubuntu image can take anywhere from 5 to 15 minutes, depending on your internet connection and system speed. Do not close the window until the process is complete.

After the installation is finished, a new Ubuntu terminal window will open automatically. You will be prompted to create a UNIX Username and a Password.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ea6re5ha4k6d8z56cerz.png)

**Crucially:** When entering your password, the characters will not be displayed on the screen for security reasons (this is standard Linux terminal behavior). Type your desired password carefully and press Enter. You must type the password a second time to confirm.

Once successfully configured, your new username will be displayed as part of your terminal prompt (e.g., yourusername@DESKTOP-XXXXXX:~$). 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mj4xgis8a9jpgjth6gc5.png)

This confirms that WSL is correctly installed and the Ubuntu distribution is ready for use.

**Verification and Best Practices:**
To ensure WSL is running the correct version, you can execute this command in the Windows PowerShell:

```
Bash
wsl -l -v
```
You should see a list showing Ubuntu and confirming its STATE is Running (or Stopped) and its VERSION is 2 (WSL 2 is required for optimal performance and Docker integration).

**2. Install and Configure Docker Desktop**
Docker is indispensable for Midnight development because the core components, particularly the Midnight Proof Server, are distributed as Docker images. Docker containers provide an isolated, consistent environment, ensuring the proof server runs exactly the same way regardless of your local system configuration.

**Installation Process:**
Open your preferred web browser and navigate to the official Docker website at docker.com/products/docker-desktop.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbyf3h7vt6seaff0yuma.png)

Look for the Docker Desktop for Windows download link. Ensure you download the installer that matches your CPU architecture (typically Windows - AMD64 for modern systems).
Run the downloaded installer (Docker Desktop Installer.exe). During the installation, make sure the box for "Install required Windows components for WSL 2" is checked. This is vital for Docker to integrate seamlessly with the Linux environment you just set up.
Follow the prompts to complete the installation. A system restart may be required.
After the reboot, launch Docker Desktop from your Start Menu. It will take a few moments to start up, showing the whale icon in your system tray.

**Verification and Integration:**
Once Docker Desktop is running, open the Settings menu within Docker Desktop (the gear icon).
Navigate to the Resources > WSL Integration tab.
Ensure that the "Enable integration with my default WSL distro" option is toggled ON, and specifically verify that your Ubuntu distribution is enabled. This connection allows Docker to manage containers directly from your Linux terminal later in Section 6.

**3. Install and Load the Midnight Lace Wallet**
The Lace wallet is the primary interface for users and developers to interact with the Midnight Testnet. It allows you to manage your Testnet tokens (tDUST) and authorize transactions. Since Midnight is currently in its Testnet phase, the Lace wallet is installed as a developer extension in your Chrome browser.

**Detailed Wallet Installation:**
Open the official Midnight documentation in your browser. The direct link to the releases is often used for the latest developer versions: [docs.midnight.network/relnodes/overview](Midnight Documentation)

On the "Releases" page that appears, locate and navigate down to the section dedicated to the Midnight Lace wallet.
Click the appropriate link to download the latest .zip file containing the wallet extension files.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/85eqzu0mme172qlipiga.png)

On your PC, create a new, dedicated folder. Name it clearly, such as C:\MidnightDev\Lace Wallet.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i514vgh6eesjibfgo72c.png)

Extract the entire contents of the downloaded Midnight Lace wallet .zip file into this newly created folder. The folder must contain the actual extension files (manifest.json, etc.), not just another folder with the zip file's name.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rmrebkrbyu1aj8ops0k7.png)

**Critical Note:** This folder acts as the source code for the extension. Do not move, rename, or delete this folder after installation, as Chrome relies on this fixed location to run the extension.

**Loading the Extension into Chrome:**
Open your Chrome browser.
Click the three-dot menu (⋮) in the top-right corner.
Hover over "Extensions" and select "Manage extensions."

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsjc41n85mw53pw9dvp4.png)

In the top-right corner of the Extensions page, toggle the "Developer mode" switch to ON. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ebgaoscri6enlgzxqnav.png)

This exposes the necessary tools for loading unpackaged extensions.
Click the new "Load unpacked" button that appears on the top-left.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4kjd386s9ew6k0gtsnxh.png)

A file browser window will pop up. Navigate to and select the folder you created in Step 4 (e.g., C:\MidnightDev\Lace Wallet). Do not open the folder, just select it.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k81nikapwtrwsg4890tr.png)

If successful, the Midnight Lace wallet icon will appear in your extension panel. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x2fgdpuhao5fkxn35pra.png)

Click the puzzle piece icon (Extensions) in the top-right corner and pin the Lace wallet for easy access.

**4. Setting Up and Securing the Lace Wallet**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vcz76d3b3dtfv618aieh.png)

The first time you open the Lace wallet, you must complete a critical setup process to initialize your Testnet identity.
**Wallet Initialization:**
Click on the newly pinned Lace wallet icon. A pop-up will appear.
Carefully read through the Terms and Conditions pop-up and click "Accept" when you are ready to proceed.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/49o2e4k0fhwyt2t5dq7k.png)

On the next screen, enter a descriptive name for your wallet (e.g., "Midnight Dev Wallet").

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ca3x79od013jjyszxhft.png)

Create a strong password. The Lace wallet enforces security requirements, so choose a combination of upper/lowercase letters, numbers, and symbols. This password is required to unlock your wallet every session.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9q49h20shn84b23wdaqv.png)

After the initial setup, you will see the wallet dashboard. Verify that the network setting in the wallet is set to "Testnet." Take note of the initial AMP (Asset Minting Point) balance displayed.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y9ijwp1qxuugepxeya4q.png)

**Recovery Phrase and Security:**
Lace will now present you with a 16-word recovery phrase. This phrase is the ultimate backup for your wallet. Write these words down immediately on a physical piece of paper, noting the exact order. Never store them digitally.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/boqugm88z0h803yl7xqn.png)

Lace will then ask you to confirm a few specific words (e.g., "What was the 5th word?") to ensure you correctly recorded the phrase.

**Security Context:** While this wallet is purely for the Testnet (meaning the tokens have no real-world value), this step is a vital training exercise. It establishes the discipline of securely handling recovery phrases, which is paramount when Midnight transitions to the mainnet and the tokens acquire monetary value.
Once the setup is complete, you will see your wallet address (a long string of characters). Copy this Lace wallet address immediately, as the next step requires it to acquire Testnet tokens.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k1sx8u5ep72xkxj7ltbl.png)

**5. Acquiring tDUST from the Midnight Testnet Faucet**
tDUST (Testnet DUST) is the utility token of the Midnight Testnet. Just like gas on other networks, you need a small amount of tDUST to pay for transaction fees and interact with the Midnight Proof Server and any deployed DApps.

**Faucet Interaction Steps:**
Open the Midnight developer documentation.
Navigate through the tutorials structure to find the token acquisition guide: "Developer Documentation Tutorial" > "Tutorial 1.2 Token acquisition".
Click the direct link provided within that section that leads to the Midnight Testnet Faucet website.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xusl4yw84qq3iqkpqbkn.png)

On the faucet page, paste your copied Lace wallet address into the provided text field.
Select the "Request token" button.
The system will begin processing your request to dispense the tokens. You will initially see an acknowledgment that your transaction has been submitted.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t5zcsx57jd7e73z2oedt.png)

Network Consideration: The time it takes to receive the tDUST can vary significantly. Depending on the current load and activity of the Testnet faucet, this process may take two minutes or longer. Be patient and do not resubmit the request multiple times.
If the transaction is successful, a final green acknowledgment will display, confirming the transaction and indicating that you have been sent 1000 tDUST.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h6vkygpem3px4o0vnztb.png)

Immediately head to your Midnight Lace wallet and check your balance. The 1000 tDUST should appear, confirming you are ready to interact with the Testnet.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e24qy4x92wi7za2ga2i7.png)

**6. Set up and Run the Midnight Proof Server with Docker**
The Midnight Proof Server is the core component that your DApps will communicate with to execute zero-knowledge proofs and transactions. It is run via Docker for consistency. The final, critical step is to download the server image and run it, ensuring it correctly targets the Midnight Testnet.

**Downloading the Docker Image:**
Open your Docker Desktop application.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylagdt2xu3tvyzt3qvr2.png)

Navigate to the "Explore" section (or the search field if available).
Insert the official repository name: midnightnetwork (no spaces).

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh4zbv0a1d589lelj8wq.png)

Select the first official result that corresponds to the proof server image.
Click "Pull" (or the download icon) beside the proof server image to automatically download the latest version from the repository.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q73g1rr3mq7j80u0rol1.png)

After the download is complete, click on "Images" on the left-hand navigation menu within Docker Desktop. You should see the midnightnetwork/proof-server image listed.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pmmocxc6tumxqr7k4801.png)

**Running and Configuring for Testnet:**
When you click "Run" within Docker Desktop, the proof server starts, but it defaults to targeting an undeployed (local, private) network configuration.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ad1i9c6a20o2c064twr3.png)

To make it useful for development, we must explicitly configure it to connect to the Midnight Testnet.
Return to the Midnight Developer documentation.
Navigate to the relevant tutorial: "Midnight Developer Tutorial" > "Tutorial 1.3 Proof Server".
Scroll down to the "Start the proof server" sub-section. The documentation provides a specific command optimized for connecting to the Testnet. Copy this exact command. It will look similar to a standard docker run command but with specific environment flags attached.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ge5pdrj0vfb05r4dxn7.png)

Open Windows PowerShell (or your WSL terminal, if preferred).
Paste the command you copied in the previous step and press Enter.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2az3h2i0nv57mfmohfd7.png)

This command will instruct Docker to launch the proof server container, map the necessary ports, and most importantly, set the environment variables that force it to target the public Midnight Testnet nodes.

## **Conclusion**
Congratulations! You have successfully established a complete, robust Midnight development environment on your Windows machine, incorporating WSL, Docker, and the Lace wallet.
You have completed the essential first step toward building your own privacy-preserving, zero-knowledge DApps on the Midnight Network. Your environment is now ready to compile contracts, generate zero-knowledge proofs, and interact with the live Testnet using your newly acquired tDUST.
