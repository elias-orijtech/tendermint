(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{745:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"abci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI++")]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("ABCI++ is a major evolution of ABCI ("),n("strong",[e._v("A")]),e._v("pplication "),n("strong",[e._v("B")]),e._v("lock"),n("strong",[e._v("c")]),e._v("hain "),n("strong",[e._v("I")]),e._v("nterface).\nLike its predecessor, ABCI++ is the interface between Tendermint (a state-machine\nreplication engine) and the actual state machine being replicated (i.e., the Application).\nThe API consists of a set of "),n("em",[e._v("methods")]),e._v(", each with a corresponding "),n("code",[e._v("Request")]),e._v(" and "),n("code",[e._v("Response")]),e._v("\nmessage type.")]),e._v(" "),n("p",[e._v("The methods are always initiated by Tendermint. The Application implements its logic\nfor handling all ABCI++ methods.\nThus, Tendermint always sends the "),n("code",[e._v("Request*")]),e._v(" messages and receives the "),n("code",[e._v("Response*")]),e._v(" messages\nin return.")]),e._v(" "),n("p",[e._v("All ABCI++ messages and methods are defined in "),n("a",{attrs:{href:"../../proto/tendermint/abci/types.proto"}},[e._v("protocol buffers")]),e._v(".\nThis allows Tendermint to run with applications written in many programming languages.")]),e._v(" "),n("p",[e._v("This specification is split as follows:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/spec/abci++/abci++_basic_concepts_002_draft.html"}},[e._v("Overview and basic concepts")]),e._v(" - interface's overview and concepts needed to understand other parts of this specification.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods_002_draft.html"}},[e._v("Methods")]),e._v(" - complete details on all ABCI++ methods\nand message types.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/abci++/abci++_app_requirements_002_draft.html"}},[e._v("Requirements for the Application")]),e._v(" - formal requirements\non the Application's logic to ensure liveness of Tendermint. These requirements define what\nTendermint expects from the Application.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/abci++/abci++_tmint_expected_behavior_002_draft.html"}},[e._v("Tendermint's expected behavior")]),e._v(" - specification of\nhow the different ABCI++ methods may be called by Tendermint. This explains what the Application\nis to expect from Tendermint.")],1)]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("TODO")]),e._v(" Re-read these and remove redundant info")])]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/spec/abci/apps.html"}},[e._v("Applications")]),e._v(" - how to manage ABCI application state and other\ndetails about building ABCI applications")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/abci/client-server.html"}},[e._v("Client and Server")]),e._v(" - for those looking to implement their\nown ABCI application servers")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);