#!/bin/bash

command_exists () {
  type "$1" &> /dev/null ;
}

bold_text() {
  echo -e "\033[1m$1\033[0m"
}

show_instructions () {
  echo "$(bold_text Usage): ./go <command>"
  echo ""
  echo "where <command> is one of:"
  echo "    $(bold_text "setup         ")   setups your development machine"
  echo "    $(bold_text "install   | i " )   installs any required dependencies"
  echo "    $(bold_text "test      | t " )   runs all your unit tests"
  echo "    $(bold_text "test:dev  | td")   runs all your unit tests and watch any changes (dev mode)"
  echo "    $(bold_text "precommit | p " )   prepares your changes to be committed"
  echo "    $(bold_text "start     | s " )   runs your local development server at http://localhost:8000"
}

setup_nvm () {
  echo "Installing Node Version Manager (https://github.com/creationix/nvm)"

  curl -o- "https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh" | bash

  if [[ "$0" == *"zsh"* ]]; then
    source ~/.zshrc
  elif [[ "$0" == *"bash"* ]]; then
    source ~/.bashrc
  else
    # I tried.
    source ~/.profile
    source ~/.bash_profile
  fi
}

echo "  _      ________      ________ _     _    _ _____    ____  _    _ _____ _      _____  "
echo " | |    |  ____\ \    / /  ____| |   | |  | |  __ \  |  _ \| |  | |_   _| |    |  __ \ "
echo " | |    | |__   \ \  / /| |__  | |   | |  | | |__) | | |_) | |  | | | | | |    | |  | |"
echo " | |    |  __|   \ \/ / |  __| | |   | |  | |  ___/  |  _ <| |  | | | | | |    | |  | |"
echo " | |____| |____   \  /  | |____| |___| |__| | |      | |_) | |__| |_| |_| |____| |__| |"
echo " |______|______|   \/   |______|______\____/|_|      |____/ \____/|_____|______|_____/ "
echo ""
echo ""

case "$1" in
  "setup")

    if ! [[ -d node_modules ]]; then
      echo "It looks like this is your first time trying to run the app."
      echo "Before you start, I need to set a few things up for you."
      echo ""
      echo ""
    fi

    setup_nvm

    npm -s install

    echo "All done! You can now start using the app!"
    ;;

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

  *)
    show_instructions
    ;;
esac
