# 1. What is kubernetes?
    => It's an open-source platform designed to automate deploying, scaling and operating application containers.
    
    A kubernetes cluster consists of 2 types of resources:
      1. Master => coordinates all activities in the cluster, for example, => scheduling applications, maintining applications state,
                    scaling applications, and rolling out new updates.

      2. Node => A node is an instance of an OS that serves as a worker machine in a kubernetes cluster.

      **Also, Node have 2 components:**
        1. kubelet => Agent for managing and communicating with the master.
        2. Tool (Docker/containers)  => Tools for running container operations.

        

# 2. Kubernetes Architecture?
    => It offers container orchestration, container runtime, container-centric infrastrcture orchestration, balance of load, self-healing mechanism, and service discovery.
    A kubernetes cluster has several control planes and one or more worker nodes.
    ![image](https://github.com/user-attachments/assets/9a6eb022-59a2-4b56-bf2f-a40b9d8e45fd)



# 3. What is POD?
    => A POD are the smallest unit of objects that can be deployed on kubernetes, kubernetes packages one or more containers into a higher-level strcture called a POD.
      POD runs one level higher than the container.
    => POD always runs on a Node but they share a few resources which can be shared volumes, cluster unique IP, and info about how to run each containers.
    ![image](https://github.com/user-attachments/assets/5148f171-a4a3-4e1b-8b0d-ca4e2e83e48b)


# 4. How to do maintenance activity on the K8 node?
    => when there are security patches available the kubernetes administrator has to perform the maintenance task to apply the security patch to the running container in order to prevent it from vulnerability.
      2 commands are useful to safely drain the K8s node.
        1. kubectl cordon: it moves the node to maintenance mode or makes the node unavailable
        2. kubectl drain -ignore-daemon set:   it will finally discard the pod from the node, after the drain command is a success you can perform maintenance.


# 5. How to get the central logs from POD?
    => Common logging patterns:
        1. Node level logging agent.
        2. Streaming sidecar container.
        3. Sidecar container with the logging agent.
        4. Export logs directly from the application.

# 6. How to monitor the kubernetes cluster?
    => Prometheus is used for kubernetes monitoring. and it consists of multiple components.
      1. Mainly prometheus server which scrapes and stores time-series data.
      2. Client librearies for instrumenting application code.
      3. Push geteway for supporting short-lived jobs.
      4. special purpose exporters for service like StatsD, HAProxy, Graphite, etc.
      5. An alert manage to handle alerts on various support tools.

# 7. How to increase kubernetes security?
    => by default, POD can communicate with any other POD, we can set up network policies to limit this communication b/w the PODs.
      1. RBAC (role-based access control)
      2. Use namespaces to establish security boundries.
      3. Set the admission control policies to avoid running the privileged containers.
      4. Turn on audit logging.

# 8. Role of Load Balance in Kubernetes?
    => Load balancing is a way to distribute the incoming traffic into multiple backend servers, which is useful to ensure the application avaialble to the users.

# 9. What's the init container and when it can be used?
    => init container will set a stage for you before running the actual POD.
    => Clone a git repository into a volume.

# 10. What is PDB?
    => A kubernetes administrator can create a deployment of a kind: PodDisruptionBudget for high availablility of the application, it makes sure that the minimum number is running pods are respected as mentioned by the **attribute minAvailable spec file.**

# 11. What are K8's services running on nodes and describe the role of each service?
    => Mainly K8 cluster consists of 2 type of nodes, executor aand master.
      1. Executor node: (This runs on master node)
        a. Kube-proxy: This service is responsible for the communication of pods within the cluster and to the outside network, which runs on every node. This service is responsible to maintain network protocols when your pod establish a network communication.
        b. Kubelet:  Each node has a running kubelet service that updates the running node accordingly with the configuration(YAML or JSON) file. Note: kubelet service is only for containers created by kubernetes.

      2. Master Service:
        a. Kube-apiserver: Master API service which acts as an entry point to k8 cluster.
        b. Kube-schedular: Schedule PODs according to available resources on executor nodes.
        c. Kube-controler-manager: Its a control loop that watches the shared state of the cluster through the apiserver and makes changes attempting to move the current state towards the desired stable state.


# 12. How do we control the resource usage of POD?
    => With the use of limit and request resource usage of a POD can be controlled.
    1. Request: The number of resources being request for a container. If a container exceeds its request for resources, it can be throttled back down to its request.
    2. Limit: An upper cap on the resources a signle container can use. If it tries to exceed this predefined limit it can be terminated if K8's decides that another container needs these resources.


# 13. What is ingress Default Backend?
    => it specifies what to do with an incoming request to the kubernetes cluster that isn't mapped to any backend i.e, what to do when no rules being defined for the incoming HTTP request if the default backend service is not defined, it's recommended to define it so that users still see some kind of message instead of unclear error.

# 14. What is GKE?
    => its Google Kubernetes Engine that is used for managing and orchestrating systems for Docker containers.

# 15. WHat is the purpose of operators?
    => It paves the way for a standard process to be automated acros several kubernetes clusters.


# 16. What is an operator?
    => As an extension to K8, the operaror provides the capability of managing applications and their components using custom resources. Operators generally comply with all the principles relating to kubernetes, especially those relating to the control loops.

# 17. Why should namespaces be used?
    => The namespaces allow applications to be organized into groups that make sense, such as a namespace for all monitoring applicationis and another for all security applications.
    namespaces can be used for managing Blue/Green environments.

# 18. How should TLS be configured with Ingress?
    => spec:
        tls:
        -hosts:
            -some_app.com
        secretName:someapp-secret-tls

# 19. What is kubernetes Load Balancing?
    => Load Balancing is one of the most common and standard ways of exposing the services. There are 2 types of load balancing in k8s and they are:
    1. Internal Load Balancer: This type of balancer automatically balances loads and allocates the pods with the required incoming load.
    2. External Load Balancer: This type of balancer directs the traffic from the external loads to backend pods.


# 20. How to run kubernetes locally?
    => using Minikube tool, it runs a single-node bunch in a VM on the computer.
    
        
