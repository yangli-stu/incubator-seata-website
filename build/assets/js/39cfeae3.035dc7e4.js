"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34014],{20643:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(74848),o=i(28453);const r={title:"Analysis of Seata Configuration Management Principles",keywords:["Seata","configuration center","configuration management","Spring configuration"],description:"This article primarily introduces the core implementation of Seata configuration management and the interaction process with Spring configuration.",author:"xiaoyong.luo",date:"2021/01/10"},a="Server startup process",c={permalink:"/blog/seata-config-manager",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-config-manager.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-config-manager.md",title:"Analysis of Seata Configuration Management Principles",description:"This article primarily introduces the core implementation of Seata configuration management and the interaction process with Spring configuration.",date:"2021-01-10T00:00:00.000Z",formattedDate:"January 10, 2021",tags:[],readingTime:9.945,hasTruncateMarker:!1,authors:[{name:"xiaoyong.luo"}],frontMatter:{title:"Analysis of Seata Configuration Management Principles",keywords:["Seata","configuration center","configuration management","Spring configuration"],description:"This article primarily introduces the core implementation of Seata configuration management and the interaction process with Spring configuration.",author:"xiaoyong.luo",date:"2021/01/10"},unlisted:!1,prevItem:{title:"Integration of Spring Cloud with Seata for Distributed Transaction - TCC Mode",permalink:"/blog/integrate-seata-tcc-mode-with-spring-cloud"},nextItem:{title:"Detailed Explanation of seata-golang Communication Model",permalink:"/blog/seata-golang-communication-mode"}},s={authorsImageUrls:[void 0]},l=[{value:"Configuration management initialisation",id:"configuration-management-initialisation",level:2},{value:"ConfigurationFactory initialisation",id:"configurationfactory-initialisation",level:2},{value:"Configuration initialisation",id:"configuration-initialisation",level:2},{value:"Configuration Enhancement Implementation",id:"configuration-enhancement-implementation",level:2},{value:"Configuration Enhancement and Spring",id:"configuration-enhancement-and-spring",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When it comes to Seata configuration management, you may think of Seata in the adaptation of the various configuration centre, in fact, today to say that this is not the case, although it will also be a simple analysis of Seata and the process of adapting to the configuration centre, but the main still explain the core implementation of Seata configuration management"}),"\n",(0,t.jsx)(n.p,{children:"Before talking about the configuration centre, first briefly introduce the startup process of the Server side, because this piece involves the initialisation of the configuration management, the core process is as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The entry point of the process is in the ",(0,t.jsx)(n.code,{children:"Server#main"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"several forms of obtaining the port: from the container; from the command line; the default port"}),"\n",(0,t.jsx)(n.li,{children:"Parse the command line parameters: host, port, storeMode and other parameters, this process may be involved in the initialisation of the configuration management"}),"\n",(0,t.jsx)(n.li,{children:"Metric-related: irrelevant, skip"}),"\n",(0,t.jsx)(n.li,{children:"NettyServer initialisation"}),"\n",(0,t.jsx)(n.li,{children:"core controller initialisation: the core of the Server side, but also includes a few timed tasks"}),"\n",(0,t.jsx)(n.li,{children:"NettyServer startup"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The code is as follows, with non-core code removed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public static void main(String[] args) throws IOException {\n// Get the port in several forms: from the container; from the command line; the default port, use to logback.xml\nint port = PortHelper.getPort(args);\nSystem.setProperty(ConfigurationKeys.SERVER_PORT, Integer.toString(port));\n\n    // Parsing startup parameters, container and non-container.\n    ParameterParser parameterParser = new ParameterParser(args); // Parsing startup parameters, both container and non-container.\n\n    // Metric-related\n    MetricsManager.get().init(); // MetricsManager.get().init(); // NettyServer initialisation.\n\n    // NettyServer initialisation\n    NettyRemotingServer nettyRemotingServer = new NettyRemotingServer(workingThreads); // NettyServer initialisation.\n\n    // Core controller initialisation\n    DefaultCoordinator coordinator = new DefaultCoordinator(nettyRemotingServer); // Core controller initialisation.\n    coordinator.init(); // Initialise the core controller.\n\n    // NettyServer startup\n    nettyRemotingServer.init(); // NettyServer starts.\n}\n``\n\nWhy does ``step 3`` involve the initialisation of the configuration management? The core code is as follows:\n ```java\n if (StringUtils.isBlank(storeMode)) {\n    storeMode = ConfigurationFactory.getInstance().getConfig(ConfigurationKeys.STORE_MODE,\n        SERVER_DEFAULT_STORE_MODE);\n }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"storeMode"})," is not specifically specified in the startup parameters, the configuration will be fetched through the ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," related API, which involves two parts in the ",(0,t.jsx)(n.code,{children:"ConfigurationFactory.getInstance()"})," line of code: ",(0,t.jsx)(n.code,{children:" ConfigurationFactory"})," static code initialisation and ",(0,t.jsx)(n.code,{children:"Configuration"})," initialisation. Let's focus on analysing this part"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-management-initialisation",children:"Configuration management initialisation"}),"\n",(0,t.jsx)(n.h2,{id:"configurationfactory-initialisation",children:"ConfigurationFactory initialisation"}),"\n",(0,t.jsxs)(n.p,{children:["We know that there are two key configuration files in Seata: ",(0,t.jsx)(n.code,{children:"registry.conf"}),", which is the core configuration file and must be there, and ",(0,t.jsx)(n.code,{children:"file.conf"}),", which is only needed if the configuration centre is ",(0,t.jsx)(n.code,{children:"File"}),". The ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," static code block actually mainly loads the ",(0,t.jsx)(n.code,{children:"registry.conf"})," file, roughly as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:["1, in the case of no manual configuration, the default read ",(0,t.jsx)(n.code,{children:"registry.conf"})," file, encapsulated into a ",(0,t.jsx)(n.code,{children:"FileConfiguration"})," object, the core code is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Configuration configuration = new FileConfiguration(seataConfigName,false);\nFileConfigFactory.load("registry.conf", "registry");\nFileConfig fileConfig = EnhancedServiceLoader.load(FileConfig.class, "CONF", argsType, args);\n'})}),"\n",(0,t.jsx)(n.p,{children:"2\u3001Configuration enhancement: similar to the proxy model, to get the configuration, do some other processing inside the proxy object, the following details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Configuration extConfiguration = EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Assign the proxy object in step 2 to the ",(0,t.jsx)(n.code,{children:"CURRENT_FILE_INSTANCE"})," reference, which is used directly in many places as a static reference to ",(0,t.jsx)(n.code,{children:"CURRENT_FILE_INSTANCE"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"   CURRENT_FILE_INSTANCE = extConfiguration == null ? configuration : extConfiguration;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It's easy to assume that ",(0,t.jsx)(n.code,{children:"CURRENT_FILE_INSTANCE"})," corresponds to the contents of ",(0,t.jsx)(n.code,{children:"registry.conf"}),". I don't think ",(0,t.jsx)(n.code,{children:"registry.conf"})," is a good name for the file, it's too ambiguous, would it be better to call it ",(0,t.jsx)(n.code,{children:"bootstrap.conf"}),"?"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-initialisation",children:"Configuration initialisation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configuration"})," actually corresponds to the configuration centre, Seata currently supports a lot of configuration centres, almost all the mainstream configuration centres are supported, such as: apollo, consul, etcd, nacos, zk, springCloud, local files. When using local files as a configuration centre, it involves the loading of ",(0,t.jsx)(n.code,{children:"file.conf"}),", which of course is the default name and can be configured by yourself. By now, you basically know the relationship between ",(0,t.jsx)(n.code,{children:"registry.conf"})," and ",(0,t.jsx)(n.code,{children:"file.conf"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configuration"})," as a single instance in ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"}),", so the initialisation logic of ",(0,t.jsx)(n.code,{children:"Configuration"})," is also in ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"}),", the approximate process is as follows:\n1, first read the ",(0,t.jsx)(n.code,{children:"config.type"})," attribute from the ",(0,t.jsx)(n.code,{children:"registry.conf"})," file, which is ",(0,t.jsx)(n.code,{children:"file"})," by default."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"configTypeName = CURRENT_FILE_INSTANCE.getConfig(ConfigurationKeys.FILE_ROOT_CONFIG + ConfigurationKeys.FILE_CONFIG_SPLIT_CHAR+ ConfigurationKeys.FILE_ROOT_TYPE);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Load the configuration centre based on the value of the ",(0,t.jsx)(n.code,{children:"config.type"})," attribute, e.g., the default is: ",(0,t.jsx)(n.code,{children:"file"}),", then first read the ",(0,t.jsx)(n.code,{children:"registry.conf"})," file from ",(0,t.jsx)(n.code,{children:"config.file.name"})," to read the corresponding file name of the local file configuration centre, and then create a ",(0,t.jsx)(n.code,{children:"FileConfiguration"})," object based on the name of the file. This loads the configuration in ",(0,t.jsx)(n.code,{children:"file.conf"})," into memory. Similarly, if the configuration is for another Configuration Centre, the other Configuration Centre will be initialised via SPI. Another thing to note is that at this stage, if the configuration centre is a local file, a proxy object is created for it; if it is not a local file, the corresponding configuration centre is loaded via SPI"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'if (ConfigType.File == configType) {\n   String pathDataId = String.join("config.file.name");\n   String name = CURRENT_FILE_INSTANCE.getConfig(pathDataId);\n   String name = CURRENT_FILE_INSTANCE.getConfig(pathDataId); configuration = new FileConfiguration(name);\n   try {\n       // Configure the Enhanced Proxy\n       extConfiguration = EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration); } catch (Exception e) { { new FileConfiguration(name); configuration = new FileConfiguration(name); }\n   } catch (Exception e) {\n       LOGGER.error("failed to load extConfiguration:{}", e.getMessage(), e);\n   }\n} else {\n   configuration = EnhancedServiceLoader\n           .load(ConfigurationProvider.class, Objects.requireNonNull(configType).name()).provide();\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["3, based on the ",(0,t.jsx)(n.code,{children:"Configuration"})," object created in step 2, create another layer of proxy for it, this proxy object has two roles: one is a local cache, you do not need to get the configuration from the configuration every time you get the configuration; the other is a listener, when the configuration changes will update the cache it maintains. The following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"if (null ! = extConfiguration) {\n   configurationCache = ConfigurationCache.getInstance().proxy(extConfiguration);\n} else {\n   configurationCache = ConfigurationCache.getInstance().proxy(configuration);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point, the initialisation of the configuration management is complete. ",(0,t.jsxs)(n.strong,{children:["Seata initialises the configuration centre by first loading the ",(0,t.jsx)(n.code,{children:"registry.conf"})," file to get the corresponding configuration centre information, the registry, and then initialising the configuration centre based on the corresponding information obtained. In the case of using a local file as the configuration centre, the default is to load the ",(0,t.jsx)(n.code,{children:"file.conf"})," file. Then create a proxy object for the corresponding configuration centre to support local caching and configuration listening"]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The finishing process is still relatively simple, so I'm going to throw out a few questions here:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"what is configuration enhancement and how is it done in Seata?"}),"\n",(0,t.jsxs)(n.li,{children:["if using a local file as a configuration centre, the configuration has to be defined in the ",(0,t.jsx)(n.code,{children:"file.conf"})," file. If it is a Spring application, can the corresponding configuration items be defined directly in ",(0,t.jsx)(n.code,{children:"application.yaml"}),"?"]}),"\n",(0,t.jsxs)(n.li,{children:["In step 2 mentioned above, why is it necessary to create the corresponding configuration enhancement proxy object for ",(0,t.jsx)(n.code,{children:"Configuration"})," first in the case of using a local file configuration centre, but not for other configuration centres?"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These 3 questions are all closely related and are all related to Seata's configuration additions. Here are the details"}),"\n",(0,t.jsx)(n.h1,{id:"configuration-management-enhancements",children:"Configuration Management Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"Configuration enhancement, in simple terms, is to create a proxy object for which proxy logic is executed when executing the target method of the target unique object, and from the perspective of the configuration centre, it is to execute the proxy logic when obtaining the corresponding configuration through the configuration centre."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["get the configuration through ",(0,t.jsx)(n.code,{children:"ConfigurationFactory.CURRENT_FILE_INSTANCE.getgetConfig(key)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Load the ",(0,t.jsx)(n.code,{children:"registry.conf"})," file to create the FileConfiguration object ",(0,t.jsx)(n.code,{children:"configuration"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a proxy object ",(0,t.jsx)(n.code,{children:"configurationProxy"})," for ",(0,t.jsx)(n.code,{children:"configuration"})," based on ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Get the configuration centre connection information ",(0,t.jsx)(n.code,{children:"file zk nacos etc"})," from ",(0,t.jsx)(n.code,{children:"configurationProxy"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a configuration centre configuration object ",(0,t.jsx)(n.code,{children:"configuration2"})," based on the connection information."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a proxy object ",(0,t.jsx)(n.code,{children:"configurationProxy2"})," for ",(0,t.jsx)(n.code,{children:"configuration2"})," based on ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Execute the proxy logic for ",(0,t.jsx)(n.code,{children:"configurationProxy2"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Find the corresponding SpringBean based on the key."}),"\n",(0,t.jsx)(n.li,{children:"Execute the getXxx method of the SpringBean."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["! ",(0,t.jsx)(n.a,{href:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb93fec40df40ba9e8ab9db06cc9b93~tplv-k3u1fbpfcp-watermark.image"})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-enhancement-implementation",children:"Configuration Enhancement Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Configuration enhancement was also briefly mentioned above and the related code is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["First get an ",(0,t.jsx)(n.code,{children:"ExtConfigurationProvider"})," object through the SPI machine, there is only one implementation in Seata by default: ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Through the ",(0,t.jsx)(n.code,{children:"ExtConfigurationProvider#provider"})," method to create a proxy object for the ",(0,t.jsx)(n.code,{children:"Configuration"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The core code is as follows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public Configuration provide(Configuration originalConfiguration) {\nreturn (Configuration) Enhancer.create(originalConfiguration.getClass(), new MethodInterceptor() {\n@Override\npublic Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy)\nthrows Throwable {\nif (method.getName().startsWith("get") && args.length > 0) {\nObject result = null;\nString rawDataId = (String) args[0];\nif (args.length == 1) {\nresult = get(convertDataId(rawDataId));\n} else if (args.length == 2) {\nresult = get(convertDataId(rawDataId), args[1]); } else if (args.length == 2) { result = get(convertDataId(rawDataId))\n} else if (args.length == 3) {\nresult = get(convertDataId(rawDataId), args[1], (Long) args[2]); } else if (Long) args.length == 3); }\n}\nif (result ! = null) {\n//If the return type is String,need to convert the object to string\nif (method.getReturnType().equals(String.class)) {\nreturn String.valueOf(result); }\n}\nreturn result; }\n}\n}\n\n            return method.invoke(originalConfiguration, args); }\n        }\n    }); }\n}\n\nprivate Object get(String dataId) throws IllegalAccessException, InstantiationException {\nString propertyPrefix = getPropertyPrefix(dataId); }; private Object get(String dataId); }; }; }\nString propertySuffix = getPropertySuffix(dataId);\nApplicationContext applicationContext = (ApplicationContext) ObjectHolder.INSTANCE.getObject(OBJECT_KEY_SPRING_APPLICATION_CONTEXT);\nClass<? > propertyClass = PROPERTY_BEAN_MAP.get(propertyPrefix);\nObject valueObject = null;\nif (propertyClass ! = null) {\ntry {\nObject propertyBean = applicationContext.getBean(propertyClass);\nvalueObject = getFieldValue(propertyBean, propertySuffix, dataId);\n} catch (NoSuchBeanDefinitionException ignore) {\n\n        }\n    } else {\n        throw new ShouldNeverHappenException("PropertyClass for prefix: [" + propertyPrefix + "] should not be null."); }\n    }\n    if (valueObject == null) {\n        valueObject = getFieldValue(propertyClass.newInstance(), propertySuffix, dataId);\n    }\n\n    return valueObject; }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["1, if the method starts with ",(0,t.jsx)(n.code,{children:"get"})," and the number of arguments is 1/2/3, then perform the other logic of getting the configuration, otherwise perform the logic of the native ",(0,t.jsx)(n.code,{children:"Configuration"})," object\n2, we do not need to bother why this rule, this is a Seata agreement\n3, ",(0,t.jsx)(n.code,{children:"Other logic to get the configuration"}),", that is, through the Spring way to get the corresponding configuration value"]}),"\n",(0,t.jsxs)(n.p,{children:["Here has been clear about the principle of configuration enhancement, at the same time, can also be guessed that the only ",(0,t.jsx)(n.code,{children:"ExtConfigurationProvider"})," implementation of ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"}),", must be related to the Spring"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-enhancement-and-spring",children:"Configuration Enhancement and Spring"}),"\n",(0,t.jsx)(n.p,{children:"Before we introduce this piece, let's briefly describe how Seata is used:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Non-Starter way: introduce dependency ",(0,t.jsx)(n.code,{children:"seata-all"}),", then manually configure a few core beans."]}),"\n",(0,t.jsxs)(n.li,{children:["Starter way: Introduce the dependency ",(0,t.jsx)(n.code,{children:"seata-spring-boot-starter"}),", fully automated quasi-configuration, do not need to automatically inject the core bean"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"})," is in the ",(0,t.jsx)(n.code,{children:"seata-spring-boot-starter"})," module, i.e. when we use Seata by introducing ",(0,t.jsx)(n.code,{children:"seata-all"}),", the configuration enhancement doesn't really do anything, because at this point there is no ",(0,t.jsx)(n.code,{children:"ExtConfigurationProvider"})," to be found. ExtConfigurationProvider` implementation class can't be found at this point, so naturally it won't be enhanced."]}),"\n",(0,t.jsxs)(n.p,{children:["So how does ",(0,t.jsx)(n.code,{children:"seata-spring-boot-starter"})," tie all this together?"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["First, in the ",(0,t.jsx)(n.code,{children:"resources/META-INF/services"})," directory of the ",(0,t.jsx)(n.code,{children:"seata-spring-boot-starter"})," module, there exists a ",(0,t.jsx)(n.code,{children:"spring.factors"})," file with the following contents"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\nio.seata.spring.boot.autoconfigure.SeataAutoConfiguration,\\\n\n# Ignore for now\nio.seata.spring.boot.autoconfigure.HttpAutoConfiguration\n"})}),"\n",(0,t.jsxs)(n.p,{children:["2, in the ",(0,t.jsx)(n.code,{children:"SeataAutoConfiguration"})," file, the following beans will be created: GlobalTransactionScanner , SeataDataSourceBeanPostProcessor, SeataAutoDataSourceProxyCreator SpringApplicationContextProvider. The first three are not related to what we are going to talk about in this article, mainly focus on ",(0,t.jsx)(n.code,{children:"SpringApplicationContextProvider"}),", the core code is very simple, is to save the ",(0,t.jsx)(n.code,{children:"ApplicationContext"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class SpringApplicationContextProvider implements ApplicationContextAware {\n   @Override\n   public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n       ObjectHolder.INSTANCE.setObject(OBJECT_KEY_SPRING_APPLICATION_CONTEXT, applicationContext);\n   }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Then, in the ",(0,t.jsx)(n.code,{children:"SeataAutoConfiguration"})," file, some ",(0,t.jsx)(n.code,{children:"xxxProperties.Class"})," and the corresponding Key prefixes are also cached into ",(0,t.jsx)(n.code,{children:"PROPERTY_BEAN_MAP"}),". The ",(0,t.jsx)(n.code,{children:"xxxProperties"})," are simply understood as the various configuration items in ",(0,t.jsx)(n.code,{children:"application.yaml"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"   static {\n   PROPERTY_BEAN_MAP.put(SEATA_PREFIX, SeataProperties.class);\n   PROPERTY_BEAN_MAP.put(CLIENT_RM_PREFIX, RmProperties.class);\n   PROPERTY_BEAN_MAP.put(SHUTDOWN_PREFIX, ShutdownProperties.class); ...\n   ... Omit ...\n   }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point, the whole process is actually clear, when there is ",(0,t.jsx)(n.code,{children:"SpringBootConfigurationProvider"})," configuration enhancement, we get a configuration item as follows:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["first according to the ",(0,t.jsx)(n.code,{children:"p Configuration Key"})," to get the corresponding ",(0,t.jsx)(n.code,{children:"xxxProperties"})," object"]}),"\n",(0,t.jsxs)(n.li,{children:["get the corresponding ",(0,t.jsx)(n.code,{children:"xxxProperties"})," SpringBean through the ",(0,t.jsx)(n.code,{children:"ApplicationContext"})," in the ",(0,t.jsx)(n.code,{children:"ObjectHolder"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Get the value of the corresponding configuration based on the ",(0,t.jsx)(n.code,{children:"xxxProperties"})," SpringBean."]}),"\n",(0,t.jsxs)(n.li,{children:["At this point, we have successfully obtained the values in ",(0,t.jsx)(n.code,{children:"application.yaml"})," through configuration enhancement."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);