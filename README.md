# explore-angular4

	docker build -t angular4 .

	docker run -v `pwd`:/app -p 4200:4200 -it --rm --name angular4 angular4 bash

	ng new my-app
	cd my-app
	ng serve --host 0.0.0.0 