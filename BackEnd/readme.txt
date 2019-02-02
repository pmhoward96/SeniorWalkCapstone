

A way to install posgresql in vagrant.
https://gist.github.com/davisford/8000332



//SETTING UP THE VERTUAL ENVIRONMENT
vagrant up
vagrant ssh
mkvirtualenv senior_walk_app --python=python3

//ACTIVATE AND DEACTIVATE VERTUAL ENVIRONMENT
workon senior_walk_app
deactivate

//INTALL WITH PIP
pip install django
(https://www.django-rest-framework.org/)
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter

// HEAD TO THE FOLLOWIN DIRECTORY
cd /vagrant/src/




//CREATE THE DJANGO senior_walk_project IN THE SRC DIRECTORY
django-admin.py startproject senior_walk_project

// CREATE AN APP (senior_walk_app)
python manage.py startapp senior_walk_app


//CREATE MIGRATIONS and SYNC DB WHEN CHANGE
python manage.py makemigrations 'senior_walk_app'
//MIRGE EXISTING FILES
python manage.py migrate
//CREATING A SUPER CLASS TO LOGIN AS (localhost:8001/admin)
python manage.py createsuperuser


// RUN APPLICATION
python manage.py runserver 0.0.0.0:8001
