Django React Project template
=============================

.. image:: https://img.shields.io/badge/code%20style-black-000000.svg
    :target: https://github.com/ambv/black

A Django 2.x with ReactJS project template.

Running
-------

Setup virtualenv for example with virtualenvwrapper:

.. code:: bash

    $ mkvirtualenv django_react_project

Install python and node modules

.. code:: bash

    $ make development

Add `local_settings.py` with content:

.. code:: python

    import os


    def apply_settings(settings):
        settings['DEBUG'] = True
        settings['WEBPACK_LOADER'] = {
            "DEFAULT": {
                "CACHE": False,
                "BUNDLE_DIR_NAME": "webpack_bundles/",  # must end with slash
                "STATS_FILE": os.path.join(settings['BASE_DIR'], "reactjs/config/webpack-stats-local.json"),
                "POLL_INTERVAL": 0.1,
                "TIMEOUT": None,
                "IGNORE": [r".+\.hot-update.js", r".+\.map"],
                }
            }


And run project:

.. code:: bash

    $ make run

Visit http://localhost:8000
