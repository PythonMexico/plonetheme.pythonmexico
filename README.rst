=======================
plonetheme.pythonmexico
=======================

A theme for the `Python Mexico`_ community website.

.. contents::


Introduction
============

*plonetheme.pythonmexico* Theme is an installable Plone_ Theme developed by 
`Erik Rivera`_ and `Noe Nieto`_ using the **theming** and **packaging** 
features available in `plone.app.theming`_.


Requirements
============

- From the Plone 4.1.x To the Plone 4.3 latest versión (https://plone.org/download)
- The ``plone.app.theming`` package (*will be installed as a dependency of this package*)


Screenshots
===========

Layout of the site when viewed in a computer resolution:

.. image:: https://github.com/pythonmexico/plonetheme.pythonmexico/raw/master/plonetheme/pythonmexico/static/preview.png


Features
========

- It's an installable Plone_ Theme package.
- After installation from Add-ons controlpanel, this theme is enabled automatically.
- Also it's a simple Diazo_ package (Zip file).
- It's have support for clean uninstallation.


Installation
============


Buildout
--------

If you are a developer, you might enjoy installing it via buildout.

For install ``plonetheme.pythonmexico`` package add it to your ``buildout`` section's 
*eggs* parameter e.g.: ::

   [buildout]
    ...
    eggs =
        ...
        plonetheme.pythonmexico


and then running ``bin/buildout``.

Or, you can add it as a dependency on your own product ``setup.py`` file: ::

    install_requires=[
        ...
        'plonetheme.pythonmexico',
    ],


Zip file
--------

If you are an **end user**, you might enjoy installation via zip file import.

1. Download a `zip file <https://github.com/pythonmexico/plonetheme.pythonmexico/raw/master/plonetheme.pythonmexico.zip>`_.
2. Import the theme from the Diazo theme control panel.

If you are a **developer user**, you might enjoy installation via zip file import like this:

::

    % git clone git://github.com/pythonmexico/plonetheme.pythonmexico.git
    % cd plonetheme.pythonmexico
    % git archive --format=zip --prefix=pythonmexico/ HEAD:plonetheme/pythonmexico/static/ > pythonmexico.zip

1. Import created zip file via ``@@theming-controlpanel`` -> ``Import theme`` tab.


Enabling the theme
^^^^^^^^^^^^^^^^^^

Browse to ``http://yoursite/Plone/@@theming-controlpanel`` click on ``Enable`` on ``Python Mexico`` theme from the Diazo control panel. That's it!


Parameters
==========

* ``site-title``, Default: ``string: Python Mexico``

    Site title. 

* ``site-description``, Default: ``string: Portal de la comunidad de Python Mexico``

    Site description.

* ``footer``, Default: ``string: Copyright &copy; 2011 ...``

    Footer of site. HTML marks allowed.

* ``notheme``, Default: ``python: 'ajax_load' in request.form``

    Expression which makes page unthemed.


Contribute
==========

- Issue Tracker: https://github.com/pythonmexico/plonetheme.pythonmexico/issues
- Source Code: https://github.com/pythonmexico/plonetheme.pythonmexico


License
=======

The project is licensed under the GPLv2.

Credits
-------

- `Erik Rivera`_, initial implementation
- `Noe Nieto`_, fixtures and tunning

.. _`Plone`: http://plone.org
.. _`plone.app.theming`: https://pypi.org/project/plone.app.theming/
.. _`Diazo`: http://diazo.org
.. _`Python Mexico`: http://python.org.mx
.. _`Erik Rivera`: http://rivera.pro
.. _`Noe Nieto`: http://noenieto.com
