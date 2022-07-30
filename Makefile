docker-build:
	docker build -t bengroneman/client .
docker-run:
	docker run -p 8000:8080 -d bengroneman/client
