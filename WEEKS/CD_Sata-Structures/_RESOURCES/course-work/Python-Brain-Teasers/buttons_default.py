# Create UI
display = []
buttons = []
for n in range(10):
    # A button is a function called when user clicks on it
    buttons.append(lambda n=n: display.append(n))  # <1>

# Click on button 3
btn = buttons[3]
btn()
print(display)
