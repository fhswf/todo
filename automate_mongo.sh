#!/bin/bash

# Skript zum Leeren der Datebank

mongosh <<EOF
use todos
db.todos.deleteMany({})
exit
EOF