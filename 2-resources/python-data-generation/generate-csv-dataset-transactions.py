import random

method = ["credit", "debit", "credit", "credit", "debit", "credit", "credit", "cash", "credit"]

shop_dict = {
    'Edgars': 'Clothing',
    'CNA': 'Stationary',
    'Sportmans Warehouse': 'Sports Equipment',
    'Pick n Pay': 'Groceries',
    'Rage Shoes': 'Shoes',
    'BT Games': 'Games',
    'Dions Wired': 'Electronics',
    'Makro': (
        'Shoes',
        'Clothing',
        'Electronics',
        'Groceries',
        'Stationary',
        'Sports Equipment',
        'Games'
        )
    }

city_dict = {
    'Kroonstad': 'Free State',
    'Cape Town': 'Western Cape',
    'Pretoria': 'Gauteng',
    'PE': 'Eastern Cape',
    'Johannesburg': 'Gauteng',
    'Potchefstroom': 'North West',
    'Bloemfontein': 'Free State',
    'Stellenbosch': 'Western Cape',
    'Krugersdorp': 'Gauteng',
    'Somerset West': 'Western Cape',
    'Kimberley': 'Northern Cape',
    'Upington': 'Northern Cape',
    'Klerksdorp': 'North West',
    'Potchefstroom': 'North West',
    'Parys': 'Free State',
    'Gauteng': 'Boksburg'
    }


for x in xrange(100000):
    x_stores = random.choice(shop_dict.keys())
    if x_stores == 'Makro':
        x_category = shop_dict[x_stores][random.randint(0,6)]
    else:
        x_category = shop_dict[x_stores]

    x_cities = random.choice(city_dict.keys())
    x_province = city_dict[x_cities]

    print (
        str(random.randint(1, 1000)).zfill(4) + ',' +
        str(random.randint(2014,2016)) + '-' + str(random.randint(1,12)).zfill(2) + '-' + str(random.randint(1,28)).zfill(2) + ',' +
        str(random.randint(4000000,4001000)) + ',' +
        str(random.randint(29, 800)) + '.' + str(random.randint(0, 99)).zfill(2) + ',' +
        x_stores + ',' +
        x_category + ',' +
        x_cities + ',' +
        x_province + ',' +
        random.choice(method)
    )

    # Schema: AccountID, DateOfPurchase, TransactionID, PurchasePrice, StoreName, StoreCategory, CityName, ProvinceName, PurchaseMethod
