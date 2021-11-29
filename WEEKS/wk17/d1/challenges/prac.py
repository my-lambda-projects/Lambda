cmd = ""
while cmd != "exit":
    cmd == input(">>")
    if cmd == "hello" or cmd == "hi":
        print("hello")
    elif cmd == "goodbye":
        print("did you mean to exit?")
    elif cmd == "exit":
        print("Thanks for using repl")
    else:
        print("I did not understand the command")
