
#include <bits/stdc++.h>
using namespace std;

vector<int> topoSort(int V, vector<vector<int>>& adj){
    vector<int> indegree(V,0);

    for(int i=0;i<V;i++){
        for(int v:adj[i])
            indegree[v]++;
    }

    queue<int> q;

    for(int i=0;i<V;i++)
        if(indegree[i]==0)
            q.push(i);

    vector<int> order;

    while(!q.empty()){
        int node=q.front();
        q.pop();

        order.push_back(node);

        for(int v:adj[node]){
            indegree[v]--;
            if(indegree[v]==0)
                q.push(v);
        }
    }

    if(order.size()!=V){
        cout<<"Cycle";
        return {};
    }

    return order;
}

int main(){

    int V,E;
    cin>>V>>E;

    vector<vector<int>> adj(V);

    for(int i=0;i<E;i++){
        int u,v;
        cin>>u>>v;
        adj[u].push_back(v);
    }

    vector<int> result=topoSort(V,adj);

    for(int x:result)
        cout<<x<<" ";
}
