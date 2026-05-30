# Introduction to Midnight

Midnight is a privacy-preserving blockchain platform that allows developers to build decentralized applications where sensitive data stays private by default, while still enabling verifiable, trustworthy interactions on-chain.

---

## What is Midnight?

Midnight is built on the principle of **rational privacy** — the idea that users should be able to control exactly what they share, with whom, and when. Unlike fully transparent blockchains where all transaction data is publicly visible, Midnight allows developers to build applications that:

- Keep sensitive user data private by default
- Use zero-knowledge proofs to verify claims without revealing underlying data
- Apply **selective disclosure** to share only the minimum required information
- Remain compliant with regulatory requirements while still protecting user privacy

Midnight is developed by IOG (Input Output Global) and is designed to support the next wave of real-world blockchain adoption.

---

## Why Privacy Matters in Blockchain

Public blockchains are transparent by design. Every transaction, balance, and interaction is visible to anyone. While this transparency builds trust, it creates serious problems for real-world applications:

- Financial data becomes publicly readable
- Identity and personal information can be exposed
- Businesses cannot operate on-chain without revealing competitive data
- Compliance with privacy regulations like GDPR becomes extremely difficult

Midnight solves this by making privacy a first-class feature of the platform, not an afterthought.

---

## How Selective Disclosure Works

Selective disclosure is at the core of how Midnight handles privacy. Instead of revealing all data or hiding everything, Midnight lets users and applications prove specific facts without exposing the underlying details.

For example:

- A user can prove they are above a minimum age without revealing their exact date of birth
- A borrower can prove creditworthiness without revealing income or debt details
- A business can prove compliance without exposing internal records

This is powered by **zero-knowledge proofs (ZKPs)**, a cryptographic technique that lets one party prove knowledge of a value without revealing the value itself.

---

## Key Concepts

| Concept | Description |
|---|---|
| Selective Disclosure | Share only the minimum required information for verification |
| Zero-Knowledge Proofs | Prove a statement is true without revealing the underlying data |
| Private State | On-chain data that remains encrypted and visible only to authorized parties |
| Public State | On-chain data that is visible to everyone, used for transparent interactions |
| Compact | Midnight's smart contract language for writing privacy-preserving contracts |

---

## Getting Started as a Developer

If you are new to Midnight, the best way to start is to:

1. Read through the [Midnight Developer Documentation](https://docs.midnight.network) to understand the core concepts
2. Install the [Midnight SDK](https://docs.midnight.network/sdks) and set up your local development environment
3. Follow the [Midnight Academy](https://academy.midnight.network) structured learning pathway for hands-on tutorials
4. Try building a simple example application using the bulletin board example in the official repos
5. Join the [Midnight Discord](https://discord.gg/midnight) to connect with the developer community

---

## Who is Midnight For?

Midnight is designed for:

- **Web3 developers** who want to build applications that handle sensitive data responsibly
- **Enterprise builders** who need privacy and compliance built into their blockchain applications
- **DeFi and fintech builders** working on lending, credit, identity, or payments
- **AI and agent builders** who need privacy-preserving verification flows for autonomous systems

---

## Next Steps

Once you are familiar with the introduction, explore the following sections of this documentation:

- **Concepts** — Deep dive into Midnight's privacy model and architecture
- **Tutorials** — Step-by-step guides to building your first Midnight application
- **SDK Reference** — Full API documentation for the Midnight SDK
- **Compact Language** — Learn how to write smart contracts for Midnight
