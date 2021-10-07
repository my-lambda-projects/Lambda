#!/usr/bin/python

# Test cases
# {'milk': 100, 'flour': 4, 'sugar': 10, 'butter': 5}, {'milk': 1288, 'flour': 9, 'sugar': 95}), 0)
# {'milk': 100, 'butter': 50, 'cheese': 10}, {'milk': 198, 'butter': 52, 'cheese': 10}), 1)
# {'milk': 2, 'sugar': 40, 'butter': 20}, {'milk': 5, 'sugar': 120, 'butter': 500}), 2)
# {'milk': 2}, {'milk': 200}), 100)

rec_1 = {"milk": 100, "flour": 4, "sugar": 10}
ing_1 = {"milk": 1288, "flour": 9, "sugar": 95}


def recipe_batches(recipe_dictionary, ingredients_dictionary):
    total_batches_per_ingredient = []
    if set(ingredients_dictionary) >= set(recipe_dictionary):
        for item in recipe_dictionary:
            if recipe_dictionary[item] > ingredients_dictionary[item]:
                total_batches_per_ingredient.append(0)
            else:
                total_batches_per_ingredient.append(
                    (ingredients_dictionary[item] // recipe_dictionary[item])
                )
                print(f"Total Batches: {total_batches_per_ingredient}")
        total_batches_per_ingredient.sort()
        print(f"Total Batches Sorted: {total_batches_per_ingredient}")
        return total_batches_per_ingredient[0]
    else:
        return 0


if __name__ == "__main__":
    # Change the entries of these dictionaries to test
    # your implementation with different inputs
    recipe = {"milk": 100, "butter": 50, "flour": 5}
    ingredients = {"milk": 132, "butter": 48, "flour": 51}
    print(
        "{batches} batches can be made from the available ingredients: {ingredients}.".format(
            batches=recipe_batches(recipe, ingredients), ingredients=ingredients
        )
    )
