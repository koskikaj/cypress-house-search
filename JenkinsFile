echo 'cypress pipeline'

node {

   stage('Clone Project From GITHUB') {
   checkout scm
   }
   stage('Set Jenkins as SUDO') {
    sh "sudo su -s /bin/bash jenkins"
   }
   stage('Build docker image for Cypress') {
    sh "sudo docker build -t cypresshouse ."
   }
   stage('Execute tests with mount') {
    sh "sudo docker run --rm -v \$(pwd)/cypress:/${workspace}/cypress cypresshouse"\
   }

}