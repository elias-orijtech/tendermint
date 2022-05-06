(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{634:function(e,t,a){"use strict";a.r(t);var g=a(0),n=Object(g.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-an-application-in-kotlin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-application-in-kotlin"}},[e._v("#")]),e._v(" Creating an application in Kotlin")]),e._v(" "),a("h2",{attrs:{id:"guide-assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide Assumptions")]),e._v(" "),a("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),a("p",[e._v("Tendermint Core is Byzantine Fault Tolerant (BFT) middleware that takes a state\ntransition machine (your application) - written in any programming language - and securely\nreplicates it on many machines.")]),e._v(" "),a("p",[e._v("By following along with this guide, you'll create a Tendermint Core project\ncalled kvstore, a (very) simple distributed BFT key-value store. The application (which should\nimplementing the blockchain interface (ABCI)) will be written in Kotlin.")]),e._v(" "),a("p",[e._v("This guide assumes that you are not new to JVM world. If you are new please see "),a("a",{attrs:{href:"https://hadihariri.com/2013/12/29/jvm-minimal-survival-guide-for-the-dotnet-developer/#java-the-language-java-the-ecosystem-java-the-jvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JVM Minimal Survival Guide"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://docs.gradle.org/current/userguide/userguide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle Docs"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"built-in-app-vs-external-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-app-vs-external-app"}},[e._v("#")]),e._v(" Built-in app vs external app")]),e._v(" "),a("p",[e._v("If you use Golang, you can run your app and Tendermint Core in the same process to get maximum performance.\n"),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),a("OutboundLink")],1),e._v(" is written this way.\nPlease refer to "),a("RouterLink",{attrs:{to:"/guides/go-built-in.html"}},[e._v("Writing a built-in Tendermint Core application in Go")]),e._v(" guide for details.")],1),e._v(" "),a("p",[e._v("If you choose another language, like we did in this guide, you have to write a separate app,\nwhich will communicate with Tendermint Core via a socket (UNIX or TCP) or gRPC.\nThis guide will show you how to build external application using RPC server.")]),e._v(" "),a("p",[e._v("Having a separate application might give you better security guarantees as two\nprocesses would be communicating via established binary protocol. Tendermint\nCore will not have access to application's state.")]),e._v(" "),a("h2",{attrs:{id:"_1-1-installing-java-and-gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-java-and-gradle"}},[e._v("#")]),e._v(" 1.1 Installing Java and Gradle")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Oracle's guide for installing JDK"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Verify that you have installed Java successfully:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBqYXZhIC12ZXJzaW9uCmphdmEgdmVyc2lvbiAmcXVvdDsxLjguMF8xNjImcXVvdDsKSmF2YShUTSkgU0UgUnVudGltZSBFbnZpcm9ubWVudCAoYnVpbGQgMS44LjBfMTYyLWIxMikKSmF2YSBIb3RTcG90KFRNKSA2NC1CaXQgU2VydmVyIFZNIChidWlsZCAyNS4xNjItYjEyLCBtaXhlZCBtb2RlKQo="}}),e._v(" "),a("p",[e._v("You can choose any version of Java higher or equal to 8.\nIn my case it is Java SE Development Kit 8.")]),e._v(" "),a("p",[e._v("Make sure you have "),a("code",[e._v("$JAVA_HOME")]),e._v(" environment variable set:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICRKQVZBX0hPTUUKL0xpYnJhcnkvSmF2YS9KYXZhVmlydHVhbE1hY2hpbmVzL2pkazEuOC4wXzE2Mi5qZGsvQ29udGVudHMvSG9tZQo="}}),e._v(" "),a("p",[e._v("For Gradle installation, please refer to "),a("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("their official guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_1-2-creating-a-new-kotlin-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-kotlin-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Kotlin project")]),e._v(" "),a("p",[e._v("We'll start by creating a new Gradle project.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBleHBvcnQgS1ZTVE9SRV9IT01FPX4va3ZzdG9yZQokIG1rZGlyICRLVlNUT1JFX0hPTUUKJCBjZCAkS1ZTVE9SRV9IT01FCg=="}}),e._v(" "),a("p",[e._v("Inside the example directory run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z3JhZGxlIGluaXQgLS1kc2wgZ3Jvb3Z5IC0tcGFja2FnZSBpby5leGFtcGxlIC0tcHJvamVjdC1uYW1lIGV4YW1wbGUgLS10eXBlIGtvdGxpbi1hcHBsaWNhdGlvbgo="}}),e._v(" "),a("p",[e._v("This will create a new project for you. The tree of files should look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB0cmVlCi4KfC0tIGJ1aWxkLmdyYWRsZQp8LS0gZ3JhZGxlCnwgICBgLS0gd3JhcHBlcgp8ICAgICAgIHwtLSBncmFkbGUtd3JhcHBlci5qYXIKfCAgICAgICBgLS0gZ3JhZGxlLXdyYXBwZXIucHJvcGVydGllcwp8LS0gZ3JhZGxldwp8LS0gZ3JhZGxldy5iYXQKfC0tIHNldHRpbmdzLmdyYWRsZQpgLS0gc3JjCiAgICB8LS0gbWFpbgogICAgfCAgIHwtLSBrb3RsaW4KICAgIHwgICB8ICAgYC0tIGlvCiAgICB8ICAgfCAgICAgICBgLS0gZXhhbXBsZQogICAgfCAgIHwgICAgICAgICAgIGAtLSBBcHAua3QKICAgIHwgICBgLS0gcmVzb3VyY2VzCiAgICBgLS0gdGVzdAogICAgICAgIHwtLSBrb3RsaW4KICAgICAgICB8ICAgYC0tIGlvCiAgICAgICAgfCAgICAgICBgLS0gZXhhbXBsZQogICAgICAgIHwgICAgICAgICAgIGAtLSBBcHBUZXN0Lmt0CiAgICAgICAgYC0tIHJlc291cmNlcwo="}}),e._v(" "),a("p",[e._v('When run, this should print "Hello world." to the standard output.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL2dyYWRsZXcgcnVuCiZndDsgVGFzayA6cnVuCkhlbGxvIHdvcmxkLgo="}}),e._v(" "),a("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),a("p",[e._v("Tendermint Core communicates with the application through the Application\nBlockChain Interface (ABCI). All message types are defined in the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/types/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),a("OutboundLink")],1),e._v(".\nThis allows Tendermint Core to run applications written in any programming\nlanguage.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-1-compile-proto-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-compile-proto-files"}},[e._v("#")]),e._v(" 1.3.1 Compile .proto files")]),e._v(" "),a("p",[e._v("Add the following piece to the top of the "),a("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"YnVpbGRzY3JpcHQgewogICAgcmVwb3NpdG9yaWVzIHsKICAgICAgICBtYXZlbkNlbnRyYWwoKQogICAgfQogICAgZGVwZW5kZW5jaWVzIHsKICAgICAgICBjbGFzc3BhdGggJ2NvbS5nb29nbGUucHJvdG9idWY6cHJvdG9idWYtZ3JhZGxlLXBsdWdpbjowLjguOCcKICAgIH0KfQo="}}),e._v(" "),a("p",[e._v("Enable the protobuf plugin in the "),a("code",[e._v("plugins")]),e._v(" section of the "),a("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"cGx1Z2lucyB7CiAgICBpZCAnY29tLmdvb2dsZS5wcm90b2J1ZicgdmVyc2lvbiAnMC44LjgnCn0K"}}),e._v(" "),a("p",[e._v("Add the following code to "),a("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"cHJvdG9idWYgewogICAgcHJvdG9jIHsKICAgICAgICBhcnRpZmFjdCA9ICZxdW90O2NvbS5nb29nbGUucHJvdG9idWY6cHJvdG9jOjMuNy4xJnF1b3Q7CiAgICB9CiAgICBwbHVnaW5zIHsKICAgICAgICBncnBjIHsKICAgICAgICAgICAgYXJ0aWZhY3QgPSAnaW8uZ3JwYzpwcm90b2MtZ2VuLWdycGMtamF2YToxLjIyLjEnCiAgICAgICAgfQogICAgfQogICAgZ2VuZXJhdGVQcm90b1Rhc2tzIHsKICAgICAgICBhbGwoKSoucGx1Z2lucyB7CiAgICAgICAgICAgIGdycGMge30KICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),a("p",[e._v("Now we should be ready to compile the "),a("code",[e._v("*.proto")]),e._v(" files.")]),e._v(" "),a("p",[e._v("Copy the necessary "),a("code",[e._v(".proto")]),e._v(" files to your project:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWtkaXIgLXAgXAogICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyBcCiAgJEtWU1RPUkVfSE9NRS9zcmMvbWFpbi9wcm90by9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jcnlwdG8vbWVya2xlIFwKICAkS1ZTVE9SRV9IT01FL3NyYy9tYWluL3Byb3RvL2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMva3YgXAogICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90bwoKY3AgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcy90eXBlcy5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcy90eXBlcy5wcm90bwpjcCAkR09QQVRIL3NyYy9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jcnlwdG8vbWVya2xlL21lcmtsZS5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvY3J5cHRvL21lcmtsZS9tZXJrbGUucHJvdG8KY3AgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9rdi90eXBlcy5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9rdi90eXBlcy5wcm90bwpjcCAkR09QQVRIL3NyYy9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ28ucHJvdG8gXAogICAkS1ZTVE9SRV9IT01FL3NyYy9tYWluL3Byb3RvL2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9nb2dvcHJvdG8vZ29nby5wcm90bwo="}}),e._v(" "),a("p",[e._v("Add these dependencies to "),a("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"ZGVwZW5kZW5jaWVzIHsKICAgIGltcGxlbWVudGF0aW9uICdpby5ncnBjOmdycGMtcHJvdG9idWY6MS4yMi4xJwogICAgaW1wbGVtZW50YXRpb24gJ2lvLmdycGM6Z3JwYy1uZXR0eS1zaGFkZWQ6MS4yMi4xJwogICAgaW1wbGVtZW50YXRpb24gJ2lvLmdycGM6Z3JwYy1zdHViOjEuMjIuMScKfQo="}}),e._v(" "),a("p",[e._v("To generate all protobuf-type classes run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9ncmFkbGV3IGdlbmVyYXRlUHJvdG8K"}}),e._v(" "),a("p",[e._v("To verify that everything went smoothly, you can inspect the "),a("code",[e._v("build/generated/")]),e._v(" directory:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB0cmVlIGJ1aWxkL2dlbmVyYXRlZC8KYnVpbGQvZ2VuZXJhdGVkLwpgLS0gc291cmNlCiAgICBgLS0gcHJvdG8KICAgICAgICBgLS0gbWFpbgogICAgICAgICAgICB8LS0gZ3JwYwogICAgICAgICAgICB8ICAgYC0tIHR5cGVzCiAgICAgICAgICAgIHwgICAgICAgYC0tIEFCQ0lBcHBsaWNhdGlvbkdycGMuamF2YQogICAgICAgICAgICBgLS0gamF2YQogICAgICAgICAgICAgICAgfC0tIGNvbQogICAgICAgICAgICAgICAgfCAgIGAtLSBnb29nbGUKICAgICAgICAgICAgICAgIHwgICAgICAgYC0tIHByb3RvYnVmCiAgICAgICAgICAgICAgICB8ICAgICAgICAgICBgLS0gR29Hb1Byb3Rvcy5qYXZhCiAgICAgICAgICAgICAgICB8LS0gY29tbW9uCiAgICAgICAgICAgICAgICB8ICAgYC0tIFR5cGVzLmphdmEKICAgICAgICAgICAgICAgIHwtLSBtZXJrbGUKICAgICAgICAgICAgICAgIHwgICBgLS0gTWVya2xlLmphdmEKICAgICAgICAgICAgICAgIGAtLSB0eXBlcwogICAgICAgICAgICAgICAgICAgIGAtLSBUeXBlcy5qYXZhCg=="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-2-implementing-abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-implementing-abci"}},[e._v("#")]),e._v(" 1.3.2 Implementing ABCI")]),e._v(" "),a("p",[e._v("The resulting "),a("code",[e._v("$KVSTORE_HOME/build/generated/source/proto/main/grpc/types/ABCIApplicationGrpc.java")]),e._v(" file\ncontains the abstract class "),a("code",[e._v("ABCIApplicationImplBase")]),e._v(", which is an interface we'll need to implement.")]),e._v(" "),a("p",[e._v("Create "),a("code",[e._v("$KVSTORE_HOME/src/main/kotlin/io/example/KVStoreApp.kt")]),e._v(" file with the following content:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"cGFja2FnZSBpby5leGFtcGxlCgppbXBvcnQgaW8uZ3JwYy5zdHViLlN0cmVhbU9ic2VydmVyCmltcG9ydCB0eXBlcy5BQkNJQXBwbGljYXRpb25HcnBjCmltcG9ydCB0eXBlcy5UeXBlcy4qCgpjbGFzcyBLVlN0b3JlQXBwIDogQUJDSUFwcGxpY2F0aW9uR3JwYy5BQkNJQXBwbGljYXRpb25JbXBsQmFzZSgpIHsKCiAgICAvLyBtZXRob2RzIGltcGxlbWVudGF0aW9uCgp9Cg=="}}),e._v(" "),a("p",[e._v("Now I will go through each method of "),a("code",[e._v("ABCIApplicationImplBase")]),e._v(" explaining when it's called and adding\nrequired business logic.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-3-checktx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-checktx"}},[e._v("#")]),e._v(" 1.3.3 CheckTx")]),e._v(" "),a("p",[e._v("When a new transaction is added to the Tendermint Core, it will ask the\napplication to check it (validate the format, signatures, etc.).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"b3ZlcnJpZGUgZnVuIGNoZWNrVHgocmVxOiBSZXF1ZXN0Q2hlY2tUeCwgcmVzcG9uc2VPYnNlcnZlcjogU3RyZWFtT2JzZXJ2ZXImbHQ7UmVzcG9uc2VDaGVja1R4Jmd0OykgewogICAgdmFsIGNvZGUgPSByZXEudHgudmFsaWRhdGUoKQogICAgdmFsIHJlc3AgPSBSZXNwb25zZUNoZWNrVHgubmV3QnVpbGRlcigpCiAgICAgICAgICAgIC5zZXRDb2RlKGNvZGUpCiAgICAgICAgICAgIC5zZXRHYXNXYW50ZWQoMSkKICAgICAgICAgICAgLmJ1aWxkKCkKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApCiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCkKfQoKcHJpdmF0ZSBmdW4gQnl0ZVN0cmluZy52YWxpZGF0ZSgpOiBJbnQgewogICAgdmFsIHBhcnRzID0gdGhpcy5zcGxpdCgnPScpCiAgICBpZiAocGFydHMuc2l6ZSAhPSAyKSB7CiAgICAgICAgcmV0dXJuIDEKICAgIH0KICAgIHZhbCBrZXkgPSBwYXJ0c1swXQogICAgdmFsIHZhbHVlID0gcGFydHNbMV0KCiAgICAvLyBjaGVjayBpZiB0aGUgc2FtZSBrZXk9dmFsdWUgYWxyZWFkeSBleGlzdHMKICAgIHZhbCBzdG9yZWQgPSBnZXRQZXJzaXN0ZWRWYWx1ZShrZXkpCiAgICBpZiAoc3RvcmVkICE9IG51bGwgJmFtcDsmYW1wOyBzdG9yZWQuY29udGVudEVxdWFscyh2YWx1ZSkpIHsKICAgICAgICByZXR1cm4gMgogICAgfQoKICAgIHJldHVybiAwCn0KCnByaXZhdGUgZnVuIEJ5dGVTdHJpbmcuc3BsaXQoc2VwYXJhdG9yOiBDaGFyKTogTGlzdCZsdDtCeXRlQXJyYXkmZ3Q7IHsKICAgIHZhbCBhcnIgPSB0aGlzLnRvQnl0ZUFycmF5KCkKICAgIHZhbCBpID0gKDAgdW50aWwgdGhpcy5zaXplKCkpLmZpcnN0T3JOdWxsIHsgYXJyW2l0XSA9PSBzZXBhcmF0b3IudG9CeXRlKCkgfQogICAgICAgICAgICA/OiByZXR1cm4gZW1wdHlMaXN0KCkKICAgIHJldHVybiBsaXN0T2YoCiAgICAgICAgICAgIHRoaXMuc3Vic3RyaW5nKDAsIGkpLnRvQnl0ZUFycmF5KCksCiAgICAgICAgICAgIHRoaXMuc3Vic3RyaW5nKGkgKyAxKS50b0J5dGVBcnJheSgpCiAgICApCn0K"}}),e._v(" "),a("p",[e._v("Don't worry if this does not compile yet.")]),e._v(" "),a("p",[e._v("If the transaction does not have a form of "),a("code",[e._v("{bytes}={bytes}")]),e._v(", we return "),a("code",[e._v("1")]),e._v("\ncode. When the same key=value already exist (same key and value), we return "),a("code",[e._v("2")]),e._v("\ncode. For others, we return a zero code indicating that they are valid.")]),e._v(" "),a("p",[e._v("Note that anything with non-zero code will be considered invalid ("),a("code",[e._v("-1")]),e._v(", "),a("code",[e._v("100")]),e._v(",\netc.) by Tendermint Core.")]),e._v(" "),a("p",[e._v("Valid transactions will eventually be committed given they are not too big and\nhave enough gas. To learn more about gas, check out "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/apps.html#gas",target:"_blank",rel:"noopener noreferrer"}},[e._v('"the\nspecification"'),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For the underlying key-value store we'll use\n"),a("a",{attrs:{href:"https://github.com/JetBrains/xodus",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains Xodus"),a("OutboundLink")],1),e._v(", which is a transactional schema-less embedded high-performance database written in Java.")]),e._v(" "),a("p",[a("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"ZGVwZW5kZW5jaWVzIHsKICAgIGltcGxlbWVudGF0aW9uICdvcmcuamV0YnJhaW5zLnhvZHVzOnhvZHVzLWVudmlyb25tZW50OjEuMy45MScKfQo="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"Li4uCmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLkFycmF5Qnl0ZUl0ZXJhYmxlCmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLmVudi5FbnZpcm9ubWVudAppbXBvcnQgamV0YnJhaW5zLmV4b2R1cy5lbnYuU3RvcmUKaW1wb3J0IGpldGJyYWlucy5leG9kdXMuZW52LlN0b3JlQ29uZmlnCmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLmVudi5UcmFuc2FjdGlvbgoKY2xhc3MgS1ZTdG9yZUFwcCgKICAgIHByaXZhdGUgdmFsIGVudjogRW52aXJvbm1lbnQKKSA6IEFCQ0lBcHBsaWNhdGlvbkdycGMuQUJDSUFwcGxpY2F0aW9uSW1wbEJhc2UoKSB7CgogICAgcHJpdmF0ZSB2YXIgdHhuOiBUcmFuc2FjdGlvbj8gPSBudWxsCiAgICBwcml2YXRlIHZhciBzdG9yZTogU3RvcmU/ID0gbnVsbAoKICAgIC4uLgoKICAgIHByaXZhdGUgZnVuIGdldFBlcnNpc3RlZFZhbHVlKGs6IEJ5dGVBcnJheSk6IEJ5dGVBcnJheT8gewogICAgICAgIHJldHVybiBlbnYuY29tcHV0ZUluUmVhZG9ubHlUcmFuc2FjdGlvbiB7IHR4biAtJmd0OwogICAgICAgICAgICB2YWwgc3RvcmUgPSBlbnYub3BlblN0b3JlKCZxdW90O3N0b3JlJnF1b3Q7LCBTdG9yZUNvbmZpZy5XSVRIT1VUX0RVUExJQ0FURVMsIHR4bikKICAgICAgICAgICAgc3RvcmUuZ2V0KHR4biwgQXJyYXlCeXRlSXRlcmFibGUoaykpPy5ieXRlc1Vuc2FmZQogICAgICAgIH0KICAgIH0KfQo="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-4-beginblock-delivertx-endblock-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.4 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),a("p",[e._v("When Tendermint Core has decided on the block, it's transferred to the\napplication in 3 parts: "),a("code",[e._v("BeginBlock")]),e._v(", one "),a("code",[e._v("DeliverTx")]),e._v(" per transaction and\n"),a("code",[e._v("EndBlock")]),e._v(" in the end. "),a("code",[e._v("DeliverTx")]),e._v(" are being transferred asynchronously, but the\nresponses are expected to come in order.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"b3ZlcnJpZGUgZnVuIGJlZ2luQmxvY2socmVxOiBSZXF1ZXN0QmVnaW5CbG9jaywgcmVzcG9uc2VPYnNlcnZlcjogU3RyZWFtT2JzZXJ2ZXImbHQ7UmVzcG9uc2VCZWdpbkJsb2NrJmd0OykgewogICAgdHhuID0gZW52LmJlZ2luVHJhbnNhY3Rpb24oKQogICAgc3RvcmUgPSBlbnYub3BlblN0b3JlKCZxdW90O3N0b3JlJnF1b3Q7LCBTdG9yZUNvbmZpZy5XSVRIT1VUX0RVUExJQ0FURVMsIHR4biEhKQogICAgdmFsIHJlc3AgPSBSZXNwb25zZUJlZ2luQmxvY2submV3QnVpbGRlcigpLmJ1aWxkKCkKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApCiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCkKfQo="}}),e._v(" "),a("p",[e._v("Here we begin a new transaction, which will accumulate the block's transactions and open the corresponding store.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"b3ZlcnJpZGUgZnVuIGRlbGl2ZXJUeChyZXE6IFJlcXVlc3REZWxpdmVyVHgsIHJlc3BvbnNlT2JzZXJ2ZXI6IFN0cmVhbU9ic2VydmVyJmx0O1Jlc3BvbnNlRGVsaXZlclR4Jmd0OykgewogICAgdmFsIGNvZGUgPSByZXEudHgudmFsaWRhdGUoKQogICAgaWYgKGNvZGUgPT0gMCkgewogICAgICAgIHZhbCBwYXJ0cyA9IHJlcS50eC5zcGxpdCgnPScpCiAgICAgICAgdmFsIGtleSA9IEFycmF5Qnl0ZUl0ZXJhYmxlKHBhcnRzWzBdKQogICAgICAgIHZhbCB2YWx1ZSA9IEFycmF5Qnl0ZUl0ZXJhYmxlKHBhcnRzWzFdKQogICAgICAgIHN0b3JlISEucHV0KHR4biEhLCBrZXksIHZhbHVlKQogICAgfQogICAgdmFsIHJlc3AgPSBSZXNwb25zZURlbGl2ZXJUeC5uZXdCdWlsZGVyKCkKICAgICAgICAgICAgLnNldENvZGUoY29kZSkKICAgICAgICAgICAgLmJ1aWxkKCkKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApCiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCkKfQo="}}),e._v(" "),a("p",[e._v("If the transaction is badly formatted or the same key=value already exist, we\nagain return the non-zero code. Otherwise, we add it to the store.")]),e._v(" "),a("p",[e._v("In the current design, a block can include incorrect transactions (those who\npassed "),a("code",[e._v("CheckTx")]),e._v(", but failed "),a("code",[e._v("DeliverTx")]),e._v(" or transactions included by the proposer\ndirectly). This is done for performance reasons.")]),e._v(" "),a("p",[e._v("Note we can't commit transactions inside the "),a("code",[e._v("DeliverTx")]),e._v(" because in such case\n"),a("code",[e._v("Query")]),e._v(", which may be called in parallel, will return inconsistent data (i.e.\nit will report that some value already exist even when the actual block was not\nyet committed).")]),e._v(" "),a("p",[a("code",[e._v("Commit")]),e._v(" instructs the application to persist the new state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"b3ZlcnJpZGUgZnVuIGNvbW1pdChyZXE6IFJlcXVlc3RDb21taXQsIHJlc3BvbnNlT2JzZXJ2ZXI6IFN0cmVhbU9ic2VydmVyJmx0O1Jlc3BvbnNlQ29tbWl0Jmd0OykgewogICAgdHhuISEuY29tbWl0KCkKICAgIHZhbCByZXNwID0gUmVzcG9uc2VDb21taXQubmV3QnVpbGRlcigpCiAgICAgICAgICAgIC5zZXREYXRhKEJ5dGVTdHJpbmcuY29weUZyb20oQnl0ZUFycmF5KDgpKSkKICAgICAgICAgICAgLmJ1aWxkKCkKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApCiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCkKfQo="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-5-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-query"}},[e._v("#")]),e._v(" 1.3.5 Query")]),e._v(" "),a("p",[e._v("Now, when the client wants to know whenever a particular key/value exist, it\nwill call Tendermint Core RPC "),a("code",[e._v("/abci_query")]),e._v(" endpoint, which in turn will call\nthe application's "),a("code",[e._v("Query")]),e._v(" method.")]),e._v(" "),a("p",[e._v("Applications are free to provide their own APIs. But by using Tendermint Core\nas a proxy, clients (including "),a("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/lite",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\npackage"),a("OutboundLink")],1),e._v(") can leverage\nthe unified API across different applications. Plus they won't have to call the\notherwise separate Tendermint Core API for additional proofs.")]),e._v(" "),a("p",[e._v("Note we don't include a proof here.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"b3ZlcnJpZGUgZnVuIHF1ZXJ5KHJlcTogUmVxdWVzdFF1ZXJ5LCByZXNwb25zZU9ic2VydmVyOiBTdHJlYW1PYnNlcnZlciZsdDtSZXNwb25zZVF1ZXJ5Jmd0OykgewogICAgdmFsIGsgPSByZXEuZGF0YS50b0J5dGVBcnJheSgpCiAgICB2YWwgdiA9IGdldFBlcnNpc3RlZFZhbHVlKGspCiAgICB2YWwgYnVpbGRlciA9IFJlc3BvbnNlUXVlcnkubmV3QnVpbGRlcigpCiAgICBpZiAodiA9PSBudWxsKSB7CiAgICAgICAgYnVpbGRlci5sb2cgPSAmcXVvdDtkb2VzIG5vdCBleGlzdCZxdW90OwogICAgfSBlbHNlIHsKICAgICAgICBidWlsZGVyLmxvZyA9ICZxdW90O2V4aXN0cyZxdW90OwogICAgICAgIGJ1aWxkZXIua2V5ID0gQnl0ZVN0cmluZy5jb3B5RnJvbShrKQogICAgICAgIGJ1aWxkZXIudmFsdWUgPSBCeXRlU3RyaW5nLmNvcHlGcm9tKHYpCiAgICB9CiAgICByZXNwb25zZU9ic2VydmVyLm9uTmV4dChidWlsZGVyLmJ1aWxkKCkpCiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCkKfQo="}}),e._v(" "),a("p",[e._v("The complete specification can be found\n"),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instances"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instances")]),e._v(" "),a("p",[e._v("Put the following code into the "),a("code",[e._v("$KVSTORE_HOME/src/main/kotlin/io/example/App.kt")]),e._v(" file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"cGFja2FnZSBpby5leGFtcGxlCgppbXBvcnQgamV0YnJhaW5zLmV4b2R1cy5lbnYuRW52aXJvbm1lbnRzCgpmdW4gbWFpbigpIHsKICAgIEVudmlyb25tZW50cy5uZXdJbnN0YW5jZSgmcXVvdDt0bXAvc3RvcmFnZSZxdW90OykudXNlIHsgZW52IC0mZ3Q7CiAgICAgICAgdmFsIGFwcCA9IEtWU3RvcmVBcHAoZW52KQogICAgICAgIHZhbCBzZXJ2ZXIgPSBHcnBjU2VydmVyKGFwcCwgMjY2NTgpCiAgICAgICAgc2VydmVyLnN0YXJ0KCkKICAgICAgICBzZXJ2ZXIuYmxvY2tVbnRpbFNodXRkb3duKCkKICAgIH0KfQo="}}),e._v(" "),a("p",[e._v("It is the entry point of the application.\nHere we create a special object "),a("code",[e._v("Environment")]),e._v(", which knows where to store the application state.\nThen we create and start the gRPC server to handle Tendermint Core requests.")]),e._v(" "),a("p",[e._v("Create "),a("code",[e._v("$KVSTORE_HOME/src/main/kotlin/io/example/GrpcServer.kt")]),e._v(" file with the following content:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"kotlin",base64:"cGFja2FnZSBpby5leGFtcGxlCgppbXBvcnQgaW8uZ3JwYy5CaW5kYWJsZVNlcnZpY2UKaW1wb3J0IGlvLmdycGMuU2VydmVyQnVpbGRlcgoKY2xhc3MgR3JwY1NlcnZlcigKICAgICAgICBwcml2YXRlIHZhbCBzZXJ2aWNlOiBCaW5kYWJsZVNlcnZpY2UsCiAgICAgICAgcHJpdmF0ZSB2YWwgcG9ydDogSW50CikgewogICAgcHJpdmF0ZSB2YWwgc2VydmVyID0gU2VydmVyQnVpbGRlcgogICAgICAgICAgICAuZm9yUG9ydChwb3J0KQogICAgICAgICAgICAuYWRkU2VydmljZShzZXJ2aWNlKQogICAgICAgICAgICAuYnVpbGQoKQoKICAgIGZ1biBzdGFydCgpIHsKICAgICAgICBzZXJ2ZXIuc3RhcnQoKQogICAgICAgIHByaW50bG4oJnF1b3Q7Z1JQQyBzZXJ2ZXIgc3RhcnRlZCwgbGlzdGVuaW5nIG9uICRwb3J0JnF1b3Q7KQogICAgICAgIFJ1bnRpbWUuZ2V0UnVudGltZSgpLmFkZFNodXRkb3duSG9vayhvYmplY3QgOiBUaHJlYWQoKSB7CiAgICAgICAgICAgIG92ZXJyaWRlIGZ1biBydW4oKSB7CiAgICAgICAgICAgICAgICBwcmludGxuKCZxdW90O3NodXR0aW5nIGRvd24gZ1JQQyBzZXJ2ZXIgc2luY2UgSlZNIGlzIHNodXR0aW5nIGRvd24mcXVvdDspCiAgICAgICAgICAgICAgICB0aGlzQEdycGNTZXJ2ZXIuc3RvcCgpCiAgICAgICAgICAgICAgICBwcmludGxuKCZxdW90O3NlcnZlciBzaHV0IGRvd24mcXVvdDspCiAgICAgICAgICAgIH0KICAgICAgICB9KQogICAgfQoKICAgIGZ1biBzdG9wKCkgewogICAgICAgIHNlcnZlci5zaHV0ZG93bigpCiAgICB9CgogICAgLyoqCiAgICAgKiBBd2FpdCB0ZXJtaW5hdGlvbiBvbiB0aGUgbWFpbiB0aHJlYWQgc2luY2UgdGhlIGdycGMgbGlicmFyeSB1c2VzIGRhZW1vbiB0aHJlYWRzLgogICAgICovCiAgICBmdW4gYmxvY2tVbnRpbFNodXRkb3duKCkgewogICAgICAgIHNlcnZlci5hd2FpdFRlcm1pbmF0aW9uKCkKICAgIH0KCn0K"}}),e._v(" "),a("h2",{attrs:{id:"_1-5-getting-up-and-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-getting-up-and-running"}},[e._v("#")]),e._v(" 1.5 Getting Up and Running")]),e._v(" "),a("p",[e._v("To create a default configuration, nodeKey and private validator files, let's\nexecute "),a("code",[e._v("tendermint init")]),e._v(". But before we do that, we will need to install\nTendermint Core.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBybSAtcmYgL3RtcC9leGFtcGxlCiQgY2QgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQKJCBtYWtlIGluc3RhbGwKJCBUTUhPTUU9JnF1b3Q7L3RtcC9leGFtcGxlJnF1b3Q7IHRlbmRlcm1pbnQgaW5pdAoKSVsyMDE5LTA3LTE2fDE4OjIwOjM2LjQ4MF0gR2VuZXJhdGVkIHByaXZhdGUgdmFsaWRhdG9yICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4ga2V5RmlsZT0vdG1wL2V4YW1wbGUvY29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uIHN0YXRlRmlsZT0vdG1wL2V4YW1wbGUyL2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgxXSBHZW5lcmF0ZWQgbm9kZSBrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvbm9kZV9rZXkuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgyXSBHZW5lcmF0ZWQgZ2VuZXNpcyBmaWxlICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("Feel free to explore the generated files, which can be found at\n"),a("code",[e._v("/tmp/example/config")]),e._v(" directory. Documentation on the config can be found\n"),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We are ready to start our application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9ncmFkbGV3IHJ1bgoKZ1JQQyBzZXJ2ZXIgc3RhcnRlZCwgbGlzdGVuaW5nIG9uIDI2NjU4Cg=="}}),e._v(" "),a("p",[e._v("Then we need to start Tendermint Core and point it to our application. Staying\nwithin the application directory execute:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBUTUhPTUU9JnF1b3Q7L3RtcC9leGFtcGxlJnF1b3Q7IHRlbmRlcm1pbnQgbm9kZSAtLWFiY2kgZ3JwYyAtLXByb3h5X2FwcCB0Y3A6Ly8xMjcuMC4wLjE6MjY2NTgKCklbMjAxOS0wNy0yOHwxNTo0NDo1My42MzJdIFZlcnNpb24gaW5mbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIHNvZnR3YXJlPTAuMzIuMSBibG9jaz0xMCBwMnA9NwpJWzIwMTktMDctMjh8MTU6NDQ6NTMuNjc3XSBTdGFydGluZyBOb2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBpbXBsPU5vZGUKSVsyMDE5LTA3LTI4fDE1OjQ0OjUzLjY4MV0gU3RhcnRlZCBub2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4gbm9kZUluZm89JnF1b3Q7e1Byb3RvY29sVmVyc2lvbjp7UDJQOjcgQmxvY2s6MTAgQXBwOjB9IElEXzo3NjM5ZTI4NDFjY2Q0N2Q1YWUwZjVhYWQzMDExYjE0MDQ5ZDNmNDUyIExpc3RlbkFkZHI6dGNwOi8vMC4wLjAuMDoyNjY1NiBOZXR3b3JrOnRlc3QtY2hhaW4tTmhsM3prIFZlcnNpb246MC4zMi4xIENoYW5uZWxzOjQwMjAyMTIyMjMzMDM4MDAgTW9uaWtlcjpJdmFucy1NYWNCb29rLVByby5sb2NhbCBPdGhlcjp7VHhJbmRleDpvbiBSUENBZGRyZXNzOnRjcDovLzEyNy4wLjAuMToyNjY1N319JnF1b3Q7CklbMjAxOS0wNy0yOHwxNTo0NDo1NC44MDFdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9OCB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzIwMTktMDctMjh8MTU6NDQ6NTQuODE0XSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTggdHhzPTAgYXBwSGFzaD0wMDAwMDAwMDAwMDAwMDAwCg=="}}),e._v(" "),a("p",[e._v("Now open another tab in your terminal and try sending a transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYnJvYWRjYXN0X3R4X2NvbW1pdD90eD0mcXVvdDt0ZW5kZXJtaW50PXJvY2tzJnF1b3Q7Jwp7CiAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICZxdW90O2lkJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAmcXVvdDtjaGVja190eCZxdW90OzogewogICAgICAmcXVvdDtnYXNXYW50ZWQmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICAmcXVvdDtkZWxpdmVyX3R4JnF1b3Q7OiB7fSwKICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90O0NERDNDNkRGQTBBMDhDQUVERjU0NkY5OTM4QTJFRUMyMzIyMDlDMjRBQTBFNDIwMTE5NEUwQUZCNzhBMkMyQkImcXVvdDssCiAgICAmcXVvdDtoZWlnaHQmcXVvdDs6ICZxdW90OzMzJnF1b3Q7Cn0K"}}),e._v(" "),a("p",[e._v("Response should contain the height where this transaction was committed.")]),e._v(" "),a("p",[e._v("Now let's check if the given key now exists and its value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYWJjaV9xdWVyeT9kYXRhPSZxdW90O3RlbmRlcm1pbnQmcXVvdDsnCnsKICAmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgJnF1b3Q7aWQmcXVvdDs6ICZxdW90OyZxdW90OywKICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICZxdW90O3Jlc3BvbnNlJnF1b3Q7OiB7CiAgICAgICZxdW90O2xvZyZxdW90OzogJnF1b3Q7ZXhpc3RzJnF1b3Q7LAogICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2RHVnVaR1Z5YldsdWRBPT0mcXVvdDssCiAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtjbTlqYTNNeSZxdW90OwogICAgfQogIH0KfQo="}}),e._v(" "),a("p",[a("code",[e._v("dGVuZGVybWludA==")]),e._v(" and "),a("code",[e._v("cm9ja3M=")]),e._v(" are the base64-encoding of the ASCII of "),a("code",[e._v("tendermint")]),e._v(" and "),a("code",[e._v("rocks")]),e._v(" accordingly.")]),e._v(" "),a("h2",{attrs:{id:"outro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),a("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),a("OutboundLink")],1),e._v(". To dig\ndeeper, read "),a("a",{attrs:{href:"https://docs.tendermint.com/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The full source code of this example project can be found "),a("a",{attrs:{href:"https://github.com/climber73/tendermint-abci-grpc-kotlin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);