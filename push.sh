echo "Nombre del commit:"
read n
git status
git add *
git commit -m "$n"
git push -f