"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[27980],{8809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(74848),o=n(28453);const a={layout:"post",comments:!0,title:"Seata Application-Side Startup Process Analysis \u2014 Registry and Configuration Module",date:new Date("2021-03-04T01:35:01.000Z"),author:"booogu",catalog:!0,tags:["Seata"]},r=void 0,s={permalink:"/blog/seata-client-start-analysis-02",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-client-start-analysis-02.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-client-start-analysis-02.md",title:"Seata Application-Side Startup Process Analysis \u2014 Registry and Configuration Module",description:"\"Just getting started with Seata and don't know enough about its modules?",date:"2021-03-04T01:35:01.000Z",formattedDate:"March 4, 2021",tags:[{label:"Seata",permalink:"/blog/tags/seata"}],readingTime:14.515,hasTruncateMarker:!1,authors:[{name:"booogu"}],frontMatter:{layout:"post",comments:!0,title:"Seata Application-Side Startup Process Analysis \u2014 Registry and Configuration Module",date:"2021-03-04T01:35:01.000Z",author:"booogu",catalog:!0,tags:["Seata"]},unlisted:!1,prevItem:{title:"Seata Deadlock Issue Caused by ConcurrentHashMap",permalink:"/blog/seata-dsproxy-deadlock"},nextItem:{title:"Analysis of Seata Application-Side Startup Process - How RM & TM Establish Connections with TC",permalink:"/blog/seata-client-start-analysis-01"}},c={authorsImageUrls:[void 0]},l=[{value:"Preface",id:"preface",level:2},{value:"Give a qualification",id:"give-a-qualification",level:2},{value:"RM/TM Initialisation Process with Alternating Multi-Module Collaboration",id:"rmtm-initialisation-process-with-alternating-multi-module-collaboration",level:2},{value:"Getting TC Server cluster addresses from <strong>Registry</strong>",id:"getting-tc-server-cluster-addresses-from-registry",level:3},{value:"Which registry to use? The <strong>Seata meta-configuration file</strong> gives the answer",id:"which-registry-to-use-the-seata-meta-configuration-file-gives-the-answer",level:4},{value:"Getting the TC Server address from the registry centre",id:"getting-the-tc-server-address-from-the-registry-centre",level:4},{value:"Get TC cluster name from <strong>Configuration Centre</strong>",id:"get-tc-cluster-name-from-configuration-centre",level:3},{value:"Configuration Centre initialisation",id:"configuration-centre-initialisation",level:4},{value:"Getting the value of a configuration item",id:"getting-the-value-of-a-configuration-item",level:4},{value:"Load Balancing",id:"load-balancing",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\"Just getting started with Seata and don't know enough about its modules? ",(0,i.jsx)("br",{}),"\nWant to dive into the Seata source code, but haven't done so yet? ",(0,i.jsx)("br",{}),'\nWant to find out what your application is doing "on the sly" during startup after integrating Seata? ',(0,i.jsx)("br",{}),"\nWant to learn the design concepts and best practices of Seata as a great open source framework? ",(0,i.jsx)("br",{}),"\nIf any of the above apply to you, then today's article is for you!"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"preface",children:"Preface"}),"\n",(0,i.jsxs)(t.p,{children:["In Seata's application-side (RM, TM) startup process, the first thing to do is to establish communication with the coordinator side (TC), which is a prerequisite for Seata to be able to complete the distributed transaction coordination, so Seata in the process of completing the initialisation of the application side and establishing a connection with the TC, it is ",(0,i.jsx)(t.strong,{children:"How to find the cluster and address of the TC Transaction Coordinator"}),"? And how does it ",(0,i.jsx)(t.strong,{children:"get various configuration information"})," from the configuration module? That's what this article is going to explore."]}),"\n",(0,i.jsx)(t.h2,{id:"give-a-qualification",children:"Give a qualification"}),"\n",(0,i.jsx)(t.p,{children:'Seata as a middleware level of the underlying components, is very careful to introduce third-party frameworks for specific implementations, interested students can learn more about Seata\'s SPI mechanism, to see how Seata is through a large number of extension points (Extension), to invert the specific implementation of the dependent components out of the turn rely on abstract interfaces, and at the same time, Seata in order to better At the same time, Seata in order to better integrate into microservices, cloud native and other popular architectures derived from the ecosystem, but also based on the SPI mechanism on a number of mainstream microservice frameworks, registry, configuration centre and Java development frameworks, "the leader" - SpringBoot and so on. Do the active integration , in order to ensure that the microkernel architecture , loosely coupled , scalable at the same time , but also can be very good with all kinds of components "to play with", so that the environment using a variety of technology stacks can be more convenient to introduce Seata.'}),"\n",(0,i.jsx)(t.p,{children:"In this paper, in order to be close to everyone ** just introduced Seata trial ** scene , in the following introduction , select ** application side ** qualifications are as follows : the use of **File (file) as the configuration centre and registration centre **, and based on ** SpringBoot ** start."}),"\n",(0,i.jsx)(t.p,{children:"With this qualification, let's dive into the Seata source code and find out what's going on."}),"\n",(0,i.jsx)(t.h2,{id:"rmtm-initialisation-process-with-alternating-multi-module-collaboration",children:"RM/TM Initialisation Process with Alternating Multi-Module Collaboration"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"http://booogu.top/2021/02/28/seata-client-start-analysis-01/",children:" Seata Client Startup Process Dissection (I) "}),", we analysed the initialization of TM and RM on the application side of Seata, and how the application side creates a Netty Channel and sends a registration request to the TC Server to send a registration request. In addition to this, during RM initialisation, several other Seata modules (Registration Centre, Configuration Centre, Load Balancing) come into play and collaborate with each other to complete the process of connecting to the TC Server."]}),"\n",(0,i.jsxs)(t.p,{children:["When executing the Client reconnect to TC Server method: NettyClientChannelManager.Channreconnect(), you first need to get the list of available TC Server addresses based on the current ",(0,i.jsx)(t.strong,{children:"transaction grouping"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'/**\n     * NettyClientChannelManager.reconnect()\n     * Reconnect to remote server of current transaction service group.\n*\n     * @param transactionServiceGroup transaction service group\n*/\nvoid reconnect(String transactionServiceGroup) {\nList<String> availList = null; }\ntry {\n// Get the available TC Server addresses from the registry\navailList = getAvailServerList(transactionServiceGroup);\n} catch (Exception e) {\nLOGGER.error("Failed to get available servers: {}", e.getMessage(), e); return; {// Get the available TC Server addresses from the registry.\nreturn; }\n}\n// The following code is omitted\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For a detailed introduction to the concept of transaction grouping, you can refer to the official document ",(0,i.jsx)(t.a,{href:"/docs/user/txgroup/transaction-group/",children:"Introduction to Transaction Grouping"}),". Here is a brief introduction."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Each Seata application-side RM, TM, has a ",(0,i.jsx)(t.strong,{children:"transaction grouping"})," name"]}),"\n",(0,i.jsxs)(t.li,{children:["Each TC on the Seata coordinator side has a ",(0,i.jsx)(t.strong,{children:"cluster name"})," and ",(0,i.jsx)(t.strong,{children:"address"}),".\nThe application side goes through the following two steps when connecting to the coordinator side:"]}),"\n",(0,i.jsx)(t.li,{children:"Through the name of the transaction grouping, the cluster name of the TC corresponding to this application side is obtained from the configuration"}),"\n",(0,i.jsxs)(t.li,{children:["By using the cluster name, the address list of the TC cluster can be obtained from the registry.\nThe above concepts, relationships and processes are shown in the following figure:\n! ",(0,i.jsx)(t.a,{href:"http://booogu.top/img/in-post/TXGroup_Group_Relation.jpg",children:"Relationship between Seata transaction grouping and connection establishment"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"getting-tc-server-cluster-addresses-from-registry",children:["Getting TC Server cluster addresses from ",(0,i.jsx)(t.strong,{children:"Registry"})]}),"\n",(0,i.jsx)(t.p,{children:"After understanding the main concepts and steps involved in connecting TCs from RM/TC, let's move on to explore the getAvailServerList method:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"private List<String> getAvailServerList(String transactionServiceGroup) throws Exception {\n//\u2460 Use the registry factory to get a registry instance.\n//\u2461 Call the registry's lookup method lookUp() to get a list of the addresses of the available Servers in the TC cluster based on the transaction group name.\nList<InetSocketAddress> availInetSocketAddressList = RegistryFactory.getInstance().lookup(transactionServiceGroup);\nif (CollectionUtils.isEmpty(availInetSocketAddressList)) {\nreturn Collections.emptyList();\n}\n\n        return availInetSocketAddressList.stream()\n                                         .map(NetUtil::toStringAddress)\n                                         .collect(Collectors.toList()); }\n    }\n"})}),"\n",(0,i.jsxs)(t.h4,{id:"which-registry-to-use-the-seata-meta-configuration-file-gives-the-answer",children:["Which registry to use? The ",(0,i.jsx)(t.strong,{children:"Seata meta-configuration file"})," gives the answer"]}),"\n",(0,i.jsx)(t.p,{children:'As mentioned above, Seata supports a variety of registry implementations, so Seata first needs to get the "type of registry" information from a place first.'}),"\n",(0,i.jsxs)(t.p,{children:['Seata has designed a "configuration file" to store some basic information about the components used in its framework. I prefer to call this configuration file ',(0,i.jsx)(t.strong,{children:'"meta-configuration file "'}),', because the information it contains is actually the "configuration of the configuration", i.e., the "configuration of the configuration", i.e., the "configuration of the configuration". This is because the information it contains is actually the "configuration of the configuration", i.e., the concept of "meta", which can be understood by comparing the information in the database table with the information in the structure of the database table itself (table data and table metadata).']}),"\n",(0,i.jsxs)(t.p,{children:["We can think of the information in the Registry and Configuration Centre as ",(0,i.jsx)(t.strong,{children:"configuration information itself"}),", and what is the configuration** of this **configuration information? This information, then, is contained in Seata's meta-configuration file. In fact, there are only ",(0,i.jsx)(t.strong,{children:"two types of information"})," contained in the 'meta-configuration file':"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The first is the type of registry: registry.type, as well as some basic information about that type of registry, for example, when the registry type is a file, the meta configuration file stores the file's name information; when the registry type is Nacos, the meta configuration file stores Nacos addresses, namespaces, cluster names and other information."}),"\n",(0,i.jsx)(t.li,{children:"Second, the type of configuration centre: config.type, as well as some basic information about the type of configuration centre, such as when the configuration centre is a file, the meta-configuration file stores information about the name of the file; when the type of registry is Consul, the meta-configuration file stores information about the address of the Consul"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Seata's meta-configuration file supports Yaml, Properties and other formats , and can be integrated into the SpringBoot application.yaml file ( use seata-spring-boot-starter can be ) , easy to integrate with SpringBoot ."}),"\n",(0,i.jsx)(t.p,{children:"The default meta-configuration file that comes with Seata is registry.conf, and when we use a file as the registration and configuration centre, the content in registry.conf is set as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'registry {\n # file , nacos , eureka, redis, zk, consul, etcd3, sofa\n type = "file"\n file {\n   name = "file.conf"\n }\n}\n\nconfig {\n # file, nacos, apollo, zk, consul, etcd3\n type = "file"\n file {\n   name = "file.conf"\n }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"In the following source code, we can find that the type of registry used by Seata is taken from ConfigurationFactory.CURRENT_FILE_INSTANCE, and this CURRENT_FILE_INSTANCE is what we call, an instance of the Seata **meta-configuration file **"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// In getInstance(), call buildRegistryService to build the specific registry instance\npublic static RegistryService getInstance() {\nif (instance == null) {\nsynchronized (RegistryFactory.class) {\nif (instance == null) {\ninstance = buildRegistryService();\n}\n}\n}\nreturn instance; }\n}\n\n    private static RegistryService buildRegistryService() {\n        RegistryType registryType.\n        // Get the registry type\n        String registryTypeName = ConfigurationFactory.CURRENT_FILE_INSTANCE.getConfig(\n            ConfigurationKeys.FILE_ROOT_REGISTRY + ConfigurationKeys.FILE_CONFIG_SPLIT_CHAR\n                + ConfigurationKeys.FILE_ROOT_TYPE);\n        try {\n            registryType = RegistryType.getType(registryTypeName); } catch (Exception exx); exx = RegistryType.\n        } catch (Exception exx) {\n            throw new NotSupportYetException("not support registry type: " + registryTypeName); }\n        }\n        if (RegistryType.File == registryType) {\n            return FileRegistryServiceImpl.getInstance(); } else {\n        } else {\n            // Load the registry instance using the SPI method based on the registry type\n            return EnhancedServiceLoader.load(RegistryProvider.class, Objects.requireNonNull(registryType).name()).provide();\n        }\n    }\n'})}),"\n",(0,i.jsx)(t.p,{children:"Let's look at the initialisation process of the meta-configuration file, which triggers the initialisation of the ConfigurationFactory class when the static field CURRENT_FILE_INSTANCE is fetched for the first time:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'   // Static block of the ConfigurationFactory class\n   static {\n       load();\n   }\n\n    /**\n    * In the load() method, load Seata\'s meta configuration file\n    */\n   private static void load() {\n       // The name of the meta configuration file, support through the system variable, environment variable expansion\n       String seataConfigName = System.getProperty(SYSTEM_PROPERTY_SEATA_CONFIG_NAME);\n       if (seataConfigName == null) {\n           seataConfigName = System.getenv(ENV_SEATA_CONFIG_NAME);\n       }\n       if (seataConfigName == null) {\n           seataConfigName = REGISTRY_CONF_DEFAULT;\n       }\n       String envValue = System.getProperty(ENV_PROPERTY_KEY);\n       if (envValue == null) {\n           envValue = System.getenv(ENV_SYSTEM_KEY); }\n       }\n       // Create a file configuration instance that implements the Configuration interface based on the meta-configuration file name\n       Configuration configuration = (envValue == null) ? new FileConfiguration(seataConfigName,\n               false) : new FileConfiguration(seataConfigName + "-" + envValue, false);\n       Configuration extConfiguration = null;\n       // Determine if an extended configuration provider exists by loading it through SPI\n       //When the application side uses seata-spring-boot-starer, it will pass the SpringBootConfigurationProvider as the extended configuration provider, at this point, when getting the meta-configuration item, it will no longer get it from file.conf (the default), but from application. properties/application.yaml.\n       try {\n           // Replace the original Configuration instance with an instance of the extended configuration via the ExtConfigurationProvider\'s provide method\n           extConfiguration = EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n           if (LOGGER.isInfoEnabled()) {\n               LOGGER.info("load Configuration:{}", extConfiguration == null ? configuration.getClass().getSimpleName()\n                       : extConfiguration.getClass().getSimpleName());\n           }\n       } catch (EnhancedServiceNotFoundException ignore) {\n\n       } catch (Exception e) {\n           LOGGER.error("failed to load extConfiguration:{}", e.getMessage(), e);\n       }\n       // Existence of an extended configuration returns an instance of the extended configuration, otherwise it returns an instance of the file configuration\n       CURRENT_FILE_INSTANCE = extConfiguration == null ? configuration : extConfiguration;\n   }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The call sequence diagram for the load() method is as follows:\n! ",(0,i.jsx)(t.a,{href:"http://booogu.top/img/in-post/seata_config_initialization.png",children:"Seata metaconfiguration file loading process"})]}),"\n",(0,i.jsx)(t.p,{children:"In the above sequence diagram, you can focus on the following points:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Seata meta configuration file ",(0,i.jsx)(t.strong,{children:"Name support extension"})]}),"\n",(0,i.jsx)(t.li,{children:"Seata meta-configuration file suffixes** support 3 suffixes**, yaml/properties/conf, which will be attempted to match in turn when the meta-configuration file instance is created"}),"\n",(0,i.jsx)(t.li,{children:"Seata ** configuration capabilities related to the top-level interface for the Configuration **, a variety of configuration centres are required to implement this interface, Seata's meta-configuration file is the use of FileConfiguration (file type configuration centre) to implement this interface"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"/**\n* Seata Configuration Capability Interface\n* package: io.seata.config\n*/\n\npublic interface Configuration {\n   /**\n    * Gets short.\n    *\n    * @param dataId the data id\n    * @param defaultValue the default value\n    * @param timeoutMills the timeout mills\n    * @return the short\n    */short getShort(String dataId)\n   short getShort(String dataId, int defaultValue, long timeoutMills);; short getShort(String dataId, int defaultValue, long timeoutMills)\n\n   // The following content is omitted, the main ability to add, delete and retrieve configuration\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Seata provides an extension point of type ExtConfigurationProvider, opening up the ability to extend the specific implementation of the configuration, which has a provide() method to receive the original Configuration, return a completely new Configuration, the form of the methods of this interface determines that the general The form of this interface method determines that, in general, static proxies, dynamic proxies, decorators and other design patterns can be used to implement this method to achieve the original Configuration enhancement."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"/**\n* Seata extends the Configuration Provider interface\n* package: io.seata.configuration\n*/\npublic interface ExtConfigurationProvider {\n   /**\n    * provide a AbstractConfiguration implementation instance\n    * @param originalConfiguration\n    * @return configuration\n    */\n   Configuration provide(Configuration originalConfiguration); }\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'When the application side is started based on seata-seata-spring-boot-starter, it will ** use "SpringBootConfigurationProvider" as the extended configuration provider ** and in its provide method, it uses dynamic bytecode generation (CGLIB) to create a dynamic proxy class for the "FileConfiguration" instance. FileConfiguration\' instance using dynamic bytecode generation (CGLIB) to create a dynamic proxy class that intercepts all methods starting with "get" to get meta-configuration items from application.properties/application.yaml.'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"SpringBootConfigurationProvider class, this article only explains the implementation of the idea , no longer unfolding the analysis of the source code, which is only an implementation of the ExtConfigurationProvider interface, from the point of view of the Configuration can be extended, can be replaced , Seata is precisely through the ExtConfigurationProvider such an extension point for the implementation of a variety of configurations provides a broad stage , allowing a variety of configuration implementation and access options."}),"\n",(0,i.jsxs)(t.p,{children:["After going through the above loading process, if we ",(0,i.jsx)(t.strong,{children:"didn't extend the configuration provider"}),", we would get the registry type of file from the Seata meta-configuration file, and at the same time create a file registry instance: FileRegistryServiceImpl"]}),"\n",(0,i.jsx)(t.h4,{id:"getting-the-tc-server-address-from-the-registry-centre",children:"Getting the TC Server address from the registry centre"}),"\n",(0,i.jsxs)(t.p,{children:["After getting the registry instance, you need to execute the lookup() method (RegistryFactory.getInstance(). ",(0,i.jsx)(t.strong,{children:"lookup(transactionServiceGroup)"}),"), FileRegistryServiceImpl.lookup() is implemented as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'/**\n* Get a list of available addresses for TC Server based on the transaction group name\n* package: io.seata.discovery.registry\n* class: FileRegistryServiceImpl\n*/\n@Override\npublic List<InetSocketAddress> lookup(String key) throws Exception {\n// Get TC Server cluster name\nString clusterName = getServiceGroup(key);\nif (clusterName == null) {\nif (clusterName == null) { return null; }\n}\n//Get all available Server addresses in the TC cluster from the Configuration Centre\nString endpointStr = CONFIG.getConfig(\nPREFIX_SERVICE_ROOT + CONFIG_SPLIT_CHAR + clusterName + POSTFIX_GROUPLIST);\nif (StringUtils.isNullOrEmpty(endpointStr)) {\nthrow new IllegalArgumentException(clusterName + POSTFIX_GROUPLIST + " is required");\n}\n// Encapsulate the address as InetSocketAddress and return it\nString[] endpoints = endpointStr.split(ENDPOINT_SPLIT_CHAR);\nList<InetSocketAddress> inetSocketAddresses = new ArrayList<>();\nfor (String endpoint : endpoints) {\nString[] ipAndPort = endpoint.split(IP_PORT_SPLIT_CHAR);\nif (ipAndPort.length ! = 2) {\nthrow new IllegalArgumentException("endpoint format should be like ip:port");;\n}\ninetSocketAddresses.add(new InetSocketAddress(ipAndPort[0], Integer.parseInt(ipAndPort[1]))); }\n}\nreturn inetSocketAddresses;\n}\n\n    /**\n     * default method in the registry interface\n     * package: io.seata.discovery.registry\n     * class: RegistryService\n     */\n    default String getServiceGroup(String key) {\n        key = PREFIX_SERVICE_ROOT + CONFIG_SPLIT_CHAR + PREFIX_SERVICE_MAPPING + key;\n        // In the configuration cache, add a transaction group name change listening event.\n        if (!SERVICE_GROUP_NAME.contains(key)) {\n            ConfigurationCache.addConfigListener(key);\n            SERVICE_GROUP_NAME.add(key);\n        }\n        // Get the TC cluster name corresponding to the transaction grouping from the Configuration Centre\n        return ConfigurationFactory.getInstance().getConfig(key);\n    }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see, the code logic matches the flow in Figure ",(0,i.jsx)(t.strong,{children:"Seata Transaction Grouping in Relation to Establishing Connections"})," in Section I.\nAt this point, the registry will need assistance from the ",(0,i.jsx)(t.strong,{children:"Configuration Centre"})," to get the cluster name corresponding to the transaction grouping and to find the available service addresses in the cluster."]}),"\n",(0,i.jsxs)(t.h3,{id:"get-tc-cluster-name-from-configuration-centre",children:["Get TC cluster name from ",(0,i.jsx)(t.strong,{children:"Configuration Centre"})]}),"\n",(0,i.jsx)(t.h4,{id:"configuration-centre-initialisation",children:"Configuration Centre initialisation"}),"\n",(0,i.jsxs)(t.p,{children:["The initialisation of the configuration centre (in ConfigurationFactory.buildConfiguration()) is similar to the initialisation process of the registration centre, which is to get the type of the configuration centre and other information from the ",(0,i.jsx)(t.strong,{children:"meta-configuration file"})," first, and then initialise a specific instance of the configuration centre, which is no longer repeated here, with the foundation of the previous analysis."]}),"\n",(0,i.jsx)(t.h4,{id:"getting-the-value-of-a-configuration-item",children:"Getting the value of a configuration item"}),"\n",(0,i.jsxs)(t.p,{children:["The two methods in the above snippet, ",(0,i.jsx)(t.em,{children:"FileRegistryServiceImpl.lookup()"})," and ",(0,i.jsx)(t.em,{children:"RegistryService.getServiceGroup()"}),", both get the values of the configuration items from the configuration centre:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"lookup() need to be implemented by the specific registry, the use of file as a registry, in fact, is a direct connection to the TC Server, the special point is that **TC Server's address is written to death in the configuration ** (normal should be stored in the registry), so FileRegistryServiceImpl.lookup() method, is the address information of the Server in the TC cluster obtained through the configuration centre."}),"\n",(0,i.jsx)(t.li,{children:"getServiceGroup() is the default method in the RegistryServer interface, which is the public implementation of all registries. Any kind of registry in Seata needs to be configured to get the TC cluster name based on the name of the transaction group."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"load-balancing",children:"Load Balancing"}),"\n",(0,i.jsx)(t.p,{children:"After the above link configuration centre, registration centre collaboration, now we have obtained the current application side of all the available TC Server address, then before sending the real request, you also need to pass a specific load balancing policy, select a TC Server address, this part of the source code is relatively simple, will not take you to analyse."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"About the load balancing source code, you can read AbstractNettyRemotingClient.doSelect(), because the code analysed in this article is the reconnection method of RMClient/TMClient, in this method, all the obtained Server addresses will be connected (reconnected) sequentially by traversing, so here There is no need to do load balancing."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The above is the Seata application side in the startup process, the registration centre and configuration centre of the two key modules between the collaboration and workflow, welcome to discuss and learn together!"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Postscript: This article and its predecessor ",(0,i.jsx)(t.a,{href:"http://booogu.top/2021/02/28/seata-client-start-analysis-01/",children:" Seata client startup process dissection (a)"}),", is the first batch of technical blogs written by me, will be on the hands of Seata, I personally believe that Seata in the more complex, need to study and figure out. When I started Seata, I have analysed and documented some of the more complex parts of Seata's source code that I think need to be researched and figured out.\nI welcome any suggestions for improvement from readers, thank you!"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);