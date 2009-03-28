#!/usr/bin/python
# -*- coding: utf-8 -*-

config.fab_hosts = ['kogakure.webfactional.com']
config.project_path = '/home/kogakure/webapps/stefanimhoff'

def deploy():
    "Lokale Änderungen pushen, Änderungen pullen auf server"
    local('git push;', fail='warn')
    run('cd %(project_path)s/; git pull', fail='warn')