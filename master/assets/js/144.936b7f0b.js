(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{715:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This is a quick start guide. If you have a vague idea about how Tendermint\nworks and want to get started right away, continue. Make sure you've installed the binary.\nCheck out "),a("RouterLink",{attrs:{to:"/introduction/install.html"}},[e._v("install")]),e._v(" if you haven't.")],1),e._v(" "),a("h2",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[e._v("#")]),e._v(" Initialization")]),e._v(" "),a("p",[e._v("Running:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBpbml0IHZhbGlkYXRvcgo="}}),e._v(" "),a("p",[e._v("will create the required files for a single, local node.")]),e._v(" "),a("p",[e._v("These files are found in "),a("code",[e._v("$HOME/.tendermint")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAkSE9NRS8udGVuZGVybWludAoKY29uZmlnICBkYXRhCgokIGxzICRIT01FLy50ZW5kZXJtaW50L2NvbmZpZy8KCmNvbmZpZy50b21sICBnZW5lc2lzLmpzb24gIG5vZGVfa2V5Lmpzb24gIHByaXZfdmFsaWRhdG9yLmpzb24K"}}),e._v(" "),a("p",[e._v("For a single, local node, no further configuration is required.\nConfiguring a cluster is covered further below.")]),e._v(" "),a("h2",{attrs:{id:"local-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-node"}},[e._v("#")]),e._v(" Local Node")]),e._v(" "),a("p",[e._v("Start Tendermint with a simple in-process application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzdGFydCAtLXByb3h5LWFwcD1rdnN0b3JlCg=="}}),e._v(" "),a("blockquote",[a("p",[e._v("Note: "),a("code",[e._v("kvstore")]),e._v(" is a non persistent app, if you would like to run an application with persistence run "),a("code",[e._v("--proxy-app=persistent_kvstore")])])]),e._v(" "),a("p",[e._v("and blocks will start to stream in:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SVswMS0wNnwwMTo0NToxNS41OTJdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MSB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzAxLTA2fDAxOjQ1OjE1LjYyNF0gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD0xIHR4cz0wIGFwcEhhc2g9Cg=="}}),e._v(" "),a("p",[e._v("Check the status with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyBsb2NhbGhvc3Q6MjY2NTcvc3RhdHVzCg=="}}),e._v(" "),a("h3",{attrs:{id:"sending-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-transactions"}},[e._v("#")]),e._v(" Sending Transactions")]),e._v(" "),a("p",[e._v("With the KVstore app running, we can send transactions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7YWJjZCZxdW90OycK"}}),e._v(" "),a("p",[e._v("and check that it worked with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDthYmNkJnF1b3Q7Jwo="}}),e._v(" "),a("p",[e._v("We can send transactions with a key and value too:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7bmFtZT1zYXRvc2hpJnF1b3Q7Jwo="}}),e._v(" "),a("p",[e._v("and query the key:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDtuYW1lJnF1b3Q7Jwo="}}),e._v(" "),a("p",[e._v("where the value is returned in hex.")]),e._v(" "),a("h2",{attrs:{id:"cluster-of-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-of-nodes"}},[e._v("#")]),e._v(" Cluster of Nodes")]),e._v(" "),a("p",[e._v("First create four Ubuntu cloud machines. The following was tested on Digital\nOcean Ubuntu 16.04 x64 (3GB/1CPU, 20GB SSD). We'll refer to their respective IP\naddresses below as IP1, IP2, IP3, IP4.")]),e._v(" "),a("p",[e._v("Then, "),a("code",[e._v("ssh")]),e._v(" into each machine, and execute "),a("a",{attrs:{href:"https://git.io/fFfOR",target:"_blank",rel:"noopener noreferrer"}},[e._v("this script"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtTCBodHRwczovL2dpdC5pby9mRmZPUiB8IGJhc2gKc291cmNlIH4vLnByb2ZpbGUK"}}),e._v(" "),a("p",[e._v("This will install "),a("code",[e._v("go")]),e._v(" and other dependencies, get the Tendermint source code, then compile the "),a("code",[e._v("tendermint")]),e._v(" binary.")]),e._v(" "),a("p",[e._v("Next, use the "),a("code",[e._v("tendermint testnet")]),e._v(" command to create four directories of config files (found in "),a("code",[e._v("./mytestnet")]),e._v(") and copy each directory to the relevant machine in the cloud, so that each machine has "),a("code",[e._v("$HOME/mytestnet/node[0-3]")]),e._v(" directory.")]),e._v(" "),a("p",[e._v("Before you can start the network, you'll need peers identifiers (IPs are not enough and can change). We'll refer to them as ID1, ID2, ID3, ID4.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzaG93X25vZGVfaWQgLS1ob21lIC4vbXl0ZXN0bmV0L25vZGUwCnRlbmRlcm1pbnQgc2hvd19ub2RlX2lkIC0taG9tZSAuL215dGVzdG5ldC9ub2RlMQp0ZW5kZXJtaW50IHNob3dfbm9kZV9pZCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTIKdGVuZGVybWludCBzaG93X25vZGVfaWQgLS1ob21lIC4vbXl0ZXN0bmV0L25vZGUzCg=="}}),e._v(" "),a("p",[e._v("Finally, from each machine, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzdGFydCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTAgLS1wcm94eS1hcHA9a3ZzdG9yZSAtLXAycC5wZXJzaXN0ZW50LXBlZXJzPSZxdW90O0lEMUBJUDE6MjY2NTYsSUQyQElQMjoyNjY1NixJRDNASVAzOjI2NjU2LElENEBJUDQ6MjY2NTYmcXVvdDsKdGVuZGVybWludCBzdGFydCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTEgLS1wcm94eS1hcHA9a3ZzdG9yZSAtLXAycC5wZXJzaXN0ZW50LXBlZXJzPSZxdW90O0lEMUBJUDE6MjY2NTYsSUQyQElQMjoyNjY1NixJRDNASVAzOjI2NjU2LElENEBJUDQ6MjY2NTYmcXVvdDsKdGVuZGVybWludCBzdGFydCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTIgLS1wcm94eS1hcHA9a3ZzdG9yZSAtLXAycC5wZXJzaXN0ZW50LXBlZXJzPSZxdW90O0lEMUBJUDE6MjY2NTYsSUQyQElQMjoyNjY1NixJRDNASVAzOjI2NjU2LElENEBJUDQ6MjY2NTYmcXVvdDsKdGVuZGVybWludCBzdGFydCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTMgLS1wcm94eS1hcHA9a3ZzdG9yZSAtLXAycC5wZXJzaXN0ZW50LXBlZXJzPSZxdW90O0lEMUBJUDE6MjY2NTYsSUQyQElQMjoyNjY1NixJRDNASVAzOjI2NjU2LElENEBJUDQ6MjY2NTYmcXVvdDsK"}}),e._v(" "),a("p",[e._v("Note that after the third node is started, blocks will start to stream in\nbecause >2/3 of validators (defined in the "),a("code",[e._v("genesis.json")]),e._v(") have come online.\nPersistent peers can also be specified in the "),a("code",[e._v("config.toml")]),e._v(". See "),a("RouterLink",{attrs:{to:"/tendermint-core/configuration.html"}},[e._v("here")]),e._v(" for more information about configuration options.")],1),e._v(" "),a("p",[e._v("Transactions can then be sent as covered in the single, local node example above.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);