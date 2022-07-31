docker-build:
	docker build -t bengroneman/client .
docker-run:
	docker run -p 80:8080 -d bengroneman/client
