(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{737:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rfc-015-abci-tx-mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfc-015-abci-tx-mutation"}},[e._v("#")]),e._v(" RFC 015: ABCI++ TX Mutation")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("23-Feb-2022: Initial draft (@williambanfield).")]),e._v(" "),a("li",[e._v("28-Feb-2022: Revised draft (@williambanfield).")])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("A previous version of the ABCI++ specification detailed a mechanism for proposers to replace transactions\nin the proposed block. This scheme required the proposer to construct new transactions\nand mark these new transactions as replacing other removed transactions. The specification\nwas ambiguous as to how the replacement may be communicated to peer nodes.\nThis RFC discusses issues with this mechanism and possible solutions.")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("h3",{attrs:{id:"what-is-the-proposed-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-proposed-change"}},[e._v("#")]),e._v(" What is the proposed change?")]),e._v(" "),a("p",[e._v("A previous version of the ABCI++ specification proposed mechanisms for adding, removing, and replacing\ntransactions in a proposed block. To replace a transaction, the application running\n"),a("code",[e._v("ProcessProposal")]),e._v(" could mark a transaction as replaced by other application-supplied\ntransactions by returning a new transaction marked with the "),a("code",[e._v("ADDED")]),e._v(" flag setting\nthe "),a("code",[e._v("new_hashes")]),e._v(" field of the removed transaction to contain the list of transaction hashes\nthat replace it. In that previous specification for ABCI++, the full use of the\n"),a("code",[e._v("new_hashes")]),e._v(" field is left somewhat ambiguous. At present, these hashes are not\ngossiped and are not eventually included in the block to signal replacement to\nother nodes. The specification did indicate that the transactions specified in\nthe "),a("code",[e._v("new_hashes")]),e._v(" field will be removed from the mempool but it's not clear how\npeer nodes will learn about them.")]),e._v(" "),a("h3",{attrs:{id:"what-systems-would-be-affected-by-adding-transaction-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-systems-would-be-affected-by-adding-transaction-replacement"}},[e._v("#")]),e._v(" What systems would be affected by adding transaction replacement?")]),e._v(" "),a("p",[e._v("The 'transaction' is a central building block of a Tendermint blockchain, so adding\na mechanism for transaction replacement would require changes to many aspects of Tendermint.")]),e._v(" "),a("p",[e._v("The following is a rough list of the functionality that this mechanism would affect:")]),e._v(" "),a("h4",{attrs:{id:"transaction-indexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-indexing"}},[e._v("#")]),e._v(" Transaction indexing")]),e._v(" "),a("p",[e._v("Tendermint's indexer stores transactions and transaction results using the hash of the executed\ntransaction "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/0fcfaa4568cb700e27c954389c1fcd0b9e786332/internal/state/indexer/tx/kv/kv.go#L90",target:"_blank",rel:"noopener noreferrer"}},[e._v("as the key"),a("OutboundLink")],1),e._v(" and the ABCI results and transaction bytes as the value.")]),e._v(" "),a("p",[e._v("To allow transaction replacement, the replaced transactions would need to stored as well in the\nindexer, likely as a mapping of original transaction to list of transaction hashes that replaced\nthe original transaction.")]),e._v(" "),a("h4",{attrs:{id:"transaction-inclusion-proofs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-inclusion-proofs"}},[e._v("#")]),e._v(" Transaction inclusion proofs")]),e._v(" "),a("p",[e._v("The result of a transaction query includes a Merkle proof of the existence of the\ntransaction in the block chain. This "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/0fcfaa4568cb700e27c954389c1fcd0b9e786332/types/tx.go#L67",target:"_blank",rel:"noopener noreferrer"}},[e._v("proof is built"),a("OutboundLink")],1),e._v(" as a merkle tree\nof the hashes of all of the transactions in the block where the queried transaction was executed.")]),e._v(" "),a("p",[e._v("To allow transaction replacement, these proofs would need to be updated to prove\nthat a replaced transaction was included by replacement in the block.")]),e._v(" "),a("h4",{attrs:{id:"rpc-based-transaction-query-parameters-and-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-based-transaction-query-parameters-and-results"}},[e._v("#")]),e._v(" RPC-based transaction query parameters and results")]),e._v(" "),a("p",[e._v("Tendermint's RPC allows clients to retrieve information about transactions via the\n"),a("code",[e._v("/tx_search")]),e._v(" and "),a("code",[e._v("/tx")]),e._v(" RPC endpoints.")]),e._v(" "),a("p",[e._v("RPC query results containing replaced transactions would need to be updated to include\ninformation on replaced transactions, either by returning results for all of the replaced\ntransactions, or by including a response with just the hashes of the replaced transactions\nwhich clients could proceed to query individually.")]),e._v(" "),a("h4",{attrs:{id:"mempool-transaction-removal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mempool-transaction-removal"}},[e._v("#")]),e._v(" Mempool transaction removal")]),e._v(" "),a("p",[e._v("Additional logic would need to be added to the Tendermint mempool to clear out replaced\ntransactions after each block is executed. Tendermint currently removes executed transactions\nfrom the mempool, so this would be a pretty straightforward change.")]),e._v(" "),a("h2",{attrs:{id:"discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),a("h3",{attrs:{id:"what-value-may-be-added-to-tendermint-by-introducing-transaction-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-value-may-be-added-to-tendermint-by-introducing-transaction-replacement"}},[e._v("#")]),e._v(" What value may be added to Tendermint by introducing transaction replacement?")]),e._v(" "),a("p",[e._v("Transaction replacement would would enable applications to aggregate or disaggregate transactions.")]),e._v(" "),a("p",[e._v("For aggregation, a set of transactions that all related work, such as transferring\ntokens between the same two accounts, could be replaced with a single transaction,\ni.e. one that transfers a single sum from one account to the other.\nApplications that make frequent use of aggregation may be able to achieve a higher throughput.\nAggregation would decrease the space occupied by a single client-submitted transaction in the block, allowing\nmore client-submitted transactions to be executed per block.")]),e._v(" "),a("p",[e._v("For disaggregation, a very complex transaction could be split into multiple smaller transactions.\nThis may be useful if an application wishes to perform more fine-grained indexing on intermediate parts\nof a multi-part transaction.")]),e._v(" "),a("h3",{attrs:{id:"drawbacks-to-transaction-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drawbacks-to-transaction-replacement"}},[e._v("#")]),e._v(" Drawbacks to transaction replacement")]),e._v(" "),a("p",[e._v("Transaction replacement would require updating and shimming many of the places that\nTendermint records and exposes information about executed transactions. While\nsystems within Tendermint could be updated to account for transaction replacement,\nsuch a system would leave new issues and rough edges.")]),e._v(" "),a("h4",{attrs:{id:"no-way-of-guaranteeing-correct-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-way-of-guaranteeing-correct-replacement"}},[e._v("#")]),e._v(" No way of guaranteeing correct replacement")]),e._v(" "),a("p",[e._v("If a user issues a transaction to the network and the transaction is replaced, the\nuser has no guarantee that the replacement was correct. For example, suppose a set of users issue\ntransactions A, B, and C and they are all aggregated into a new transaction, D.\nThere is nothing guaranteeing that D was constructed correctly from the inputs.\nThe only way for users to ensure D is correct would be if D contained all of the\ninformation of its constituent transactions, in which case, nothing is really gained by the replacement.")]),e._v(" "),a("h4",{attrs:{id:"replacement-transactions-not-signed-by-submitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacement-transactions-not-signed-by-submitter"}},[e._v("#")]),e._v(" Replacement transactions not signed by submitter")]),e._v(" "),a("p",[e._v("Abstractly, Tendermint simply views transactions as a ball of bytes and therefore\nshould be fine with replacing one for another. However, many applications require\nthat transactions submitted to the chain be signed by some private key to authenticate\nand authorize the transaction. Replaced transactions could not be signed by the\nsubmitter, only by the application node. Therefore, any use of transaction replacement\ncould not contain authorization from the submitter and would either need to grant\napplication-submitted transactions power to perform application logic on behalf\nof a user without their consent.")]),e._v(" "),a("p",[e._v("Granting this power to application-submitted transactions would be very dangerous\nand therefore might not be of much value to application developers.\nTransaction replacement might only be really safe in the case of application-submitted\ntransactions or for transactions that require no authorization. For such transactions,\nit's quite not quite clear what the utility of replacement is: the application can already\ngenerate any transactions that it wants. The fact that such a transaction was a replacement\nis not particularly relevant to participants in the chain since the application is\nmerely replacing its own transactions.")]),e._v(" "),a("h4",{attrs:{id:"new-vector-for-censorship"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-vector-for-censorship"}},[e._v("#")]),e._v(" New vector for censorship")]),e._v(" "),a("p",[e._v("Depending on the implementation, transaction replacement may allow a node signal\nto the rest of the chain that some transaction should no longer be considered for execution.\nHonest nodes will use the replacement mechanism to signal that a transaction has been aggregated.\nMalicious nodes will be granted a new vector for censoring transactions.\nThere is no guarantee that a replaced transactions is actually executed at all.\nA malicious node could censor a transaction by simply listing it as replaced.\nHonest nodes seeing the replacement would flush the transaction from their mempool\nand not execute or propose it it in later blocks.")]),e._v(" "),a("h3",{attrs:{id:"transaction-tracking-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-tracking-implementations"}},[e._v("#")]),e._v(" Transaction tracking implementations")]),e._v(" "),a("p",[e._v("This section discusses possible ways to flesh out the implementation of transaction replacement.\nSpecifically, this section proposes a few alternative ways that Tendermint blockchains could\ntrack and store transaction replacements.")]),e._v(" "),a("h4",{attrs:{id:"include-transaction-replacements-in-the-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-transaction-replacements-in-the-block"}},[e._v("#")]),e._v(" Include transaction replacements in the block")]),e._v(" "),a("p",[e._v("One option to track transaction replacement is to include information on the\ntransaction replacement within the block. An additional structure may be added\nthe block of the following form:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBCbG9jayB7Ci4uLgogIHJlcGVhdGVkIFJlcGxhY2VtZW50IHJlcGxhY2VtZW50cyA9IDU7Cn0KCm1lc3NhZ2UgUmVwbGFjZW1lbnQgewogIGJ5dGVzICAgICAgICAgIGluY2x1ZGVkX3R4X2tleSAgID0gMTsKICByZXBlYXRlZCBieXRlcyByZXBsYWNlZF90eHNfa2V5cyA9IDI7Cn0K"}}),e._v(" "),a("p",[e._v("Applications executing "),a("code",[e._v("PrepareProposal")]),e._v(" would return the list of replacements and\nTendermint would include an encoding of these replacements in the block that is gossiped\nand committed.")]),e._v(" "),a("p",[e._v("Tendermint's transaction indexing would include a new mapping for each replaced transaction\nkey to the committed transaction.\nTransaction inclusion proofs would be updated to include these additional new transaction\nkeys in the Merkle tree and queries for transaction hashes that were replaced would return\ninformation indicating that the transaction was replaced along with the hash of the\ntransaction that replaced it.")]),e._v(" "),a("p",[e._v("Block validation of gossiped blocks would be updated to check that each of the\n"),a("code",[e._v("included_txs_key")]),e._v(" matches the hash of some transaction in the proposed block.")]),e._v(" "),a("p",[e._v("Implementing the changes described in this section would allow Tendermint to gossip\nand index transaction replacements as part of block propagation. These changes would\nstill require the application to certify that the replacements were valid. This\nvalidation may be performed in one of two ways:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Applications optimistically trust that the proposer performed a legitimate replacement.")])])]),e._v(" "),a("p",[e._v("In this validation scheme, applications would not verify that the substitution\nis valid during consensus and instead simply trust that the proposer is correct.\nThis would have the drawback of allowing a malicious proposer to remove transactions\nit did not want executed.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("Applications completely validate transaction replacement.")])])]),e._v(" "),a("p",[e._v("In this validation scheme, applications that allow replacement would check that\neach listed replaced transaction was correctly reflected in the replacement transaction.\nIn order to perform such validation, the node would need to have the replaced transactions\nlocally. This could be accomplished one of a few ways: by querying the mempool,\nby adding an additional p2p gossip channel for transaction replacements, or by including the replaced transactions\nin the block. Replacement validation via mempool querying would require the node\nto have received all of the replaced transactions in the mempool which is far from\nguaranteed. Adding an additional gossip channel would make gossiping replaced transactions\na requirement for consensus to proceed, since all nodes would need to receive all replacement\nmessages before considering a block valid. Finally, including replaced transactions in\nthe block seems to obviate any benefit gained from performing a transaction replacement\nsince the replaced transaction and the original transactions would now both appear in the block.")]),e._v(" "),a("h4",{attrs:{id:"application-defined-transaction-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-defined-transaction-replacement"}},[e._v("#")]),e._v(" Application defined transaction replacement")]),e._v(" "),a("p",[e._v("An additional option for allowing transaction replacement is to leave it entirely as a responsibility\nof the application. The "),a("code",[e._v("PrepareProposal")]),e._v(" ABCI++ call allows for applications to add\nnew transactions to a proposed block. Applications that wished to implement a transaction\nreplacement mechanism would be free to do so without the newly defined "),a("code",[e._v("new_hashes")]),e._v(" field.\nApplications wishing to implement transaction replacement would add the aggregated\ntransactions in the "),a("code",[e._v("PrepareProposal")]),e._v(" response, and include one additional bookkeeping\ntransaction that listed all of the replacements, with a similar scheme to the "),a("code",[e._v("new_hashes")]),e._v("\nfield described in ABCI++. This new bookkeeping transaction could be used by the\napplication to determine which transactions to clear from the mempool in future calls\nto "),a("code",[e._v("CheckTx")]),e._v(".")]),e._v(" "),a("p",[e._v("The meaning of any transaction in the block is completely opaque to Tendermint,\nso applications performing this style of replacement would not be able to have the replacement\nreflected in any most of Tendermint's transaction tracking mechanisms, such as transaction indexing\nand the "),a("code",[e._v("/tx")]),e._v(" endpoint.")]),e._v(" "),a("h4",{attrs:{id:"application-defined-tx-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-defined-tx-keys"}},[e._v("#")]),e._v(" Application defined Tx Keys")]),e._v(" "),a("p",[e._v("Tendermint currently uses cryptographic hashes, SHA256, as a key for each transaction.\nAs noted in the section on systems that would require changing, this key is used\nto identify the transaction in the mempool, in the indexer, and within the RPC system.")]),e._v(" "),a("p",[e._v("An alternative approach to allowing "),a("code",[e._v("ProcessProposal")]),e._v(" to specify a set of transaction\nreplacements would be instead to allow the application to specify an additional key or set\nof keys for each transaction during "),a("code",[e._v("ProcessProposal")]),e._v(". This new "),a("code",[e._v("secondary_keys")]),e._v(" set\nwould be included in the block and therefore gossiped during block propagation.\nAdditional RPC endpoints could be exposed to query by the application-defined keys.")]),e._v(" "),a("p",[e._v("Applications wishing to implement replacement would leverage this new field by providing the\nreplaced transaction hashes as the "),a("code",[e._v("secondary_keys")]),e._v(" and checking their validity during\n"),a("code",[e._v("ProcessProposal")]),e._v(". During "),a("code",[e._v("RecheckTx")]),e._v(" the application would then be responsible for\nclearing out transactions that matched the "),a("code",[e._v("secondary_keys")]),e._v(".")]),e._v(" "),a("p",[e._v("It is worth noting that something like this would be possible without "),a("code",[e._v("secondary_keys")]),e._v(".\nAn application wishing to implement a system like this one could define a replacement\ntransaction, as discussed in the section on application-defined transaction replacement,\nand use a custom "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/0fcfaa4568cb700e27c954389c1fcd0b9e786332/abci/types/types.pb.go#L3168",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI event type"),a("OutboundLink")],1),e._v(" to communicate that the replacement should\nbe indexed within Tendermint's ABCI event indexing.")]),e._v(" "),a("h3",{attrs:{id:"complexity-to-value-add-tradeoff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complexity-to-value-add-tradeoff"}},[e._v("#")]),e._v(" Complexity to value-add tradeoff")]),e._v(" "),a("p",[e._v("It is worth remarking that adding a system like this may introduce a decent amount\nof new complexity into Tendermint. An approach that leaves much of the replacement\nlogic to Tendermint would require altering the core transaction indexing and querying\ndata. In many of the cases listed, a system for transaction replacement is possible\nwithout explicitly defining it as part of "),a("code",[e._v("PrepareProposal")]),e._v(". Since applications\ncan now add transactions during "),a("code",[e._v("PrepareProposal")]),e._v(" they can and should leverage this\nfunctionality to include additional bookkeeping transactions in the block. It may\nbe worth encouraging applications to discover new and interesting ways to leverage this\npower instead of immediately solving the problem for them.")]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);