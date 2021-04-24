game_running = True

while game_running == True:

    player = {'name': "Pratikshya", "attack": 10, "heal": 16, "health": 100}
    monster = {"name": "Aakash", "attack": 12, "heal": 16, "health": 100}

    print('------'*7)
    print('enter player name')
    player['name'] = input()

    print('------'*7)
    print(player['name'] + ' has ' + str(player['health']) + ' health. ')
    print(monster['name'] + ' has ' + str(monster['health']) + ' health. ')
    new_round = True

    while new_round == True:
        player_won = False
        monster_won = False

        print('------'*7)
        print("Please select action")
        print('1) Attack')
        print('2) Heal')
        print('3) Exit game')

        player_choice = input()

        if player_choice == '1' or 1:
            monster['health'] = monster['health']-player['attack']
            if monster['health'] <= 0:
                player_won = True

            else:
                player['health'] = player['health']-monster['attack']
                if player['health'] <= 0:
                    monster_won = True

        elif player_choice == 2:
            player['health'] = player['health'] + player['heal']
            player['health'] = player['health'] - monster['attack']
            print("heal player")
            if player['health'] <= 0:
                monster_won = True

        elif player_choice == '3' or 3:
            new_round = False
            game_running = False

        else:
            print("Invalid Input")

            if player_won == False and monster_won == False:
                print(player['name'] + " has " +
                      str(player['health']) + " left ")
                print(monster['name'] + " has " +
                      str(monster['health']) + " left ")

            elif player_won:
                print(player['name'] + " won ")
                new_round = False

            elif monster_won:
                print("The monster won")
                new_round = False
