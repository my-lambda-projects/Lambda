# Create a function that concatenates the number 7 to the end of every chord in a list. If a chord already ends with a 7, ignore that chord.
def csMakeItJazzy(chords):
    for index in range(len(chords)):
        if chords[index].__contains__("7"):
            continue
        elif chords == []:
            return []
        else:
            chords[index] = chords[index] + "7"
    return chords
