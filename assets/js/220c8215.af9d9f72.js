"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[51479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Seata-Raft Storage Mode in Depth and Getting Started",description:"From traditional storage and computing separation to integrated storage and computing relying on distributed consensus algorithms to ensure transaction data consistency under high availability mode, what changes has Seata 2.x made? This article will provide a detailed introduction to the architecture and performance comparison.",keywords:["fescar","seata","distributed transactions","raft"],author:"funkye",date:"2023/10/13"},i=void 0,s={permalink:"/blog/seata-raft-detailed-explanation",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-raft-detailed-explanation.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-raft-detailed-explanation.md",title:"Seata-Raft Storage Mode in Depth and Getting Started",description:"From traditional storage and computing separation to integrated storage and computing relying on distributed consensus algorithms to ensure transaction data consistency under high availability mode, what changes has Seata 2.x made? This article will provide a detailed introduction to the architecture and performance comparison.",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[],readingTime:16.765,hasTruncateMarker:!1,authors:[{name:"funkye"}],frontMatter:{title:"Seata-Raft Storage Mode in Depth and Getting Started",description:"From traditional storage and computing separation to integrated storage and computing relying on distributed consensus algorithms to ensure transaction data consistency under high availability mode, what changes has Seata 2.x made? This article will provide a detailed introduction to the architecture and performance comparison.",keywords:["fescar","seata","distributed transactions","raft"],author:"funkye",date:"2023/10/13"},prevItem:{title:"Exploring the Journey of Open Source Development in Seata Project",permalink:"/blog/explore-seata-journey"},nextItem:{title:"Seata:Bridging Data and Applications",permalink:"/blog/seata-connect-data-and-application"}},l={authorsImageUrls:[void 0]},d=[{value:"2.1 What is Raft Mode?",id:"21-what-is-raft-mode",level:2},{value:"2.2 Why Raft Mode is Needed",id:"22-why-raft-mode-is-needed",level:2},{value:"2.2.1 Existing Storage Modes",id:"221-existing-storage-modes",level:3},{value:"2.2.2 High Availability",id:"222-high-availability",level:3},{value:"2.3 How is Seata-Raft Designed?",id:"23-how-is-seata-raft-designed",level:2},{value:"2.3.1 Design Principles",id:"231-design-principles",level:3},{value:"2.3.2 Fault Recovery",id:"232-fault-recovery",level:3},{value:"2.3.3 Business Processing Synchronization Process",id:"233-business-processing-synchronization-process",level:3},{value:"3. Usage and Deployment",id:"3-usage-and-deployment",level:2},{value:"3.1 Client",id:"31-client",level:3},{value:"3.2 Server",id:"32-server",level:3},{value:"3.3 faq",id:"33-faq",level:3},{value:"4. Performance Test Comparison",id:"4-performance-test-comparison",level:2},{value:"4.1 1.7.1 db mode",id:"41-171-db-mode",level:3},{value:"Empty submission 64C",id:"empty-submission-64c",level:4},{value:"Random inventory deduction 32C",id:"random-inventory-deduction-32c",level:4},{value:"4.2 2.0 raft mode",id:"42-20-raft-mode",level:3},{value:"Empty submission 64C",id:"empty-submission-64c-1",level:4},{value:"Random inventory deduction 32C",id:"random-inventory-deduction-32c-1",level:4},{value:"4.3 Test Result Comparison",id:"43-test-result-comparison",level:3},{value:"5. Summary",id:"5-summary",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"1. Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"2. Architecture Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"3. Deployment and Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"4. Benchmark Comparison")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"5. Conclusion"))),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("p",null,"Seata is an open-source distributed transaction solution with over 24000 stars and a highly active community. It is dedicated to providing high-performance and user-friendly distributed transaction services in microservices architecture."),(0,r.kt)("p",null,"Currently, Seata's distributed transaction data storage modes include file, db, and redis. This article focuses on the architecture, deployment and usage, benchmark comparison of Seata-Server Raft mode. It explores why Seata needs Raft and provides insights into the process from research and comparison to design, implementation, and knowledge accumulation."),(0,r.kt)("p",null,"Presenter: Jianbin  Chen(funkye) github id: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/funky-eyes"},"funky-eyes")),(0,r.kt)("h1",{id:"2-architecture-introduction"},"2. Architecture Introduction"),(0,r.kt)("h2",{id:"21-what-is-raft-mode"},"2.1 What is Raft Mode?"),(0,r.kt)("p",null,"Firstly, it is essential to understand what the Raft distributed consensus algorithm is. The following excerpt is a direct quote from the official documentation of sofa-jraft:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RAFT is a novel and easy-to-understand distributed consensus replication protocol proposed by Diego Ongaro and John Ousterhout at Stanford University. It serves as the central coordination component in the RAMCloud project. Raft is a Leader-Based variant of Multi-Paxos, providing a more complete and clear protocol description compared to protocols like Paxos, Zab, View Stamped Replication. It also offers clear descriptions of node addition and deletion. As a replication state machine, Raft is the most fundamental component in distributed systems, ensuring ordered replication and execution of commands among multiple nodes, guaranteeing consistency when the initial states of multiple nodes are consistent.\n\nIn summary, Seata's Raft mode is based on the Sofa-Jraft component, implementing the ability to ensure the data consistency and high availability of Seata-Server itself.\n\n")),(0,r.kt)("h2",{id:"22-why-raft-mode-is-needed"},"2.2 Why Raft Mode is Needed"),(0,r.kt)("p",null,"After understanding the definition of Seata-Raft mode, you might wonder whether Seata-Server is now unable to ensure consistency and high availability. Let's explore how Seata-Server currently achieves this from the perspectives of consistency and high availability."),(0,r.kt)("h3",{id:"221-existing-storage-modes"},"2.2.1 Existing Storage Modes"),(0,r.kt)("p",null,"In the current Seata design, the role of the Server is to ensure the correct execution of the two-phase commit for transactions. However, this depends on the correct storage of transaction records. To ensure that transaction records are not lost, it is necessary to drive all Seata-RM instances to perform the correct two-phase commit behavior while maintaining correct state. So, how does Seata currently store transaction states and records?"),(0,r.kt)("p",null,"Firstly, let's introduce the three transaction storage modes supported by Seata: file, db, and redis. In terms of consistency ranking, the db mode provides the best guarantee for transaction records, followed by the asynchronous flushing of the file mode, and finally the aof and rdb modes of redis."),(0,r.kt)("p",null,"To elaborate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The file mode is Seata's self-implemented transaction storage method. It stores transaction information on the local disk in a sequential write manner. For performance considerations, it defaults to asynchronous mode and stores transaction information in memory to ensure consistency between memory and disk data. In the event of Seata-Server (TC) unexpected crash, it reads transaction information from the disk upon restarting and restores it to memory for the continuation of transaction contexts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The db mode is another implementation of Seata's abstract transaction storage manager (AbstractTransactionStoreManager). It relies on databases such as PostgreSQL, MySQL, Oracle, etc., to perform transaction information operations. Consistency is guaranteed by the local transactions of the database, and data persistence is the responsibility of the database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redis, similar to db, is a transaction storage method using Jedis and Lua scripts. It performs transaction operations using Lua scripts, and in Seata 2.x, all operations (such as lock competition) are handled using Lua scripts. Data storage is similar to db, relying on the storage side (Redis) to ensure data consistency. Like db, redis adopts a computation and storage separation architecture design in Seata."))),(0,r.kt)("h3",{id:"222-high-availability"},"2.2.2 High Availability"),(0,r.kt)("p",null,"High availability is simply the ability of a cluster to continue running normally after the main node crashes. The common approach is to deploy multiple nodes providing the same service and use a registry center to real-time sense the online and offline status of the main node for timely switching to an available node."),(0,r.kt)("p",null,"It may seem that deploying a few more machines is all that's needed. However, there is a problem behind it \u2013 how to ensure that multiple nodes operate as a whole. If one node crashes, another node can seamlessly take over the work of the crashed node, including handling the data of the crashed node. The answer to solving this problem is simple: in a computation and storage separation architecture, store data in a shared middleware. Any node can access this shared storage area to obtain transaction information for all nodes' operations, thus achieving high availability."),(0,r.kt)("p",null,"However, the prerequisite is that computation and storage must be separated. Why is the integration of computation and storage not feasible? This brings us to the implementation of the File mode. As described earlier, the File mode stores data on local disks and node memory, with no synchronization in data writing operations. This means that the current File mode cannot achieve high availability and only supports single-machine deployment. For basic quick start and simple use, the File mode has lower applicability, and the high-performance, memory-based File mode is practically no longer used in production environments."),(0,r.kt)("h2",{id:"23-how-is-seata-raft-designed"},"2.3 How is Seata-Raft Designed?"),(0,r.kt)("h3",{id:"231-design-principles"},"2.3.1 Design Principles"),(0,r.kt)("p",null,"The design philosophy of Seata-Raft mode is to encapsulate the File mode, which is unable to achieve high availability, and use the Raft algorithm to synchronize data between multiple TCs. This mode ensures data consistency among multiple TCs when using the File mode and replaces asynchronous flushing operations with Raft logs and snapshots for data recovery."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.funkye.icu/img/blog/Dingtalk_20230105203431.jpg",alt:"flow"})),(0,r.kt)("p",null,"In the Seata-Raft mode, the client-side, upon startup, retrieves its transaction group (e.g., default) and the IP addresses of relevant Raft cluster nodes from the configuration center. By sending a request to the control port of Seata-Server, the client can obtain metadata for the Raft cluster corresponding to the default group, including leader, follower, and learner member nodes. Subsequently, the client monitors (watches) any member nodes of non-leader nodes."),(0,r.kt)("p",null,"Assuming that TM initiates a transaction, and the leader node in the local metadata points to the address of TC1, TM will only interact with TC1. When TC1 adds global transaction information, through the Raft protocol, denoted as step 1 in the diagram, TC1 sends the log to other nodes. Step 2 represents the response of follower nodes to log reception. When more than half of the nodes (such as TC2) accept and respond successfully, the state machine (FSM) on TC1 will execute the action of adding a global transaction."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.funkye.icu/img/blog/Dingtalk_20230105204423.jpg",alt:"watch"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://blog.funkye.icu/img/blog/Dingtalk_20230105211035.jpg",alt:"watch2"})),(0,r.kt)("p",null,"If TC1 crashes or a reelection occurs, what happens? Since the metadata has been obtained during the initial startup, the client will execute the watch follower node's interface to update the local metadata information. Therefore, subsequent transaction requests will be sent to the new leader (e.g., TC2). Meanwhile, TC1's data has already been synchronized to TC2 and TC3, ensuring data consistency. Only at the moment of the election, if a transaction happens to be sent to the old leader, it will be actively rolled back to ensure data correctness."),(0,r.kt)("p",null,"It is important to note that in this mode, if a transaction is in the phase of sending resolution requests or the one-phase process has not yet completed at the moment of the election, and it happens exactly during the election, these transactions will be actively rolled back. This is because the RPC node has crashed or a reelection has occurred, and there is currently no implemented RPC retry. The TM side has a default retry mechanism of 5 times, but due to the approximately 1s-2s time required for the election, transactions in the 'begin' state may not successfully resolve, so they are prioritized for rollback to release locks, avoiding impacting the correctness of other business."),(0,r.kt)("h3",{id:"232-fault-recovery"},"2.3.2 Fault Recovery"),(0,r.kt)("p",null,"In Seata, when a TC experiences a failure, the data recovery process is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.funkye.icu/img/blog/Dingtalk_20230106231817.jpg",alt:"recover"})),(0,r.kt)("p",null,"As shown in the above diagram:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check for the Latest Data Snapshot: Firstly, the system checks for the existence of the latest data snapshot file. The data snapshot is a one-time full copy of the in-memory data state. If there is a recent data snapshot, the system directly loads it into memory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replay Based on Raft Logs After Snapshot: If there is the latest snapshot or no snapshot file, the system replays the data based on the previously recorded Raft logs. Each request in Seata-Server ultimately goes through the ServerOnRequestProcessor for processing, then moves to the specific coordinator class (DefaultCoordinator or RaftCoordinator), and further proceeds to the specific business code (DefaultCore) for the corresponding transaction processing (e.g., begin, commit, rollback).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the log replay is complete, the leader initiates log synchronization and continues to execute the related transaction's add, delete, and modify actions."))),(0,r.kt)("p",null,"Through these steps, Seata can achieve data recovery after a failure. It first attempts to load the latest snapshot, if available, to reduce replay time. Then, it replays based on Raft logs to ensure the consistency of data operations. Finally, through the log synchronization mechanism, it ensures data consistency among multiple nodes."),(0,r.kt)("h3",{id:"233-business-processing-synchronization-process"},"2.3.3 Business Processing Synchronization Process"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.funkye.icu/img/blog/Dingtalk_20230106230931.jpg",alt:"flow"}),"\nFor the case where the client side is obtaining the latest metadata while a business thread is executing operations such as begin, commit, or registry, Seata adopts the following handling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the client side:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the client is executing operations like begin, commit, or registry, and at this moment, it needs to obtain the latest metadata, the RPC request from the client might fail since the leader may no longer exist or is not the current leader. "),(0,r.kt)("li",{parentName:"ul"},"If the request fails, the client receives an exception response, and in this case, the client needs to roll back based on the request result."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TC side for detecting the old leader:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the TC side, if the client's request reaches the old leader node, TC checks if it is the current leader. If it is not the leader, it rejects the request."),(0,r.kt)("li",{parentName:"ul"},"If it is the leader but fails midway, such as failing during the process of submitting a task to the state machine, the creation of the task (createTask) fails due to the current state not being the leader. In this case, the client also receives a response with an exception."),(0,r.kt)("li",{parentName:"ul"},"The old leader's task submission also fails, ensuring the consistency of transaction information.")))),(0,r.kt)("p",null,"Through the above handling, when the client obtains the latest metadata while a business operation is in progress, Seata ensures data consistency and transaction correctness. If the client's RPC request fails, it triggers a rollback operation. On the TC side, detection of the old leader and the failure of task submission prevent inconsistencies in transaction information. This way, the client's data can also maintain consistency."),(0,r.kt)("h2",{id:"3-usage-and-deployment"},"3. Usage and Deployment"),(0,r.kt)("p",null,"In terms of usage and deployment, the community adheres to the principles of minimal intrusion and minimal changes. Therefore, the overall deployment should be straightforward. The following sections introduce deployment changes separately for the client and server sides."),(0,r.kt)("h3",{id:"31-client"},"3.1 Client"),(0,r.kt)("p",null,"Firstly, those familiar with the use of registry configuration centers should be aware of the ",(0,r.kt)("inlineCode",{parentName:"p"},"seata.registry.type")," configuration item in Seata's configuration, supporting options like Nacos, ZooKeeper, etcd, Redis, etc. After version 2.0, a configuration item for Raft was added."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   registry:\n      type: raft\n      raft:\n         server-addr: 192.168.0.111:7091, 192.168.0.112:7091, 192.168.0.113:7091\n")),(0,r.kt)("p",null,"Switch the ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.type")," to 'raft' and configure the address for obtaining Raft-related metadata, which is unified as the IP of the seata-server + HTTP port. Then, it is essential to configure the traditional transaction group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"seata:\n   tx-service-group: default_tx_group\n   service:\n      vgroup-mapping:\n         default_tx_group: default\n")),(0,r.kt)("p",null,"If the current transaction group used is ",(0,r.kt)("inlineCode",{parentName:"p"},"default_tx_group"),", then the corresponding Seata cluster/group is 'default'. There is a corresponding relationship, and this will be further explained in the server deployment section.\nWith this, the changes on the client side are complete."),(0,r.kt)("h3",{id:"32-server"},"3.2 Server"),(0,r.kt)("p",null,"For server-side changes, there might be more adjustments, involving familiarity with some tuning parameters and configurations. Of course, default values can be used without any modifications."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"seata:\n  server:\n    raft:\n      group: default # This value represents the group of this raft cluster, and the value corresponding to the client's transaction group should match it.\n      server-addr: 192.168.0.111:9091,192.168.0.112:9091,192.168.0.113:9091 # IP and port of the 3 nodes, the port is the netty port of the node + 1000, default netty port is 8091\n      snapshot-interval: 600 # Take a snapshot every 600 seconds for fast rolling of raftlog. However, making a snapshot every 600 seconds may cause business response time jitter if there is too much transaction data in memory. But it is friendly for fault recovery and faster node restart. You can adjust it to 30 minutes, 1 hour, etc., according to the business. You can test whether there is jitter on your own, and find a balance point between rt jitter and fault recovery.\n      apply-batch: 32 # At most, submit raftlog once for 32 batches of actions\n      max-append-bufferSize: 262144 # Maximum size of the log storage buffer, default is 256K\n      max-replicator-inflight-msgs: 256 # In the case of enabling pipeline requests, the maximum number of in-flight requests, default is 256\n      disruptor-buffer-size: 16384 # Internal disruptor buffer size. If it is a scenario with high write throughput, you need to appropriately increase this value. Default is 16384\n      election-timeout-ms: 1000 # How long without a leader's heartbeat to start a new election\n      reporter-enabled: false # Whether the monitoring of raft itself is enabled\n      reporter-initial-delay: 60 # Interval of monitoring\n      serialization: jackson # Serialization method, do not change\n      compressor: none # Compression method for raftlog, such as gzip, zstd, etc.\n      sync: true # Flushing method for raft log, default is synchronous flushing\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: file # This configuration can choose different configuration centers\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: file # Non-file registration center is not allowed in raft mode\n  store:\n    # support: file, db, redis, raft\n    mode: raft # Use raft storage mode\n    file:\n      dir: sessionStore # This path is the storage location of raftlog and related transaction logs, default is relative path, it is better to set a fixed location\n")),(0,r.kt)("p",null,"In 3 or more nodes of seata-server, after configuring the above parameters, you can directly start it, and you will see similar log output, which means the cluster has started successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2023-10-13 17:20:06.392  WARN --- [Rpc-netty-server-worker-10-thread-1] [com.alipay.sofa.jraft.rpc.impl.BoltRaftRpcFactory] [ensurePipeline] []: JRaft SET bolt.rpc.dispatch-msg-list-in-default-executor to be false for replicator pipeline optimistic.\n2023-10-13 17:20:06.439  INFO --- [default/PeerPair[10.58.16.231:9091 -> 10.58.12.217:9091]-AppendEntriesThread0] [com.alipay.sofa.jraft.storage.impl.LocalRaftMetaStorage] [save] []: Save raft meta, path=sessionStore/raft/9091/default/raft_meta, term=4, votedFor=0.0.0.0:0, cost time=25 ms\n2023-10-13 17:20:06.441  WARN --- [default/PeerPair[10.58.16.231:9091 -> 10.58.12.217:9091]-AppendEntriesThread0] [com.alipay.sofa.jraft.core.NodeImpl] [handleAppendEntriesRequest] []: Node <default/10.58.16.231:9091> reject term_unmatched AppendEntriesRequest from 10.58.12.217:9091, term=4, prevLogIndex=4, prevLogTerm=4, localPrevLogTerm=0, lastLogIndex=0, entriesSize=0.\n2023-10-13 17:20:06.442  INFO --- [JRaft-FSMCaller-Disruptor-0] [io.seata.server.cluster.raft.RaftStateMachine] [onStartFollowing] []: groupId: default, onStartFollowing: LeaderChangeContext [leaderId=10.58.12.217:9091, term=4, status=Status[ENEWLEADER<10011>: Raft node receives message from new leader with higher term.]].\n2023-10-13 17:20:06.449  WARN --- [default/PeerPair[10.58.16.231:9091 -> 10.58.12.217:9091]-AppendEntriesThread0] [com.alipay.sofa.jraft.core.NodeImpl] [handleAppendEntriesRequest] []: Node <default/10.58.16.231:9091> reject term_unmatched AppendEntriesRequest from 10.58.12.217:9091, term=4, prevLogIndex=4, prevLogTerm=4, localPrevLogTerm=0, lastLogIndex=0, entriesSize=0.\n2023-10-13 17:20:06.459  INFO --- [Bolt-default-executor-4-thread-1] [com.alipay.sofa.jraft.core.NodeImpl] [handleInstallSnapshot] []: Node <default/10.58.16.231:9091> received InstallSnapshotRequest from 10.58.12.217:9091, lastIncludedLogIndex=4, lastIncludedLogTerm=4, lastLogId=LogId [index=0, term=0].\n2023-10-13 17:20:06.489  INFO --- [Bolt-conn-event-executor-13-thread-1] [com.alipay.sofa.jraft.rpc.impl.core.ClientServiceConnectionEventProcessor] [onEvent] []: Peer 10.58.12.217:9091 is connected\n2023-10-13 17:20:06.519  INFO --- [JRaft-Group-Default-Executor-0] [com.alipay.sofa.jraft.util.Recyclers] [<clinit>] []: -Djraft.recyclers.maxCapacityPerThread: 4096.\n2023-10-13 17:20:06.574  INFO --- [JRaft-Group-Default-Executor-0] [com.alipay.sofa.jraft.storage.snapshot.local.LocalSnapshotStorage] [destroySnapshot] []: Deleting snapshot sessionStore/raft/9091/default/snapshot/snapshot_4.\n2023-10-13 17:20:06.574  INFO --- [JRaft-Group-Default-Executor-0] [com.alipay.sofa.jraft.storage.snapshot.local.LocalSnapshotStorage] [close] []: Renaming sessionStore/raft/9091/default/snapshot/temp to sessionStore/raft/9091/default/snapshot/snapshot_4.\n2023-10-13 17:20:06.689  INFO --- [JRaft-FSMCaller-Disruptor-0] [io.seata.server.cluster.raft.snapshot.session.SessionSnapshotFile] [load] []: on snapshot load start index: 4\n2023-10-13 17:20:06.694  INFO --- [JRaft-FSMCaller-Disruptor-0] [io.seata.server.cluster.raft.snapshot.session.SessionSnapshotFile] [load] []: on snapshot load end index: 4\n2023-10-13 17:20:06.694  INFO --- [JRaft-FSMCaller-Disruptor-0] [io.seata.server.cluster.raft.RaftStateMachine] [onSnapshotLoad] []: groupId: default, onSnapshotLoad cost: 110 ms.\n2023-10-13 17:20:06.694  INFO --- [JRaft-FSMCaller-Disruptor-0] [io.seata.server.cluster.raft.RaftStateMachine] [onConfigurationCommitted] []: groupId: default, onConfigurationCommitted: 10.58.12.165:9091,10.58.12.217:9091,10.58.16.231:9091.\n2023-10-13 17:20:06.705  INFO --- [JRaft-FSMCaller-Disruptor-0] [com.alipay.sofa.jraft.storage.snapshot.SnapshotExecutorImpl] [onSnapshotLoadDone] []: Node <default/10.58.16.231:9091> onSnapshotLoadDone, last_included_index: 4\nlast_included_term: 4\npeers: "10.58.12.165:9091"\npeers: "10.58.12.217:9091"\npeers: "10.58.16.231:9091"\n\n2023-10-13 17:20:06.722  INFO --- [JRaft-Group-Default-Executor-1] [com.alipay.sofa.jraft.storage.impl.RocksDBLogStorage] [lambda$truncatePrefixInBackground$2] []: Truncated prefix logs in data path: sessionStore/raft/9091/default/log from log index 1 to 5, cost 0 ms.\n')),(0,r.kt)("h3",{id:"33-faq"},"3.3 faq"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"seata.raft.server-addr")," is configured, cluster scaling or shrinking must be done through the server's openapi. Directly changing this configuration and restarting won't take effect. The API for this operation is ",(0,r.kt)("inlineCode",{parentName:"p"},"/metadata/v1/changeCluster?raftClusterStr=new_cluster_list"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the addresses in ",(0,r.kt)("inlineCode",{parentName:"p"},"server-addr:")," are all on the local machine, you need to add a 1000 offset to the netty ports of different servers on the local machine. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"server.port: 7092"),", the netty port will be 8092, and the raft election and communication port will be 9092. You need to add the startup parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dserver.raftPort=9092"),". On Linux, this can be specified using ",(0,r.kt)("inlineCode",{parentName:"p"},'export JAVA_OPT="-Dserver.raftPort=9092"'),"."))),(0,r.kt)("h2",{id:"4-performance-test-comparison"},"4. Performance Test Comparison"),(0,r.kt)("p",null,"Performance testing is divided into two scenarios. To avoid data hotspots and thread optimization, the client side initializes 3 million items and uses jdk21 virtual threads + Spring Boot3 + Seata AT for testing. Garbage collection is handled with the ZGC generational garbage collector. The testing tool used is Alibaba Cloud PTS. Server-side is uniformly configured with jdk21 (not yet adapted for virtual threads). Server configurations are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TC: 4c8g * 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Client: 4c ",(0,r.kt)("em",{parentName:"p"}," 8G ")," 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Database: Alibaba Cloud RDS 4c16g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"64 concurrent performance test only increases the performance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," annotated interface with empty submissions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Random 3 million data items are used for inventory deduction in a 32 concurrent scenario for 10 minutes."))),(0,r.kt)("h3",{id:"41-171-db-mode"},"4.1 1.7.1 db mode"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN011dNh3H1UK8G5prQAg_!!6000000002498-0-tps-731-333.jpg",alt:"raft pressure test model"})),(0,r.kt)("h4",{id:"empty-submission-64c"},"Empty submission 64C"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01pE1Anf1nRtgcnlx9t_!!6000000005087-0-tps-622-852.jpg",alt:"db64-2"})),(0,r.kt)("h4",{id:"random-inventory-deduction-32c"},"Random inventory deduction 32C"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN016hZkJC20OJax9ce31_!!6000000006839-0-tps-624-852.jpg",alt:"db32-2"})),(0,r.kt)("h3",{id:"42-20-raft-mode"},"4.2 2.0 raft mode"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01nNL6oe1X95YcQQEjs_!!6000000002880-0-tps-773-353.jpg",alt:"raft pressure test model"})),(0,r.kt)("h4",{id:"empty-submission-64c-1"},"Empty submission 64C"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01rs1ykr1dhnH8qnXj3_!!6000000003768-0-tps-631-851.jpg",alt:"raft64-2"})),(0,r.kt)("h4",{id:"random-inventory-deduction-32c-1"},"Random inventory deduction 32C"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN015OwA2k20enquV7Yfu_!!6000000006875-0-tps-624-856.jpg",alt:"raft32c-2"})),(0,r.kt)("h3",{id:"43-test-result-comparison"},"4.3 Test Result Comparison"),(0,r.kt)("p",null,"32 concurrent random inventory deduction scenario with 3 million items"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"tps avg"),(0,r.kt)("th",{parentName:"tr",align:null},"tps max"),(0,r.kt)("th",{parentName:"tr",align:null},"count"),(0,r.kt)("th",{parentName:"tr",align:null},"rt"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1709 (42%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"2019 (21%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"1228803 (42%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"13.86ms (30%\u2193)"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Raft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1201"),(0,r.kt)("td",{parentName:"tr",align:null},"1668"),(0,r.kt)("td",{parentName:"tr",align:null},"864105"),(0,r.kt)("td",{parentName:"tr",align:null},"19.86ms"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"DB")))),(0,r.kt)("p",null,"64 concurrent empty pressure on ",(0,r.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," interface (test peak limit is 8000)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"tps avg"),(0,r.kt)("th",{parentName:"tr",align:null},"tps max"),(0,r.kt)("th",{parentName:"tr",align:null},"count"),(0,r.kt)("th",{parentName:"tr",align:null},"rt"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5704 (20%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"8062 (30%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"4101236 (20%\u2191)"),(0,r.kt)("td",{parentName:"tr",align:null},"7.79ms (19%\u2193)"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Raft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4743"),(0,r.kt)("td",{parentName:"tr",align:null},"6172"),(0,r.kt)("td",{parentName:"tr",align:null},"3410240"),(0,r.kt)("td",{parentName:"tr",align:null},"9.65ms"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"DB")))),(0,r.kt)("p",null,"In addition to the direct comparison of the above data, by observing the curves of the pressure test, it can be seen that under the raft mode, TPS and RT are more stable, with less jitter, and better performance and throughput."),(0,r.kt)("h2",{id:"5-summary"},"5. Summary"),(0,r.kt)("p",null,"In the future development of Seata, performance, entry threshold, and deployment and operation costs are directions that we need to pay attention to and continuously optimize. After the introduction of the raft mode, Seata has the following characteristics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In terms of storage, after the separation of storage and computation, Seata's upper limit for optimization has been raised, making it more self-controlled."),(0,r.kt)("li",{parentName:"ol"},"Lower deployment costs, no need for additional registration centers, storage middleware."),(0,r.kt)("li",{parentName:"ol"},"Lower entry threshold, no need to learn other knowledge such as registration centers; one can directly use Seata Raft.")),(0,r.kt)("p",null,"In response to industry trends, some open-source projects such as ClickHouse and Kafka have started to abandon the use of ZooKeeper and instead adopt self-developed solutions, such as ClickKeeper and KRaft. These solutions ensure the storage of metadata and other information by themselves, reducing the need for third-party dependencies, thus reducing operational and learning costs. These features are mature and worth learning from."),(0,r.kt)("p",null,"Of course, currently, solutions based on the Raft mode may not be mature enough and may not fully meet the beautiful descriptions above. However, precisely because of such theoretical foundations, the community should strive in this direction, gradually bringing practice closer to the theoretical requirements. Here, all students interested in Seata are welcome to join the community, contributing to the development of Seata!"))}u.isMDXComponent=!0}}]);