resource "digitalocean_kubernetes_cluster" "cluster" {
  name = "sociium-dev"
  region = "nyc1"
  version = "1.22.8-do.0"

  node_pool {
    name = "general"
    size = "s-2vcpu-4gb"
    node_count = 4
  }
}

