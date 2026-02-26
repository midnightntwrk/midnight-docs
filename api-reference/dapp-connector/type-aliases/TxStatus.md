[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / TxStatus

# Type Alias: TxStatus

> **TxStatus** = \{ `executionStatus`: [`ExecutionStatus`](ExecutionStatus.md); `status`: `"finalized"`; \} \| \{ `executionStatus`: [`ExecutionStatus`](ExecutionStatus.md); `status`: `"confirmed"`; \} \| \{ `status`: `"pending"`; \} \| \{ `status`: `"discarded"`; \}

## Type Declaration

\{ `executionStatus`: [`ExecutionStatus`](ExecutionStatus.md); `status`: `"finalized"`; \}

### executionStatus

> **executionStatus**: [`ExecutionStatus`](ExecutionStatus.md)

### status

> **status**: `"finalized"`

Transaction included in chain and finalized

\{ `executionStatus`: [`ExecutionStatus`](ExecutionStatus.md); `status`: `"confirmed"`; \}

### executionStatus

> **executionStatus**: [`ExecutionStatus`](ExecutionStatus.md)

### status

> **status**: `"confirmed"`

Transaction included in chain and not finalized yet

\{ `status`: `"pending"`; \}

### status

> **status**: `"pending"`

Transaction sent to network but is not known to be either confirmed or discarded yet

\{ `status`: `"discarded"`; \}

### status

> **status**: `"discarded"`

Transaction failed to be included in chain, e.g. because of TTL or some validity checks
