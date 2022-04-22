provider "google" {
  region = "us-east1"
}

resource "random_integer" "int" {
  min = 2
  max = 1000000
}


terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.66"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
  }
}

