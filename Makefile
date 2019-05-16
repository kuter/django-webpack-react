developement:
	npm install
	pip install -r requirements.txt

run:
	npm run start:dev &
	python manage.py runserver 0.0.0.0:8000
