# Reference: https://12factor.net/ru/

The 12-factor application is a methodology for creating SaaS applications that:

1. Use a declarative format to describe the installation and configuration process, which minimizes the time and resource costs for new developers joining the project.
2. Have an agreement with the OS that allows for maximum portability b/w runtime environments.
3. Suitable for deployment on modern cloud platforms, eliminating the need for servers and system administration.
4. Minimize the difference b/w the development and runtime enviroments, enabling continous deployment for maximum flexibility;
5. And they can scale without significant changes in tools, architecture, and development practices.


***************Tweleve Factors*********************
1. **Code base**: one codebase tracked in version control  -- many deployments
2. **Dependencies**: Explicitly declare and isolate dependencies.
3. **Configuration**: Store configuration in runtime.
4. **Third Party Services (Backing Services)**: Treat backing services as pluggable resources.
5. **Build, release, execution**: Strictly separate the build and execution stages.
6. **Processes**: Run the application as one or more **stateless processes**.
7. **Port Binding**: Export services via port binding.
8. **Parallelism**: Scale your application with processes.
9. **Disposability**: Maximize reliability with fast startup and graceful shutdown.
10. **Application Development / Operation Parity**: Keep development, staging, and production enviroment as similar as possible.
11. **Logging**: Think of the log as stream of events.
12. **Tasks of Administration**: Perform administrative/managementtasks using one-time processes.
