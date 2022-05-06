(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{796:function(t,e,o){"use strict";o.r(e);var a=o(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"draft-of-functions-for-fork-detection-and-proof-of-fork-submisstion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#draft-of-functions-for-fork-detection-and-proof-of-fork-submisstion"}},[t._v("#")]),t._v(" Draft of Functions for Fork detection and Proof of Fork Submisstion")]),t._v(" "),o("p",[t._v("This document collects drafts of function for generating and\nsubmitting proof of fork in the IBC context")]),t._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"#on---chain-ibc-component"}},[t._v("IBC")])])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#relayer"}},[t._v("Relayer")])])])]),t._v(" "),o("h2",{attrs:{id:"on-chain-ibc-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-ibc-component"}},[t._v("#")]),t._v(" On-chain IBC Component")]),t._v(" "),o("blockquote",[o("p",[t._v("The following is a suggestions to change the function defined in ICS 007")])]),t._v(" "),o("h4",{attrs:{id:"tag-ibc-misbehavior-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-ibc-misbehavior-1"}},[t._v("#")]),t._v(" [TAG-IBC-MISBEHAVIOR.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjaGVja01pc2JlaGF2aW91ckFuZFVwZGF0ZVN0YXRlKGNzOiBDbGllbnRTdGF0ZSwgUG9GOiBMaWdodE5vZGVQcm9vZk9mRm9yaykK"}}),t._v(" "),o("p",[o("strong",[t._v("TODO:")]),t._v(" finish conditions")]),t._v(" "),o("ul",[o("li",[t._v("Implementation remark")]),t._v(" "),o("li",[t._v("Expected precondition\n"),o("ul",[o("li",[t._v("PoF.TrustedBlock.Header is equal to lightBlock on store with\nsame height")]),t._v(" "),o("li",[t._v("both traces end with header of same height")]),t._v(" "),o("li",[t._v("headers are different")]),t._v(" "),o("li",[t._v("both traces are supported by PoF.TrustedBlock ("),o("code",[t._v("supports")]),t._v("\ndefined in [TMBC-FUNC]), that is, for "),o("code",[t._v("t = currentTimestamp()")]),t._v(" (see\nICS 024)\n"),o("ul",[o("li",[t._v("supports(PoF.TrustedBlock, PoF.PrimaryTrace[1], t)")]),t._v(" "),o("li",[t._v("supports(PoF.PrimaryTrace[i], PoF.PrimaryTrace[i+1], t) for\n"),o("em",[t._v("0 < i < length(PoF.PrimaryTrace)")])]),t._v(" "),o("li",[t._v("supports(PoF.TrustedBlock,  PoF.SecondaryTrace[1], t)")]),t._v(" "),o("li",[t._v("supports(PoF.SecondaryTrace[i], PoF.SecondaryTrace[i+1], t) for\n"),o("em",[t._v("0 < i < length(PoF.SecondaryTrace)")])])])])])]),t._v(" "),o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("set cs.FrozenHeight to min(cs.FrozenHeight, PoF.TrustedBlock.Header.Height)")])])]),t._v(" "),o("li",[t._v("Error condition\n"),o("ul",[o("li",[t._v("none")])])])]),t._v(" "),o("hr"),t._v(" "),o("blockquote",[o("p",[t._v('The following is a suggestions to add functionality to ICS 002 and 007.\nI suppose the above is the most efficient way to get the required\ninformation. Another option is to subscribe to "header install"\nevents via CosmosSDK')])]),t._v(" "),o("h4",{attrs:{id:"tag-ibc-heights-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-ibc-heights-1"}},[t._v("#")]),t._v(" [TAG-IBC-HEIGHTS.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBRdWVyeUhlaWdodHNSYW5nZShpZCwgZnJvbSwgdG8pIChbXUhlaWdodCkK"}}),t._v(" "),o("ul",[o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("returns all heights "),o("em",[t._v("h")]),t._v(", with "),o("em",[t._v("from <= h <= to")]),t._v(" for which the\nIBC component has a consensus state.")])])])]),t._v(" "),o("hr"),t._v(" "),o("blockquote",[o("p",[t._v("This function can be used if the relayer has no information about\nthe IBC component. This allows late-joining relayers to also\nparticipate in fork dection and the generation in proof of\nfork. Alternatively, we may also postulate that relayers are not\nresponsible to detect forks for heights before they started (and\nsubscribed to the transactions reporting fresh headers being\ninstalled at the IBC component).")])]),t._v(" "),o("h2",{attrs:{id:"relayer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relayer"}},[t._v("#")]),t._v(" Relayer")]),t._v(" "),o("h3",{attrs:{id:"auxiliary-functions-to-be-implemented-in-the-light-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auxiliary-functions-to-be-implemented-in-the-light-client"}},[t._v("#")]),t._v(" Auxiliary Functions to be implemented in the Light Client")]),t._v(" "),o("h4",{attrs:{id:"lcv-ls-func-get-prev-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lcv-ls-func-get-prev-1"}},[t._v("#")]),t._v(" [LCV-LS-FUNC-GET-PREV.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAobHMgTGlnaHRTdG9yZSkgR2V0UHJldmlvdXNWZXJpZmllZChoZWlnaHQgSGVpZ2h0KSAoTGlnaHRCbG9jaywgYm9vbCkK"}}),t._v(" "),o("ul",[o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("returns a verified LightBlock, whose height is maximal among all\nverified lightblocks with height smaller than "),o("code",[t._v("height")])])])])]),t._v(" "),o("hr"),t._v(" "),o("h3",{attrs:{id:"relayer-submitting-proof-of-fork-to-the-ibc-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relayer-submitting-proof-of-fork-to-the-ibc-component"}},[t._v("#")]),t._v(" Relayer Submitting Proof of Fork to the IBC Component")]),t._v(" "),o("p",[t._v("There are two ways the relayer can detect a fork")]),t._v(" "),o("ul",[o("li",[t._v("by the fork detector of one of its lightclients")]),t._v(" "),o("li",[t._v("be checking the consensus state of the IBC component")])]),t._v(" "),o("p",[t._v("The following function ignores how the proof of fork was generated.\nIt takes a proof of fork as input and computes a proof of fork that\nwill be accepted by the IBC component.\nThe problem addressed here is that both, the relayer's light client\nand the IBC component have incomplete light stores, that might\nnot have all light blocks in common.\nHence the relayer has to figure out what the IBC component knows\n(intuitively, a meeting point between the two lightstores\ncomputed in "),o("code",[t._v("commonRoot")]),t._v(")  and compute a proof of fork\n("),o("code",[t._v("extendPoF")]),t._v(") that the IBC component will accept based on its\nknowledge.")]),t._v(" "),o("p",[t._v("The auxiliary functions "),o("code",[t._v("commonRoot")]),t._v(" and "),o("code",[t._v("extendPoF")]),t._v(" are\ndefined below.")]),t._v(" "),o("h4",{attrs:{id:"tag-submit-pof-ibc-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-submit-pof-ibc-1"}},[t._v("#")]),t._v(" [TAG-SUBMIT-POF-IBC.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTdWJtaXRJQkNQcm9vZk9mRm9yaygKICBsaWdodFN0b3JlIExpZ2h0U3RvcmUsCiAgUG9GOiBMaWdodE5vZGVQcm9vZk9mRm9yaywKICBpYmMgSUJDQ29tcG9uZW50KSAoRXJyb3IpIHsKICAgIGlmIGliYy5xdWVyeUNoYWluQ29uc2Vuc3VzU3RhdGUoUG9GLlRydXN0ZWRCbG9jay5IZWlnaHQpID0gUG9GLlRydXN0ZWRCbG9jayB7CiAgLy8gSUJDIGNvbXBvbmVudCBoYXMgcm9vdCBvZiBQb0Ygb24gc3RvcmUsIHdlIGNhbiBqdXN0IHN1Ym1pdAogICAgICAgIGliYy5zdWJtaXRNaXNiZWhhdmlvdXJUb0NsaWVudChpYmMuaWQsUG9GKQogIHJldHVybiBTdWNjZXNzCiAgICAgLy8gbm90ZSBzdXJlIGFib3V0IHRoZSBpZCBwYXJhbWV0ZXIKICAgIH0KICAgIGVsc2UgewogICAgICAgIC8vIHRoZSBpYmMgY29tcG9uZW50IGRvZXMgbm90IGhhdmUgdGhlIFRydXN0ZWRCbG9jayBhbmQgbWlnaHQKICAvLyBldmVuIGJlIG9uIHlldCBhIGRpZmZlcmVudCBicmFuY2guIFdlIGhhdmUgdG8gY29tcHV0ZSBhIFBvRgogIC8vIHRoYXQgdGhlIGliYyBjb21wb25lbnQgY2FuIHZlcmlmaXkgYmFzZWQgb24gaXRzIGN1cnJlbnQKICAgICAgICAvLyBrbm93bGVkZ2UKICAKICAgICAgICBpYmNMaWdodEJsb2NrLCBsYmxvY2ssIF8sIHJlc3VsdCA6PSBjb21tb25Sb290KGxpZ2h0U3RvcmUsIGliYywgUG9GLlRydXN0ZWRCbG9jaykKCiAgICAgaWYgcmVzdWx0ID0gU3VjY2VzcyB7CiAgIG5ld1BvRiA9IGV4dGVuZFBvRihpYmNMaWdodEJsb2NrLCBsYmxvY2ssIGxpZ2h0U3RvcmUsIFBvRikKICAgICAgaWJjLnN1Ym1pdE1pc2JlaGF2aW91clRvQ2xpZW50KGliYy5pZCwgbmV3UG9GKQogICAgICByZXR1cm4gU3VjY2VzcwogICAgIH0KICBlbHNlewogICByZXR1cm4gQ291bGROb3RHZW5lcmF0ZVBvRgogICAgIH0KICAgIH0KfQo="}}),t._v(" "),o("p",[o("strong",[t._v("TODO:")]),t._v(" finish conditions")]),t._v(" "),o("ul",[o("li",[t._v("Implementation remark")]),t._v(" "),o("li",[t._v("Expected precondition")]),t._v(" "),o("li",[t._v("Expected postcondition")]),t._v(" "),o("li",[t._v("Error condition\n"),o("ul",[o("li",[t._v("none")])])])]),t._v(" "),o("hr"),t._v(" "),o("h3",{attrs:{id:"auxiliary-functions-at-the-relayer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auxiliary-functions-at-the-relayer"}},[t._v("#")]),t._v(" Auxiliary Functions at the Relayer")]),t._v(" "),o("blockquote",[o("p",[t._v("If the relayer detects a fork, it has to compute a proof of fork that\nwill convince the IBC component. That is it has to compare the\nrelayer's local lightstore against the lightstore of the IBC\ncomponent, and find common ancestor lightblocks.")])]),t._v(" "),o("h4",{attrs:{id:"tag-common-root-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-common-root-1"}},[t._v("#")]),t._v(" [TAG-COMMON-ROOT.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjb21tb25Sb290KGxpZ2h0U3RvcmUgTGlnaHRTdG9yZSwgaWJjIElCQ0NvbXBvbmVudCwgbGJsb2NrCkxpZ2h0QmxvY2spIChMaWdodEJsb2NrLCBMaWdodEJsb2NrLCBMaWdodFN0b3JlLCBSZXN1bHQpIHsKCiAgICBhdXhMUy5Jbml0CgogICAgICAgLy8gZmlyc3Qgd2UgYXNrIGZvciB0aGUgaGVpZ2h0cyB0aGUgaWJjIGNvbXBvbmVudCBpcyBhd2FyZSBvZgogIGliY0hlaWdodHMgPSBpYmMuUXVlcnlIZWlnaHRzUmFuZ2UoCiAgICAgICAgICAgICAgICAgICAgIGliYy5pZCwKICAgICAgICAgICAgICAgICAgICAgbGlnaHRTdG9yZS5Mb3dlc3RWZXJpZmllZCgpLkhlaWdodCwKICAgICAgICAgICAgICAgICAgICAgbGJsb2NrLkhlaWdodCAtIDEpOwogIC8vIHRoaXMgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QgeWV0LiBBbHRlcm5hdGl2ZWx5LCB3ZSBtYXkKICAvLyByZXF1ZXN0IGFsbCB0cmFuc2FjdGlvbnMgdGhhdCBpbnN0YWxsZWQgaGVhZGVycyB2aWEgQ29zbW9zU0RLCiAgCgogICAgICAgIGZvciB7CiAgICAgICAgICAgIGgsIHJlc3VsdCA9IG1heChpYmNIZWlnaHRzKQogICBpZiByZXN1bHQgPSBFbXB0eSB7CiAgICAgICByZXR1cm4gKF8sIF8sIF8sIE5vUm9vdCkKICAgICAgfQogICAgICBpYmNMaWdodEJsb2NrID0gaWJjLnF1ZXJ5Q2hhaW5Db25zZW5zdXNTdGF0ZShoKQogICBhdXhMUy5VcGRhdGUoaWJjTGlnaHRCbG9jaywgU3RhdGVWZXJpZmllZCk7CiAgICAgIGNvbm5lY3RvciwgcmVzdWx0IDo9IENvbm5lY3RvcihsaWdodFN0b3JlLCBpYmNMaWdodEJsb2NrLCBsYmxvY2suSGVhZGVyLkhlaWdodCkKICAgICAgaWYgcmVzdWx0ID0gc3VjY2VzcyB7CiAgICAgICByZXR1cm4gKGliY0xpZ2h0QmxvY2ssIGNvbm5lY3RvciwgYXV4TFMsIFN1Y2Nlc3MpCiAgIH0KICAgZWxzZXsKICAgICAgIGliY0hlaWdodHMucmVtb3ZlKGgpCiAgICAgIH0KICB9Cn0K"}}),t._v(" "),o("ul",[o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("returns\n"),o("ul",[o("li",[t._v("a lightBlock b1 from the IBC component, and")]),t._v(" "),o("li",[t._v("a lightBlock b2\nfrom the local lightStore with height less than\nlblock.Header.Hight, s.t. b1 supports b2, and")]),t._v(" "),o("li",[t._v("a lightstore with the blocks downloaded from\nthe ibc component")])])])])])]),t._v(" "),o("hr"),t._v(" "),o("h4",{attrs:{id:"tag-ls-func-connect-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-ls-func-connect-1"}},[t._v("#")]),t._v(" [TAG-LS-FUNC-CONNECT.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBDb25uZWN0b3IgKGxpZ2h0U3RvcmUgTGlnaHRTdG9yZSwgbGIgTGlnaHRCbG9jaywgaCBIZWlnaHQpIChMaWdodEJsb2NrLCBib29sKQo="}}),t._v(" "),o("ul",[o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("returns a verified LightBlock from lightStore with height less\nthan "),o("em",[t._v("h")]),t._v(" that can be\nverified by lb in one step.")])])])]),t._v(" "),o("p",[o("strong",[t._v("TODO:")]),t._v(" for the above to work we need an invariant that all verified\nlightblocks form a chain of trust. Otherwise, we need a lightblock\nthat has a chain of trust to height.")]),t._v(" "),o("blockquote",[o("p",[t._v("Once the common root is found, a proof of fork that will be accepted\nby the IBC component needs to be generated. This is done in the\nfollowing function.")])]),t._v(" "),o("h4",{attrs:{id:"tag-extend-pof-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-extend-pof-1"}},[t._v("#")]),t._v(" [TAG-EXTEND-POF.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBleHRlbmRQb0YgKHJvb3QgTGlnaHRCbG9jaywKICAgICAgICAgICAgICAgIGNvbm5lY3RvciBMaWdodEJsb2NrLAogICAgbGlnaHRTdG9yZSBMaWdodFN0b3JlLAogICAgUG9mIExpZ2h0Tm9kZVByb29mb2ZGb3JrKSAoTGlnaHROb2RlUHJvb2ZvZkZvcmt9Cg=="}}),t._v(" "),o("ul",[o("li",[t._v("Implementation remark\n"),o("ul",[o("li",[t._v("PoF is not sufficient to convince an IBC component, so we extend\nthe proof of fork farther in the past")])])]),t._v(" "),o("li",[t._v("Expected postcondition\n"),o("ul",[o("li",[t._v("returns a newPOF:\n"),o("ul",[o("li",[t._v("newPoF.TrustedBlock = root")]),t._v(" "),o("li",[t._v("let prefix =\nconnector +\nlightStore.Subtrace(connector.Header.Height, PoF.TrustedBlock.Header.Height-1) +\nPoF.TrustedBlock\n"),o("ul",[o("li",[t._v("newPoF.PrimaryTrace = prefix + PoF.PrimaryTrace")]),t._v(" "),o("li",[t._v("newPoF.SecondaryTrace = prefix + PoF.SecondaryTrace")])])])])])])])]),t._v(" "),o("h3",{attrs:{id:"detection-a-fork-at-the-ibc-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detection-a-fork-at-the-ibc-component"}},[t._v("#")]),t._v(" Detection a fork at the IBC component")]),t._v(" "),o("p",[t._v("The following functions is assumed to be called regularly to check\nthat latest consensus state of the IBC component. Alternatively, this\nlogic can be executed whenever the relayer is informed (via an event)\nthat a new header has been installed.")]),t._v(" "),o("h4",{attrs:{id:"tag-handler-detect-fork-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tag-handler-detect-fork-1"}},[t._v("#")]),t._v(" [TAG-HANDLER-DETECT-FORK.1]")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZXRlY3RJQkNGb3JrKGliYyBJQkNDb21wb25lbnQsIGxpZ2h0U3RvcmUgTGlnaHRTdG9yZSkgKExpZ2h0Tm9kZVByb29mT2ZGb3JrLCBFcnJvcikgewogICAgY3MgPSBpYmMucXVlcnlDbGllbnRTdGF0ZShpYmMpOwogbGIsIGZvdW5kIDo9IGxpZ2h0U3RvcmUuR2V0KGNzLkhlYWRlci5IZWlnaHQpCiAgICBpZiAhZm91bmQgewogKipUT0RPOioqIG5lZWQgdmVyaWZ5IHRvIHRhcmdldAogICAgICAgIGxiLCByZXN1bHQgPSBMaWdodENsaWVudC5NYWluKHByaW1hcnksIGxpZ2h0U3RvcmUsIGNzLkhlYWRlci5IZWlnaHQpCiAgLy8gW0xDVi1GVU5DLUlCQ01BSU4uMV0KICAqKlRPRE8qKiBkZWNpZGUgd2hhdCB0byBkbyBmb2xsb3dpbmcgdGhlIG91dGNvbWUgb2YgSXNzdWUgIzQ5OQogIAogIC8vIEkgZ3Vlc3MgaGVyZSB3ZSBoYXZlIHRvIGdldCBpbnRvIHRoZSBsaWdodCBjbGllbnQKCiAgICB9CiBpZiBjcyAhPSBsYiB7CiAgICAgLy8gSUJDIGNvbXBvbmVudCBkaXNhZ3JlZXMgd2l0aCBteSBwcmltYXJ5LgogIC8vIEkgZmV0Y2ggdGhlCiAgICAgaWJjTGlnaHRCbG9jaywgbGJsb2NrLCBpYmNTdG9yZSwgcmVzdWx0IDo9IGNvbW1vblJvb3QobGlnaHRTdG9yZSwgaWJjLCBsYikKICBwb2YgPSBuZXcgTGlnaHROb2RlUHJvb2ZPZkZvcms7CiAgcG9mLlRydXN0ZWRCbG9jayA6PSBpYmNMaWdodEJsb2NrCiAgcG9mLlByaW1hcnlUcmFjZSA6PSBpYmNTdG9yZSArIGNzCiAgcG9mLlNlY29uZGFyeVRyYWNlIDo9ICBsaWdodFN0b3JlLlN1YnRyYWNlKGxibG9jay5IZWFkZXIuSGVpZ2h0LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYi5IZWFkZXIuSGVpZ2h0KTsKICAgICAgICByZXR1cm4ocG9mLCBGb3JrKQogfQogcmV0dXJuKG5pbCAsIE5vRm9yaykKfQo="}}),t._v(" "),o("p",[o("strong",[t._v("TODO:")]),t._v(" finish conditions")]),t._v(" "),o("ul",[o("li",[t._v("Implementation remark\n"),o("ul",[o("li",[t._v("we ask the handler for the lastest check. Cross-check with the\nchain. In case they deviate we generate PoF.")]),t._v(" "),o("li",[t._v("we assume IBC component is correct. It has verified the\nconsensus state")])])]),t._v(" "),o("li",[t._v("Expected precondition")]),t._v(" "),o("li",[t._v("Expected postcondition")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);