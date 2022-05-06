(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{675:function(e,t,a){"use strict";a.r(t);var r=a(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-041-application-should-be-in-charge-of-validator-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-041-application-should-be-in-charge-of-validator-set"}},[e._v("#")]),e._v(" ADR 041: Application should be in charge of validator set")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently Tendermint is in charge of validator set and proposer selection. Application can only update the validator set changes at EndBlock time.\nTo support Light Client, application should make sure at least 2/3 of validator are same at each round.")]),e._v(" "),a("p",[e._v("Application should have full control on validator set changes and proposer selection. In each round Application can provide the list of validators for next rounds in order with their power. The proposer is the first in the list, in case the proposer is offline, the next one can propose the proposal and so on.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("p",[e._v("Tendermint is no more in charge of validator set and its changes. The Application should provide the correct information.\nHowever Tendermint can provide psedo-randomness algorithm to help application for selecting proposer in each round.")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])])}),[],!1,null,null,null);t.default=s.exports}}]);