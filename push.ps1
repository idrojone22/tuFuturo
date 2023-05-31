git status
$commit = Read-Host "Nombre del commit: "
$addFiles = Read-Host "¿Deseas agregar todos los archivos? (S/N): "

if ($addFiles -eq "S") {
    git add *
} else {
    $filesToAdd = Read-Host "Ingrese los nombres de los archivos separados por espacios: "
    $filesArray = $filesToAdd -split " "
    
    foreach ($file in $filesArray) {
        git add $file
    }
}

git commit -m "$commit"
git push

Write-Host "Todo OK" 