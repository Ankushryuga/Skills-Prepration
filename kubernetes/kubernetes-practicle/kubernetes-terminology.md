## Kubernetes(K8S) is Container Orchestration system:

## Kubernetes Take Care of the::
    => 
    1. Automatic deployment of the containerized application across different servers.
    2. Distribution of the load across multiple servers
    3. Auto-scaling of the deployed applications.
    4. Monitoring and haelth check of the containers.
    5. Replacement of the failed containers.

## POD is the smallest unit in the K8S world:
    => containers are created inside POD, inside these pod, there can be multiple containers and shared volumes, shared IP Address (Shared Network resources).

NOTE: in a pod there can be multiple containers: one port one server

## One container per POD is the MOST common use case:


## K8S cluster:
    => its a collection of nodes (node is actually a server, either bare metal server or virtual server), and inside node there are PODs, and inside POD there are containers (usually one container in one pod).



## K8S Cluster: in K8S, there is one Master Node and other nodes are worker node, Master node manages worker nodes.
    => Master Node is responsible for distributing load accross worker nodes.
    => And all the port that is required for your application are deployed on worker nodes.
    => Master node runs only system port, which are responsible for actual work of K8S.



## K8S Services:
    => 
    Master Node:    1. Kubelet, 2. Kube-proxy, 3. Container-Runtime, 4. API-Server (main one), 5. Scheduler, 6. Kube Controller Manager, 7. Cloud Controller Manager, 8. etcd, 9. DNS
    
    Worker Node:    1. Kubelet, 2. Kube-proxy, 3. Container-Runtime.


# Container-Runtime: it runs actual containers inside node.

## Worker node communicate with Master Node through API Server.

## Kube-proxy: its responsible for network communication b/w nodes.


## kubectl (kube control):
    => 
    it's a command-line tool for inter-acting with the kubernetes API. It allows users to manage resources within a kubernetes cluster, including deploying applications, managing cluster resources, and monitoring   deployments.

    All the containers in the POD, shares name space of the pod.  


## minikube: It creates kubernetes cluster with single node (its workernode and master node both).


    
