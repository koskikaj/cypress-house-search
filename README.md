# Jenkins pipeline steps

a) Clone GIT Hub project

    git credentialsId: 'xxxxxx-yyyy-zzzz-kkkk-nnnnnnnnnn',
    url: 'git@github.com:koskikaj/cypress-house-search.git'

b) Set Jenkins as SUDO rights

    sh "sudo su -s /bin/bash jenkins"

c) Build docker image

    sudo docker build -t cypresshouse .

d) Execute Tests

    sh "sudo docker run --rm -v \$(pwd)/cypress:/${workspace}/cypress cypresshouse"\

