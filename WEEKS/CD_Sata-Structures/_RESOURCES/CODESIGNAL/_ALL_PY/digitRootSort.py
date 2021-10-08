def digitRootSort(a):
    a.sort()

    a = map(str, a)
    separados = []
    for numeros in a:
        separados.append(list(numeros))

    totales = []
    for i in range(len(separados)):
        sumaElementos = 0
        for x in range(len(separados[i])):
            sumaElementos += int(separados[i][x])

        totales.append(sumaElementos)

    resultado = []
    print(a)
    print(totales)
    while len(totales) != 0:
        menor = totales[0]
        indice = 0
        for i in range(len(totales)):
            if totales[i] < menor:
                menor = totales[i]
                indice = i

        resultado.append(int(a[indice]))
        a.pop(indice)
        totales.pop(indice)
    print(resultado)


def main():
    lista = [13, 20, 7, 4]
    digitRootSort(lista)


if __name__ == "__main__":
    main()
