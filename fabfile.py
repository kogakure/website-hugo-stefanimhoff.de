#!/usr/bin/python
# -*- coding: utf-8 -*-

set(
    fab_hosts = ['kogakure.webfactional.com'],
    fab_user = 'kogakure',
    project_path = '/home/kogakure/webapps/stefanimhoff',
)

def deploy():
    "Lokale Änderungen pushen, Änderungen pullen auf server"
    local('git push;', fail='warn')
    run('cd $(project_path)/; git pull', fail='warn')