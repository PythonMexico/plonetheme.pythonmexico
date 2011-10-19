from setuptools import setup
from setuptools import find_packages


version = '1.0'
name='plonetheme.pythonmexico'


setup(
    name=name, version=version,
    description="A Plone theme for the portal of Python Mexico community",
    long_description=open("README.rst").read(),
    classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "License :: OSI Approved :: BSD License",
        ],
    keywords='plone diazo theme',
    author='Erik Rivera',
    author_email='erik@rivera.pro',
    url='https://github.com/pythonmexico/'+name,
    license='BSD',
    packages=find_packages(),
    namespace_packages=['plonetheme'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'setuptools',
        'plone.app.theming',
        ],
    entry_points="""
        [z3c.autoinclude.plugin]
        target = plone
        """,
    )
