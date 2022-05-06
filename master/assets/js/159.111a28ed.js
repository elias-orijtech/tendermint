(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{733:function(e,a,t){"use strict";t.r(a);var s=t(1),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rfc-009-consensus-parameter-upgrade-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rfc-009-consensus-parameter-upgrade-considerations"}},[e._v("#")]),e._v(" RFC 009 : Consensus Parameter Upgrade Considerations")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("06-Jan-2011: Initial draft (@williambanfield).")])]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("This document discusses the challenges of adding additional consensus parameters\nto Tendermint and proposes a few solutions that can enable addition of consensus\nparameters in a backwards-compatible way.")]),e._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[e._v("This section provides an overview of the issues of adding consensus parameters\nto Tendermint.")]),e._v(" "),t("h3",{attrs:{id:"hash-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-compatibility"}},[e._v("#")]),e._v(" Hash Compatibility")]),e._v(" "),t("p",[e._v("Tendermint produces a hash of a subset of the consensus parameters. The values\nthat are hashed currently are the "),t("code",[e._v("BlockMaxGas")]),e._v(" and the "),t("code",[e._v("BlockMaxSize")]),e._v(". These\nare currently in the "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/0ae974e63911804d4a2007bd8a9b3ad81d6d2a90/types/params.go#L49",target:"_blank",rel:"noopener noreferrer"}},[e._v("HashedParams struct"),t("OutboundLink")],1),e._v(". This hash is included\nin the block and validators use it to validate that their local view of the consensus\nparameters matches what the rest of the network is configured with.")]),e._v(" "),t("p",[e._v("Any new consensus parameters added to Tendermint should be included in this\nhash. This presents a challenge for verification of historical blocks when consensus\nparameters are added. If a network produced blocks with a version of Tendermint that\ndid not yet have the new consensus parameters, the parameter hash it produced will\nnot reference the new parameters. Any nodes joining the network with the newer\nversion of Tendermint will have the new consensus parameters. Tendermint will need\nto handle this case so that new versions of Tendermint with new consensus parameters\ncan still validate old blocks correctly without having to do anything overly complex\nor hacky.")]),e._v(" "),t("h3",{attrs:{id:"allowing-developer-defined-values-and-the-endblock-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allowing-developer-defined-values-and-the-endblock-problem"}},[e._v("#")]),e._v(" Allowing Developer-Defined Values and the "),t("code",[e._v("EndBlock")]),e._v(" Problem")]),e._v(" "),t("p",[e._v("When new consensus parameters are added, application developers may wish to set\nvalues for them so that the developer-defined values may be used as soon as the\nsoftware upgrades. We do not currently have a clean mechanism for handling this.")]),e._v(" "),t("p",[e._v("Consensus parameter updates are communicated from the application to Tendermint\nwithin "),t("code",[e._v("EndBlock")]),e._v(" of some height "),t("code",[e._v("H")]),e._v(" and take effect at the next height, "),t("code",[e._v("H+1")]),e._v(".\nThis means that for updates that add a consensus parameter, there is a single\nheight where the new parameters cannot take effect. The parameters did not exist\nin the version of the software that emitted the "),t("code",[e._v("EndBlock")]),e._v(" response for height "),t("code",[e._v("H-1")]),e._v(",\nso they cannot take effect at height "),t("code",[e._v("H")]),e._v(". The first height that the updated params\ncan take effect is height "),t("code",[e._v("H+1")]),e._v(". As of now, height "),t("code",[e._v("H")]),e._v(" must run with the defaults.")]),e._v(" "),t("h2",{attrs:{id:"discussion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),t("h3",{attrs:{id:"hash-compatibility-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-compatibility-2"}},[e._v("#")]),e._v(" Hash Compatibility")]),e._v(" "),t("p",[e._v("This section discusses possible solutions to the problem of maintaining backwards-compatibility\nof hashed parameters while adding new parameters.")]),e._v(" "),t("h4",{attrs:{id:"never-hash-defaults"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#never-hash-defaults"}},[e._v("#")]),e._v(" Never Hash Defaults")]),e._v(" "),t("p",[e._v("One solution to the problem of backwards-compatibility is to never include parameters\nin the hash if the are using the default value. This means that blocks produced\nbefore the parameters existed will have implicitly been created with the defaults.\nThis works because any software with newer versions of Tendermint must be using the\ndefaults for new parameters when validating old blocks since the defaults can not\nhave been updated until a height at which the parameters existed.")]),e._v(" "),t("h4",{attrs:{id:"only-update-hashedparams-on-hash-breaking-releases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#only-update-hashedparams-on-hash-breaking-releases"}},[e._v("#")]),e._v(" Only Update HashedParams on Hash-Breaking Releases")]),e._v(" "),t("p",[e._v("An alternate solution to never hashing defaults is to not update the hashed\nparameters on non-hash-breaking releases. This means that when new consensus\nparameters are added to Tendermint, there may be a release that makes use of the\nparameters but does not verify that they are the same across all validators by\nreferencing them in the hash. This seems reasonably safe given the fact that\nonly a very far subset of the consensus parameters are currently verified at all.")]),e._v(" "),t("h4",{attrs:{id:"version-the-consensus-parameter-hash-scheme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-the-consensus-parameter-hash-scheme"}},[e._v("#")]),e._v(" Version The Consensus Parameter Hash Scheme")]),e._v(" "),t("p",[e._v("The upcoming work on "),t("a",{attrs:{href:"https://github.com/tendermint/spec/pull/222",target:"_blank",rel:"noopener noreferrer"}},[e._v("soft upgrades"),t("OutboundLink")],1),e._v("\nproposes applying different hashing rules depending on the active block version.\nThe consensus parameter hash could be versioned in the same way. When different\nblock versions are used, a different set of consensus parameters will be included\nin the hash.")]),e._v(" "),t("h3",{attrs:{id:"developer-defined-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-defined-values"}},[e._v("#")]),e._v(" Developer Defined Values")]),e._v(" "),t("p",[e._v("This section discusses possible solutions to the problem of allowing application\ndevelopers to define values for the new parameters during the upgrade that adds\nthe parameters.")]),e._v(" "),t("h4",{attrs:{id:"using-initchain-for-new-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-initchain-for-new-values"}},[e._v("#")]),e._v(" Using "),t("code",[e._v("InitChain")]),e._v(" for New Values")]),e._v(" "),t("p",[e._v("One solution to the problem of allowing application developers to define values\nfor new consensus parameters is to call the "),t("code",[e._v("InitChain")]),e._v(" ABCI method on application\nstartup and fetch the value for any new consensus parameters. The "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/0ae974e63911804d4a2007bd8a9b3ad81d6d2a90/abci/types/types.pb.go#L1616",target:"_blank",rel:"noopener noreferrer"}},[e._v("response object"),t("OutboundLink")],1),e._v("\ncontains a field for "),t("code",[e._v("ConsensusParameter")]),e._v(" updates so this may serve as a natural place\nto put this logic.")]),e._v(" "),t("p",[e._v("This poses a few difficulties. Nodes replaying old blocks while running new\nsoftware do not ever call "),t("code",[e._v("InitChain")]),e._v(" after the initial time. They will therefore\nnot have a way to determine that the parameters changed at some height by using a\ncall to "),t("code",[e._v("InitChain")]),e._v(". The "),t("code",[e._v("EndBlock")]),e._v(" response is how parameter changes at a height\nare currently communicated to Tendermint and conflating these cases seems risky.")]),e._v(" "),t("h4",{attrs:{id:"force-defaults-for-single-height"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-defaults-for-single-height"}},[e._v("#")]),e._v(" Force Defaults For Single Height")]),e._v(" "),t("p",[e._v("An alternate option is to not use "),t("code",[e._v("InitChain")]),e._v(" and instead require chains to use the\ndefault values of the new parameters for a single height.")]),e._v(" "),t("p",[e._v("As documented in the upcoming "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/7503",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-74"),t("OutboundLink")],1),e._v(", popular chains often simply use the default\nvalues. Additionally, great care is being taken to ensure that logic governed by upcoming\nconsensus parameters is not liveness-breaking. This means that, at worst-case,\nchains will experience a single slow height while waiting for the new values to\nby applied.")]),e._v(" "),t("h4",{attrs:{id:"add-a-new-upgradechain-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-upgradechain-method"}},[e._v("#")]),e._v(" Add a new "),t("code",[e._v("UpgradeChain")]),e._v(" method")]),e._v(" "),t("p",[e._v("An additional method for allowing chains to update the consensus parameters that\ndo not yet exist is to add a new "),t("code",[e._v("UpgradeChain")]),e._v(" method to "),t("code",[e._v("ABCI")]),e._v(". The upgrade chain\nmethod would be called when the chain detects that the version of block that it\nis about to produce does not match the previous block. This method would be called\nafter "),t("code",[e._v("EndBlock")]),e._v(" and would return the set of consensus parameters to use at the\nnext height. It would therefore give an application the chance to set the new\nconsensus parameters before running a height with these new parameter.")]),e._v(" "),t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])])}),[],!1,null,null,null);a.default=n.exports}}]);