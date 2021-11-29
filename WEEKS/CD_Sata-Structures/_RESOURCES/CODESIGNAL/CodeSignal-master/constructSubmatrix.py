def constructSubmatrix(matrix, rowsToDelete, columnsToDelete):
    for rows in rowsToDelete:
        del matrix[rows]
    print(matrix)

    resultado = []

    for lista in matrix:  # SACA LAS LISTAS DE LA MATRIZ
        nuevalista = []
        for i in range(len(lista)):  # RECORRE LA LISTA CON I
            if i not in columnsToDelete:
                nuevalista.append(lista[i])

        resultado.append(nuevalista)
        nuevalista = []

    return resultado


def main():
    matriz = [[1, 0, 0, 2], [0, 5, 0, 1], [0, 0, 3, 5]]
    print(constructSubmatrix(matriz, [1], [0, 2]))


if __name__ == "__main__":
    main()
