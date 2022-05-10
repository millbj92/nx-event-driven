resource "google_compute_firewall" "lb" {
  name = "k8s-fw-ab16272a0bd4044f685878bd7dd5aee6"
  network = google_compute_network.main.name
  project = local.host_project_id
  description = "{\"kubernetes.io/service-name\":\"istio-system/istio-ingressgateway\", \"kubernetes.io/service-ip\":\"35.231.175.94\"}"

  allow {
    protocol = "tcp"
    ports = ["15021","443","80", "15017"]
  }


  source_ranges = ["0.0.0.0/0"]
  target_tags = ["gke-gke-7c384aa9-node"]
}

resource "google_compute_firewall" "health" {
  name = "k8s-295bb7add3d7347f-node-http-hc"
  network = google_compute_network.main.name
  project = local.host_project_id
  description = "{\"kubernetes.io/cluster-id\":\"295bb7add3d7347f\"}"

  allow {
    protocol = "tcp"
    ports = ["10256", "15017"]
  }

  source_ranges = ["130.211.0.0/22","209.85.152.0/22","209.85.204.0/22","35.191.0.0/16"]
  target_tags = ["gke-gke-7c384aa9-node"]
}



# resource "google_compute_firewall" "health" {
#   name = "k8s-9fa31da40039fd21-node-http-hc"
#   network = google_compute_network.main.name
#   project = local.host_project_id
#   description = "{\"kubernetes.io/cluster-id\":\"9fa31da40039fd21\"}"

#   allow {
#     protocol = "tcp"
#     ports = ["10256"]
#   }

#   source_ranges = ["130.211.0.0/22","209.85.152.0/22","209.85.204.0/22","35.191.0.0/16"]
#   target_tags = ["gke-gke-8f27e2b1-node"]
# }
