def constructArray(size):
    lista1 = list(range(1, size + 1))
    lista2 = list(range(size, 0, -1))
    print(lista1)
    print(lista2)
    resultado = []
    ultimo = True
    for i in range(len(lista1)):
        if lista1[i] < lista2[i]:
            resultado.append(lista1[i])
            resultado.append(lista2[i])
        else:
            if len(lista1) % 2 != 0:
                if ultimo:
                    resultado.append(lista1[i])
                    ultimo = False
    print(resultado)


def main():
    constructArray(7)


if __name__ == "__main__":
    main()
