run:
	node server.js &
	python manage.py runserver 0.0.0.0:8000

developement:
	npm install
	pip install -r requirements.txt
