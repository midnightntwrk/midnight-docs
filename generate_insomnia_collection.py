#!/usr/bin/env python3
"""
Generate an updated Insomnia API collection from the latest RPC methods.
"""
import json
import uuid
from datetime import datetime

# Current RPC methods from testnet-02.midnight.network
RPC_METHODS = [
    "account_nextIndex",
    "archive_unstable_body",
    "archive_unstable_call",
    "archive_unstable_finalizedHeight",
    "archive_unstable_genesisHash",
    "archive_unstable_hashByHeight",
    "archive_unstable_header",
    "archive_unstable_storage",
    "author_hasKey",
    "author_hasSessionKeys",
    "author_insertKey",
    "author_pendingExtrinsics",
    "author_removeExtrinsic",
    "author_rotateKeys",
    "author_submitAndWatchExtrinsic",
    "author_submitExtrinsic",
    "author_unwatchExtrinsic",
    "chainHead_v1_body",
    "chainHead_v1_call",
    "chainHead_v1_continue",
    "chainHead_v1_follow",
    "chainHead_v1_header",
    "chainHead_v1_stopOperation",
    "chainHead_v1_storage",
    "chainHead_v1_unfollow",
    "chainHead_v1_unpin",
    "chainSpec_v1_chainName",
    "chainSpec_v1_genesisHash",
    "chainSpec_v1_properties",
    "chain_getBlock",
    "chain_getBlockHash",
    "chain_getFinalisedHead",
    "chain_getFinalizedHead",
    "chain_getHead",
    "chain_getHeader",
    "chain_getRuntimeVersion",
    "chain_subscribeAllHeads",
    "chain_subscribeFinalisedHeads",
    "chain_subscribeFinalizedHeads",
    "chain_subscribeNewHead",
    "chain_subscribeNewHeads",
    "chain_subscribeRuntimeVersion",
    "chain_unsubscribeAllHeads",
    "chain_unsubscribeFinalisedHeads",
    "chain_unsubscribeFinalizedHeads",
    "chain_unsubscribeNewHead",
    "chain_unsubscribeNewHeads",
    "chain_unsubscribeRuntimeVersion",
    "childstate_getKeys",
    "childstate_getKeysPaged",
    "childstate_getKeysPagedAt",
    "childstate_getStorage",
    "childstate_getStorageEntries",
    "childstate_getStorageHash",
    "childstate_getStorageSize",
    "grandpa_proveFinality",
    "grandpa_roundState",
    "grandpa_subscribeJustifications",
    "grandpa_unsubscribeJustifications",
    "midnight_apiVersions",
    "midnight_contractState",
    "midnight_decodeEvents",
    "midnight_jsonBlock",
    "midnight_jsonContractState",
    "midnight_ledgerVersion",
    "midnight_unclaimedAmount",
    "midnight_zswapChainState",
    "midnight_zswapStateRoot",
    "offchain_localStorageGet",
    "offchain_localStorageSet",
    "rpc_methods",
    "sidechain_getAriadneParameters",
    "sidechain_getEpochCommittee",
    "sidechain_getParams",
    "sidechain_getRegistrations",
    "sidechain_getStatus",
    "state_call",
    "state_callAt",
    "state_getChildReadProof",
    "state_getKeys",
    "state_getKeysPaged",
    "state_getKeysPagedAt",
    "state_getMetadata",
    "state_getPairs",
    "state_getReadProof",
    "state_getRuntimeVersion",
    "state_getStorage",
    "state_getStorageAt",
    "state_getStorageHash",
    "state_getStorageHashAt",
    "state_getStorageSize",
    "state_getStorageSizeAt",
    "state_queryStorage",
    "state_queryStorageAt",
    "state_subscribeRuntimeVersion",
    "state_subscribeStorage",
    "state_traceBlock",
    "state_unsubscribeRuntimeVersion",
    "state_unsubscribeStorage",
    "subscribe_newHead",
    "system_accountNextIndex",
    "system_addLogFilter",
    "system_addReservedPeer",
    "system_chain",
    "system_chainType",
    "system_dryRun",
    "system_dryRunAt",
    "system_health",
    "system_localListenAddresses",
    "system_localPeerId",
    "system_name",
    "system_nodeRoles",
    "system_peers",
    "system_properties",
    "system_removeReservedPeer",
    "system_reservedPeers",
    "system_resetLogFilter",
    "system_syncState",
    "system_unstable_networkState",
    "system_version",
    "transaction_v1_broadcast",
    "transaction_v1_stop",
    "transactionWatch_v1_submitAndWatch",
    "transactionWatch_v1_unwatch",
    "unsubscribe_newHead",
]

