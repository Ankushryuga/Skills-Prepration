## Kubernetes System Architecture:

1. Cluser          //set of resuources.
2. Node            //each node are services (server or systems or virtual machine or bare metal system.)
3. Control Plane   //all the system components run here.
4. Data Plane      //end user applications run here on worker node...

## 3 Kubernetest Standard Interfaces:
Interfaces:
1. Container Runtime Interface (CRI)
2. Container Network Interface (CNI)
3. Container Storage Interface (CSI)
Defining these interfaces allows for a modular system where innovation can happen outside of the main kubernetes project and easily


## CRI:
 It's runtime interface that kubernetes run.


## Kubernetes Tool:
1. Docker Desktop: Container Development.
2. helm: Package Manager / Template engine.
3. Kubectl: Kuberentes Client.
4. Kubectx: Kubectl add-on to make cluster.
5. kluctl: improving kubernetes configuration management.
6. kinD: Deploying Kubernetes within Docker.
7. ko: Containerizing go applications.
8. k9s: TUI for observing kubernetes clusters.
9. oras: OCI registry client.
10. yq: Parsing and manipulating Yaml.


