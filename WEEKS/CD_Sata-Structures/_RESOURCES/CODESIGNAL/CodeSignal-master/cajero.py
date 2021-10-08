# -*- coding: utf-8 -*-


def pagarEstacionamiento(apagar):
    total = apagar
    print("Total a pagar:" + str(apagar))
    while apagar > 0:
        moneda = int(input("Ingresa la cantidad de la moneda que quieres ingresar: "))
        if moneda == 1 or moneda == 2 or moneda == 5 or moneda == 10 or moneda == 50:
            apagar -= moneda
        else:
            print(
                "Moneda con denominación inválidad, solo puedes meter monedas de 1 , 2, 5, 10, 50"
            )

    cambio = apagar * -1
    print("Pagaste: " + str(total + cambio))
    print("Haz terminado de pagar, tu cambio es: " + str(cambio))


def main():
    pagarEstacionamiento(72)


if __name__ == "__main__":
    main()
