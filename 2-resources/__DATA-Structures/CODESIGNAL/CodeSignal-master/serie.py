entrada = int(input("CUANTAS VECES QUIERES PERRO: "))
acumulador = 0
denominador = -1
for i in range(entrada):
    denominador += i * 3
    acumulador += 1 / denominador
print(acumulador)
