import traceback


def bankRequests(accounts, requests):
    """Shubidubi"""
    request = []

    for elements in requests:  # Se le da un split a todos los elementos de la matriz con parámetro de espacio
        request.append(elements.split(" "))

    errores = 0

    for elements in request:        try:
            accounts = bank(accounts, elements)

        except Exception as err:
            errores += 1

    if(errores > 0):
        return [errores*-1]
    else:
        return accounts


def bank(accounts, request):
    type = request[0]
    print(accounts)
    if type == "withdraw":
        index = (int(request[1])-1)
        value = int(request[2])
        if accounts[index] >= value:
            accounts[index] -= value
        else:
            return "Error"

    elif type == "transfer":
        index = int(request[1])-1  # i
        index2 = int(request[2])-1  # j
        if index < len(accounts) and index2 < len(accounts):
            print(index, index2)
            value = int(request[3])
            if accounts[index] >= value:
                accounts[index] -= value
                accounts[index2] += value
            else:
                return [-2]
        else:
            return [-2]
    elif type == "deposit":
        index = int(request[1])-1
        if index < len(accounts):
            print(index)
            value = int(request[2])
            accounts[index] += value
        else:
            return [-2]

    return accounts


def main():
    accounts = [10, 100, 20, 50, 30]
    requests = ["withdraw  10", "transfer 5 1 20",
                "deposit 5 20", "transfer 3 4 15"]
    accounts
    print(bankRequests(accounts, requests))


if __name__ == '__main__':
    main()
