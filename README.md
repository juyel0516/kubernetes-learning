# kubernetes-learning

## Imperative Approach for Kubernetes control commands

### 1. Create a deployment [first-app=deployment name, mjuyelrana/kub-first-app=docker hub image name]
```shell
kubectl create deployment first-app --image=mjuyelrana/kub-first-app
```
### 2. To show all the deployments 
```shell
kubectl get deployments
```
### 3. To show all running pods 
```shell
kubectl get pods
```
### 4. To delete a deployment [first-app=deployment name]
```shell
kubectl delete deployment first-app
```
### 5. To show the running services
```shell
kubectl get services 
```
### 6. To delete a service [first-app = service name]
```shell
kubectl delete service first-app
```
### 7. Expose a deployment 
```shell
kubectl expose deployment first-app --type=LoadBalancer --port=8080
```
### 8. Create replicas of PODS [deployment/first-app=deployment pod]
```shell
kubectl scale deployment/first-app --replicas=3
```
### 9. Attaching new build to deployment [kub-first-app = Container name, mjuyelrana/kub-first-app= docker-hub image name]
```shell
kubectl set image deployment/first-app kub-first-app=mjuyelrana/kub-first-app 
```
### 10. Rollout the new deployment 
```shell
kubectl rollout status deployment/first-app
```
### 11. Show the histories of all deployments 
```shell
kubctl rollout history deployment/first-app
kubctl rollout history deployment/first-app --revision=1
```
### 12. Undo an old deployment 
```shell
kubectl rollout undo deployment/first-app --to-revision=1
```

## Declarative Approach for kubernetes control
### 1. Create a deployment by deployment.yaml file
```shell
kubectl apply -f=deployment.yaml
```
### 2. Create a service by service.yaml file
```shell
kubectl apply -f service.yaml
```

## Minikube Commands
### 1. To start or stop minikube 
```shell
minikube start
minikube stop
```
### 2. To show minikube status 
```shell
minikube status 
```
### 3. To show minikube dashboard in browser 
```shell
minikube dashboard
```
### 4. Attach a deployment to minikube [first-app=deployment name] 
```shell
minikube service first-app 
```
