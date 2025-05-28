---
slug: midnight-indexer
title: Introducing the Midnight Indexer
authors: devrel
tags: [indexer]
keywords: ["Midnight", "Indexer", "Rust"]
---

We’re excited to announce the release of the new [Midnight Indexer](https://docs.midnight.network/relnotes/midnight-indexer) — a modular, high-performance indexing service designed to optimize how blockchain data flows from a Midnight node to end-user applications. It retrieves block history, processes data, and makes it available through a flexible GraphQL API supporting queries, mutations, and real-time subscriptions.

<!--truncate-->

This new Indexer is written in Rust and is intended to replace the legacy Scala-based Indexer in the future. It offers significantly improved performance, easier deployments across local and cloud environments, and deep wallet integration. Midnight Indexer supports both PostgreSQL and SQLite.

## Key Improvements Over the Legacy Indexer

🦀 Rewritten in Rust for improved speed, reliability, and maintainability

🧱 Modular architecture, replacing the monolithic Scala pub-sub design

🤝 Deep integration with latest wallet tooling (SDK v4+ and Lace Wallet v2.0.0+)

🌐 Flexible GraphQL API with subscription support for real-time updates

If you're building on Midnight, now’s the time to begin testing integrations and preparing for migration. The Scala-based Pub-Sub Indexer remains functional for now but is officially deprecated and will be phased out in future releases.

📢 Deprecation Notice

While the Scala-based Pub-Sub Indexer remains available for now, it is officially deprecated and will be phased out in future releases. If you’re building on Midnight, now is the time to begin testing the new Indexer and preparing for migration.
