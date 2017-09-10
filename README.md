# explore-angular4

	docker build -t angular4 .

	docker run -v `pwd`:/app -v `dirname ~`/`basename ~`/.npm:/root/.npm -p 4200:4200 -it --rm --name angular4 angular4 bash

	ng new my-app
	cd my-app
	ng serve --host 0.0.0.0 


Modify file like .angular-cli.json then ng serve has to be restarted.

[Cannot read property '1' of undefined at Rule.SelectorRule](https://github.com/angular/angular-cli/issues/5848)