WORKSPACE_ID = "wrk_00534828e0594856a856ebe8d190947e"
FOLDER_ID = "fld_da01050d8c5f4ecabc696fad88f19e0d"
ENVIRONMENT_ID = "env_ca8ba43d425d4eb65c32a3f88c799ebc4bbea08b"
JAR_ID = "jar_ca8ba43d425d4eb65c32a3f88c799ebc4bbea08b"

def generate_request(method_name: str) -> dict:
    """Generate an Insomnia request object for a given RPC method."""
    request_id = f"req_{uuid.uuid4().hex[:24]}"
    return {
        "_id": request_id,
        "parentId": FOLDER_ID,
        "modified": 0,
        "created": 0,
        "url": "https://rpc.testnet-02.midnight.network/",
        "name": method_name,
        "description": "",
        "method": "POST",
        "body": {
            "mimeType": "application/json",
            "text": json.dumps({
                "jsonrpc": "2.0",
                "method": method_name,
                "params": [],
                "id": 1
            })
        },
        "parameters": [],
        "headers": [
            {"name": "Content-Type", "value": "application/json"}
        ],
        "authentication": {},
        "preRequestScript": "",
        "metaSortKey": -1,
        "isPrivate": False,
        "pathParameters": [],
        "settingStoreCookies": True,
        "settingSendCookies": True,
        "settingDisableRenderRequestBody": False,
        "settingEncodeUrl": True,
        "settingRebuildPath": True,
        "settingFollowRedirects": "global",
        "_type": "request"
    }

def generate_insomnia_collection() -> dict:
    """Generate the complete Insomnia collection."""
    resources = []
    
    # Add workspace
    resources.append({
        "_id": WORKSPACE_ID,
        "parentId": None,
        "modified": int(datetime.now().timestamp() * 1000),
        "created": 1719314200431,
        "name": "Midnight Node",
        "description": "",
        "scope": "collection",
        "_type": "workspace"
    })
    
    # Add folder
    resources.append({
        "_id": FOLDER_ID,
        "parentId": WORKSPACE_ID,
        "modified": 0,
        "created": 0,
        "name": "JSON-RPC Methods",
        "description": "",
        "environment": {},
        "environmentPropertyOrder": None,
        "metaSortKey": -1719314200433,
        "_type": "request_group"
    })
    
    # Add all RPC method requests
    for method in sorted(RPC_METHODS):
        resources.append(generate_request(method))
    
    # Add environment
    resources.append({
        "_id": ENVIRONMENT_ID,
        "parentId": WORKSPACE_ID,
        "modified": 1719314201747,
        "created": 1719314201747,
        "name": "Base Environment",
        "data": {},
        "dataPropertyOrder": None,
        "color": None,
        "isPrivate": False,
        "metaSortKey": 1719314201747,
        "_type": "environment"
    })
    
    # Add cookie jar
    resources.append({
        "_id": JAR_ID,
        "parentId": WORKSPACE_ID,
        "modified": 1719314201748,
        "created": 1719314201748,
        "name": "Default Jar",
        "cookies": [],
        "_type": "cookie_jar"
    })
    
    return {
        "_type": "export",
        "__export_format": 4,
        "__export_date": datetime.now().isoformat() + "Z",
        "__export_source": "insomnia.desktop.app:v9.3.2",
        "resources": resources
    }

if __name__ == "__main__":
    collection = generate_insomnia_collection()
    
    # Write to file with today's date
    today = datetime.now().strftime("%Y-%m-%d")
    output_file = f"static/files/Insomnia_{today}.json"
    
    with open(output_file, "w") as f:
        json.dump(collection, f, separators=(',', ':'))
    
    print(f"Generated Insomnia collection with {len(RPC_METHODS)} methods")
    print(f"Saved to: {output_file}")
    print(f"\nTotal requests: {len([r for r in collection['resources'] if r.get('_type') == 'request'])}")
