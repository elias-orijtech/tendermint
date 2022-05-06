(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{814:function(e,t,n){"use strict";n.r(t);var a=n(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peers"}},[e._v("#")]),e._v(" Peers")]),e._v(" "),n("p",[e._v("This document explains how Tendermint Peers are identified and how they connect to one another.")]),e._v(" "),n("p",[e._v("For details on peer discovery, see the "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/pex/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("peer exchange (PEX) doc"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"peer-identity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-identity"}},[e._v("#")]),e._v(" Peer Identity")]),e._v(" "),n("p",[e._v("Tendermint peers are expected to maintain long-term persistent identities in the form of a public key.\nEach peer has an ID defined as "),n("code",[e._v("peer.ID == peer.PubKey.Address()")]),e._v(", where "),n("code",[e._v("Address")]),e._v(" uses the scheme defined in "),n("code",[e._v("crypto")]),e._v(" package.")]),e._v(" "),n("p",[e._v("A single peer ID can have multiple IP addresses associated with it, but a node\nwill only ever connect to one at a time.")]),e._v(" "),n("p",[e._v("When attempting to connect to a peer, we use the PeerURL: "),n("code",[e._v("<ID>@<IP>:<PORT>")]),e._v(".\nWe will attempt to connect to the peer at IP:PORT, and verify,\nvia authenticated encryption, that it is in possession of the private key\ncorresponding to "),n("code",[e._v("<ID>")]),e._v(". This prevents man-in-the-middle attacks on the peer layer.")]),e._v(" "),n("h2",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),n("p",[e._v("All p2p connections use TCP.\nUpon establishing a successful TCP connection with a peer,\ntwo handshakes are performed: one for authenticated encryption, and one for Tendermint versioning.\nBoth handshakes have configurable timeouts (they should complete quickly).")]),e._v(" "),n("h3",{attrs:{id:"authenticated-encryption-handshake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authenticated-encryption-handshake"}},[e._v("#")]),e._v(" Authenticated Encryption Handshake")]),e._v(" "),n("p",[e._v("Tendermint implements the Station-to-Station protocol\nusing X25519 keys for Diffie-Helman key-exchange and chacha20poly1305 for encryption.")]),e._v(" "),n("p",[e._v("Previous versions of this protocol (0.32 and below) suffered from malleability attacks whereas an active man\nin the middle attacker could compromise confidentiality as described in "),n("a",{attrs:{href:"https://eprint.iacr.org/2019/526.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prime, Order Please!\nRevisiting Small Subgroup and Invalid Curve Attacks on\nProtocols using Diffie-Hellman"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("We have added dependency on the Merlin a keccak based transcript hashing protocol to ensure non-malleability.")]),e._v(" "),n("p",[e._v("It goes as follows:")]),e._v(" "),n("ul",[n("li",[e._v("generate an ephemeral X25519 keypair")]),e._v(" "),n("li",[e._v("send the ephemeral public key to the peer")]),e._v(" "),n("li",[e._v("wait to receive the peer's ephemeral public key")]),e._v(" "),n("li",[e._v('create a new Merlin Transcript with the string "TENDERMINT_SECRET_CONNECTION_TRANSCRIPT_HASH"')]),e._v(" "),n("li",[e._v('Sort the ephemeral keys and add the high labeled "EPHEMERAL_UPPER_PUBLIC_KEY" and the low keys labeled "EPHEMERAL_LOWER_PUBLIC_KEY" to the Merlin transcript.')]),e._v(" "),n("li",[e._v("compute the Diffie-Hellman shared secret using the peers ephemeral public key and our ephemeral private key")]),e._v(" "),n("li",[e._v("add the DH secret to the transcript labeled DH_SECRET.")]),e._v(" "),n("li",[e._v("generate two keys to use for encryption (sending and receiving) and a challenge for authentication as follows:\n"),n("ul",[n("li",[e._v("create a hkdf-sha256 instance with the key being the diffie hellman shared secret, and info parameter as\n"),n("code",[e._v("TENDERMINT_SECRET_CONNECTION_KEY_AND_CHALLENGE_GEN")])]),e._v(" "),n("li",[e._v("get 64 bytes of output from hkdf-sha256")]),e._v(" "),n("li",[e._v("if we had the smaller ephemeral pubkey, use the first 32 bytes for the key for receiving, the second 32 bytes for sending; else the opposite.")])])]),e._v(" "),n("li",[e._v("use a separate nonce for receiving and sending. Both nonces start at 0, and should support the full 96 bit nonce range")]),e._v(" "),n("li",[e._v("all communications from now on are encrypted in 1400 byte frames (plus encoding overhead),\nusing the respective secret and nonce. Each nonce is incremented by one after each use.")]),e._v(" "),n("li",[e._v("we now have an encrypted channel, but still need to authenticate")]),e._v(" "),n("li",[e._v('extract a 32 bytes challenge from merlin transcript with the label "SECRET_CONNECTION_MAC"')]),e._v(" "),n("li",[e._v("sign the common challenge obtained from the hkdf with our persistent private key")]),e._v(" "),n("li",[e._v("send the amino encoded persistent pubkey and signature to the peer")]),e._v(" "),n("li",[e._v("wait to receive the persistent public key and signature from the peer")]),e._v(" "),n("li",[e._v("verify the signature on the challenge using the peer's persistent public key")])]),e._v(" "),n("p",[e._v("If this is an outgoing connection (we dialed the peer) and we used a peer ID,\nthen finally verify that the peer's persistent public key corresponds to the peer ID we dialed,\nie. "),n("code",[e._v("peer.PubKey.Address() == <ID>")]),e._v(".")]),e._v(" "),n("p",[e._v("The connection has now been authenticated. All traffic is encrypted.")]),e._v(" "),n("p",[e._v("Note: only the dialer can authenticate the identity of the peer,\nbut this is what we care about since when we join the network we wish to\nensure we have reached the intended peer (and are not being MITMd).")]),e._v(" "),n("h3",{attrs:{id:"peer-filter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-filter"}},[e._v("#")]),e._v(" Peer Filter")]),e._v(" "),n("p",[e._v("Before continuing, we check if the new peer has the same ID as ourselves or\nan existing peer. If so, we disconnect.")]),e._v(" "),n("p",[e._v("We also check the peer's address and public key against\nan optional whitelist which can be managed through the ABCI app -\nif the whitelist is enabled and the peer does not qualify, the connection is\nterminated.")]),e._v(" "),n("h3",{attrs:{id:"tendermint-version-handshake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-version-handshake"}},[e._v("#")]),e._v(" Tendermint Version Handshake")]),e._v(" "),n("p",[e._v("The Tendermint Version Handshake allows the peers to exchange their NodeInfo:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBOb2RlSW5mbyBzdHJ1Y3QgewogIFZlcnNpb24gICAgcDJwLlZlcnNpb24KICBJRCAgICAgICAgIHAycC5JRAogIExpc3RlbkFkZHIgc3RyaW5nCgogIE5ldHdvcmsgICAgc3RyaW5nCiAgU29mdHdhcmVWZXJzaW9uICAgIHN0cmluZwogIENoYW5uZWxzICAgW11pbnQ4CgogIE1vbmlrZXIgICAgc3RyaW5nCiAgT3RoZXIgICAgICBOb2RlSW5mb090aGVyCn0KCnR5cGUgVmVyc2lvbiBzdHJ1Y3QgewogUDJQIHVpbnQ2NAogQmxvY2sgdWludDY0CiBBcHAgdWludDY0Cn0KCnR5cGUgTm9kZUluZm9PdGhlciBzdHJ1Y3QgewogVHhJbmRleCAgICAgICAgICBzdHJpbmcKIFJQQ0FkZHJlc3MgICAgICAgc3RyaW5nCn0K"}}),e._v(" "),n("p",[e._v("The connection is disconnected if:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("peer.NodeInfo.ID")]),e._v(" is not equal "),n("code",[e._v("peerConn.ID")])]),e._v(" "),n("li",[n("code",[e._v("peer.NodeInfo.Version.Block")]),e._v(" does not match ours")]),e._v(" "),n("li",[n("code",[e._v("peer.NodeInfo.Network")]),e._v(" is not the same as ours")]),e._v(" "),n("li",[n("code",[e._v("peer.Channels")]),e._v(" does not intersect with our known Channels.")]),e._v(" "),n("li",[n("code",[e._v("peer.NodeInfo.ListenAddr")]),e._v(" is malformed or is a DNS host that cannot be\nresolved")])]),e._v(" "),n("p",[e._v("At this point, if we have not disconnected, the peer is valid.\nIt is added to the switch and hence all reactors via the "),n("code",[e._v("AddPeer")]),e._v(" method.\nNote that each reactor may handle multiple channels.")]),e._v(" "),n("h2",{attrs:{id:"connection-activity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection-activity"}},[e._v("#")]),e._v(" Connection Activity")]),e._v(" "),n("p",[e._v("Once a peer is added, incoming messages for a given reactor are handled through\nthat reactor's "),n("code",[e._v("Receive")]),e._v(" method, and output messages are sent directly by the Reactors\non each peer. A typical reactor maintains per-peer go-routine(s) that handle this.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);