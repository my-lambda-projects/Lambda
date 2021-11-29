

def bankRequests(accounts, requests):
    map(lambda x: x.split(), requests)
    print(requests)


def main():
    acco < unts = [10, 100, 20, 50, 30]
    requests = ["withdraw 2 10", "transfer 5 1 20",
                "deposit 5 20", "transfer 3 4 15"]
    bankRequests(accounts, requests)


if __name__ == '__main__':
    main()


def hayDuplicados(lista):
    lista.sort()
    for i in range(lista):
        if i+1 <= len(lista):
            if lista[i] == lista[i+1]:
                return True

    return False


def borrarDuplicados(lista):
    lista = [set(lista)]
