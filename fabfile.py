#!/usr/bin/python
# -*- coding: utf-8 -*-

from fabric.api import env, local, run

env.hosts = ['kogakure.webfactional.com']
env.path = '/home/kogakure/webapps/stefanimhoff'

def deploy():
    "Lokale Änderungen pushen, Änderungen pullen auf server"
    local('git push;')
    run('cd %(path)s/; git pull' % env, pty=True)