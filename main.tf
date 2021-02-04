provider "docker" {
  host = "tcp://192.168.66.100:2376/"
}

resource "docker_volume" "conf_redis" {}
resource "docker_volume" "conf_mongo" {}

resource "docker_container" "soren_redis" {
  name  = "soren_redis"
  image = "redis"
  restart = "always"
  
  volumes {
    container_path = "/usr/local/etc/redis"
    volume_name = "conf_redis"
  }
  ports {
    internal = "6379"
    external = "6379"
  }
}

resource "docker_container" "soren_mongo" {
	name = "soren_mongo"
	image = "mongo"
	env = ["MONGO_INITDB_ROOT_USERNAME=soren", "MONGO_INITDB_ROOT_PASSWORD=secret"]

	volumes {
		container_path = "/etc/mongo"
		volume_name = "conf_mongo"
	}
	
	ports {
		internal = "27017"
		external = "27017"
	}

}
