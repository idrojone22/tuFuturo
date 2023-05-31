#!/bin/bash

read -p "Nombre del commit: " commit
read -p "¿Deseas agregar todos los archivos? (S/N): " addFiles

if [ "$addFiles" = "S" ]; then
    git add *
else
    read -p "Ingrese los nombres de los archivos separados por espacios: " filesToAdd
    filesArray=($filesToAdd)
    
    for file in "${filesArray[@]}"; do
        git add "$file"
    done
fi

git commit -m "$commit"
git push

echo "Todo OK"