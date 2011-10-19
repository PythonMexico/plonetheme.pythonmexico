====================
Python Mexico Theme
====================

Installable `Plone`_ theme for the portal of Python Mexico community (using `plone.app.theming`_).

.. contents::


Installation
============

Using buildout
---------------

Add ``plonetheme.pythonmexico`` to eggs section of your zope client.::

    [instance]
    ...
    eggs =
        ...
        plonetheme.pythonmexico


Using .zip
-----------

::

    % git clone git://github.com/pythonmexico/plonetheme.pythonmexico.git
    % cd plonetheme.pythonmexico
    % git archive --format=zip --prefix=pythonmexico/ HEAD:plonetheme/pythonmexico/static/ > pythonmexico.zip

Import created zip file via ``@@theming-controlpanel`` -> ``Import theme`` tab.


Activating theme
----------------

Browse to ``http://yoursite/Plone/@@theming-controlpanel`` click on ``Enable
theme`` check box and select ``Python Mexico (plonetheme.pythonmexico)`` from
dropdown.

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


Credits
=======

    * `Erik Rivera`_, initial implementation
    * `Noe Nieto`_, fixtures and tunning


Changelog
=========

1.0 - 2011-10-18
----------------

    * initial implementation of theme with Diazo_ rules.
      [erikriver]


.. _`Erik Rivera`: http://rivera.pro
.. _`Noe Nieto`: http://noenieto.com

.. _`Plone`: http://plone.org
.. _`plone.app.theming`: http://pypi.python.org/pypi/plone.app.theming
.. _`Diazo': http://diazo.org
