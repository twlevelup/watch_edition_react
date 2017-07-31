#! /bin/bash

set -e

command_exists () {
  type "$1" &> /dev/null ;
}

bold_text() {
  echo -e "\033[1m$1\033[0m"
}

get_shell() {
  ps -p $$ | tail -n 1 | awk '{ print $4 }'
}

green_tick() {
  echo -e "\033[1;92m✓\033[0m $1"
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

set_nvm_env() {
   # copied from NVM
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
}

setup_nvm () {
  echo "Installing Node Version Manager (https://github.com/creationix/nvm)"

  curl -o- "https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh" | bash

  nvm install
}

echo "  _      ________      ________ _     _    _ _____    ____  _    _ _____ _      _____  "
echo " | |    |  ____\ \    / /  ____| |   | |  | |  __ \  |  _ \| |  | |_   _| |    |  __ \ "
echo " | |    | |__   \ \  / /| |__  | |   | |  | | |__) | | |_) | |  | | | | | |    | |  | |"
echo " | |    |  __|   \ \/ / |  __| | |   | |  | |  ___/  |  _ <| |  | | | | | |    | |  | |"
echo " | |____| |____   \  /  | |____| |___| |__| | |      | |_) | |__| |_| |_| |____| |__| |"
echo " |______|______|   \/   |______|______\____/|_|      |____/ \____/|_____|______|_____/ "
echo ""
echo ""

intro_message() {
  echo "It looks like this is your first time trying to run the app."
  echo "Before you start, I need to set a few things up for you."
}

case "$1" in
  "setup")
    node_version=$(cat .nvmrc)
    set_nvm_env

    [[ -d node_modules ]] || intro_message

    $has_nvm || setup_nvm
    echo $(green_tick "Installed nvm")

    [[ "$(node -v)" = "v$node_version" ]] || nvm install
    echo $(green_tick "Installed node v$node_version")

    [[ -d node_modules ]] || npm -s install > /dev/null
    echo $(green_tick "Installed npm packages")

    echo ""
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
