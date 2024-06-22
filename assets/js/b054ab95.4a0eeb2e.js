"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[13921],{73579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(74848),i=n(28453);const r={title:"Dynamically Creating/Closing Seata Distributed Transactions through AOP",keywords:["Seata","Nacos","distributed transaction","spring"],description:"This article explains how to dynamically create/close Seata distributed transactions using AOP.",author:"FUNKYE",date:"2019/12/23"},a="Foreword",s={permalink:"/blog/seata-spring-boot-aop-aspectj",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-spring-boot-aop-aspectj.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-spring-boot-aop-aspectj.md",title:"Dynamically Creating/Closing Seata Distributed Transactions through AOP",description:"This article explains how to dynamically create/close Seata distributed transactions using AOP.",date:"2019-12-23T00:00:00.000Z",formattedDate:"December 23, 2019",tags:[],readingTime:3.765,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"Dynamically Creating/Closing Seata Distributed Transactions through AOP",keywords:["Seata","Nacos","distributed transaction","spring"],description:"This article explains how to dynamically create/close Seata distributed transactions using AOP.",author:"FUNKYE",date:"2019/12/23"},unlisted:!1,prevItem:{title:"Seata Core Module Source Code Analysis",permalink:"/blog/seata-analysis-core-modular"},nextItem:{title:"Seata Dynamic Configuration Subscription and Degradation Implementation Principles",permalink:"/blog/seata-dynamic-config-and-dynamic-disable"}},c={authorsImageUrls:[void 0]},l=[{value:"Preparation",id:"preparation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Dynamically create/close Seata distributed transactions through AOP"}),"\n",(0,o.jsx)(t.p,{children:"This article was written by FUNKYE (Chen Jianbin), the main programmer of an Internet company in Hangzhou."}),"\n",(0,o.jsx)(t.p,{children:"Through the GA conference on the senior R & D engineering Chen Pengzhi drop trip in the drop two-wheeler business practice, found that the need for dynamic degradation is very high, so this simple use of spring boot aop to simply deal with degradation of the relevant processing, this is very thankful to Chen Pengzhi's sharing!"}),"\n",(0,o.jsxs)(t.p,{children:["can use this demo ",(0,o.jsx)(t.a,{href:"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata",children:"project address"})]}),"\n",(0,o.jsx)(t.p,{children:"through the following code transformation practice ."}),"\n",(0,o.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Create a TestAspect for testing."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'package org.test.config;\n\nimport java.lang.reflect.\n\nimport org.apache.commons.lang3.StringUtils; import org.aspectj.\nimport org.aspectj.lang.JoinPoint; import org.aspectj.lang.\nimport org.aspectj.lang.annotation.AfterReturning; import org.aspectj.lang.annotation.\nimport org.aspectj.lang.annotation.AfterThrowing; import org.aspectj.lang.annotation.\nimport org.aspectj.lang.JoinPoint.import org.aspectj.annotation.AfterReturning; import org.aspectj.lang.annotation.\nimport org.aspectj.lang.annotation.\nimport org.aspectj.lang.reflect.MethodSignature; import org.aspectj.lang.reflect.\nimport org.aspectj.lang.annotation.Aspect; import org.aspectj.lang.reflect.\nimport org.slf4j.LoggerFactory; import org.springframework.\nimport org.springframework.stereotype.Component; import org.springframework.stereotype.\n\nimport io.seata.core.context.\nimport io.seata.core.exception.TransactionException; import io.seata.core.exception.\nimport io.seata.tm.api.GlobalTransaction; import io.seata.tm.api.\nimport io.seata.tm.api.GlobalTransactionContext; import io.seata.tm.api.\n\n@Aspect\nGlobalTransactionContext; @Aspect\npublic class TestAspect {\nprivate final static Logger logger = LoggerFactory.getLogger(TestAspect.class); @Before("execution"); @Before("execution")\n\n    @Before("execution(* org.test.service.*. *(...))")\n    public void before(JoinPoint joinPoint) throws TransactionException {\n        MethodSignature signature = (MethodSignature)joinPoint.getSignature();\n        Method method = signature.getMethod(); logger.info\n        logger.info("Intercepted method that requires a distributed transaction, " + method.getName()); // Use redis or redis.getName() here.\n        // Here you can use redis or a timed task to get a key to determine if the distributed transaction needs to be closed.\n        // Simulate a dynamic shutdown of a distributed transaction\n        if ((int)(Math.random() * 100) % 2 == 0) {\n            GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n            tx.begin(300000, "test-client");\n        } else {\n            logger.info("Closing distributed transaction"); }\n        }\n    }\n\n    @AfterThrowing(throwing = "e", pointcut = "execution(* org.test.service. *(...))")\n    public void doRecoveryActions(Throwable e) throws TransactionException {\n        logger.info("Method Execution Exception: {}", e.getMessage());\n        if (!StringUtils.isBlank(RootContext.getXID()))\n            GlobalTransactionContext.reload(RootContext.getXID()).rollback();\n    }\n\n    @AfterReturning(value = "execution(* org.test.service.*. *(...))" , returning = "result")\n    public void afterReturning(JoinPoint point, Object result) throws TransactionException {\n        logger.info("End of method execution: {}", result);\n        if ((Boolean)result) {\n            if (!StringUtils.isBlank(RootContext.getXID())) {\n                logger.info("DistributedTransactionId:{}", RootContext.getXID());\n                GlobalTransactionContext.reload(RootContext.getXID()).commit();\n            }\n        }\n    }\n\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Please note that the package name above can be changed to your own service package name: ``."}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Change the service code."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"    public Object seataCommit() {\n        testService.Commit(); return true; return true; testService.Commit(); testService.Commit()\n        testService.Commit(); return true; }\n    }\n"})}),"\n",(0,o.jsx)(t.p,{children:"Because of the exception and return results we will intercept, so this side can trycatch or directly let him throw an exception to intercept the line, or directly judge the return results, such as your business code code = 200 for success, then the commit, and vice versa in the interception of the return value of that section of the code plus rollback; # Debugging."}),"\n",(0,o.jsx)(t.h1,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Change the code to actively throw exceptions"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"    public Object seataCommit() {\n        try {\n            testService.Commit();\n            testService.Commit(); int i = 1 / 0; return true; return\n            return true; } catch (Exception e) { testService.\n        } catch (Exception e) {\n            // TODO: handle exception\n            throw new RuntimeException(); } catch (Exception e) { // TODO: handle exception.\n        }\n    }\n"})}),"\n",(0,o.jsx)(t.p,{children:"View log:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"2019-12-23 11:57:55.386 INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController : Intercepted method requiring distributed transaction, seataCommit\n2019-12-23 11:57:55.489 INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction : Begin new global transaction [192.168.14.67 :8092:2030765910]\n2019-12-23 11:57:55.489 INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController : Creating distributed transaction complete 192.168.14.67 :8092:2030765910\n2019-12-23 11:57:55.709 INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController : Method execution exception:null\n2019-12-23 11:57:55.885 INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction : [192.168.14.67:8092:2030765910] rollback status: Rollbacked\n2019-12-23 11:57:55.888 ERROR 23952 --- [.0-28888-exec-7] o.a.c.c.C. [. [. [/]. [dispatcherServlet] : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is java.lang.RuntimeException] with root cause\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can see that it has been intercepted and triggered a rollback."}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Restore the code to debug the normal situation:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"    public Object seataCommit() {\n        testService.Commit(); testService.Commit(); testService.Commit(); testService.Commit()\n        testService.Commit(); return true; }\n    }\n"})}),"\n",(0,o.jsx)(t.p,{children:"Viewing logs."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"2019-12-23 12:00:20.876 INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController : Intercepted method requiring distributed transaction, seataCommit\n2019-12-23 12:00:20.919 INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction : Begin new global transaction [192.168.14.67 :8092:2030765926]\n2019-12-23 12:00:20.920 INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController : Creating distributed transaction complete 192.168.14.67 :8092:2030765926\n2019-12-23 12:00:21.078 INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController : End of method execution:true\n2019-12-23 12:00:21.078 INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController : Distributed transaction Id:192.168.14.67:8092:2030765926\n2019-12-23 12:00:21.213 INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction : [192.168.14.67:8092:2030765926] commit status: Committed\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can see that the transaction has been committed."}),"\n",(0,o.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"For more details, we hope you will visit the following address to read the detailed documentation."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://nacos.io/zh-cn/index.html",children:"nacos website"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"http://dubbo.apache.org/en-us/",children:"dubbo website"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://seata.apache.org/zh-cn/",children:"seata official website"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.docker.com/",children:"docker official website"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);