#!/bin/bash

command_exists () {
  type "$1" &> /dev/null ;
}

show_instructions () {
  echo "Usage: ./go <command>"
  echo ""
  echo "where <command> is one of:"
  echo "    install       installs any required dependencies"
  echo "    test          runs all your unit tests"
  echo "    test:dev      runs all your unit tests and watch any changes (dev mode)"
  echo "    precommit     prepares your changes to be committed"
  echo "    start         runs your local development server at http://localhost:8000"
}

initial_setup () {
  echo "It looks like this is your first time trying to run the app."
  echo "Before you start, I need to set a few things up for you."
  npm -s install
  echo "All done! You can now start using the app!"
}

if ! command_exists node || ! command_exists npm; then
  echo "You need node and npm to run this!"
  echo "You'll need to install these yourself as I can't install them for you :("
  echo "Try using NVM https://github.com/creationix/nvm"
  exit 1
fi

[[ -d node_modules ]] || initial_setup

case "$1" in
  "install" | "i")
    npm -s install
    ;;

  "test" | "t" )
    npm -s test
    exit $?
    ;;

  "test:dev" | "td")
    npm -s run test:dev
    exit $?
    ;;

  "precommit" | "p")
    npm -s run precommit
    exit $?
    ;;

  "start" | "s")
    npm run start
    ;;

  "--help" | "-h" | *)
    show_instructions
    ;;
esac
