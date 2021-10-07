def input_text():
    running = True

    while running:
        mesg = input("Type anything: ")

        print(mesg)

        while True:
            ans = input("Type 'yes' to continue or 'no' to terminate: ").lower()

            if ans == "yes" or ans == "y":
                running = True
                break

            elif ans == "no" or ans == "n":
                running = False
                break

            else:
                print("Please type 'yes' or 'no' only")
                break


input_text()
