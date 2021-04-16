'''
Design Amazon / Flipkart (an online shopping platform)

Beyond the basic functionality (signup, login etc.), interviewers will be 
    looking for the following:

Discoverability: 
    How will the buyer discover a product? 
    How will the search surface results?
Cart & Checkout: Users expect the cart and checkout to behave in a certain way. 
    How will the design adhere to such known best practices while also introducing 
        innovative checkout semantics like One-Click-Purchase?
Payment Methods: Users can pay using credit cards, gift cards, etc. 
    How will the payment method work with the checkout process?
Product Reviews & Ratings: When can a user post a review and a rating? 
    How are useful reviews tracked and less useful reviews de-prioritized?
'''

# Objects
    # Customer
        # account, cart, order
        # add_item_to_cart(item), remove_item_from_cart(item), place_order(order)
    # Account
        # username, password, status, name, shipping_address, email, phone, credit_cards
        # add_product(product), product_review(review)
    # Cart
        # items
        # add_item(item), remove_item(item), update_item_quantity(item, quantity),
            # get_items, checkout
    # Item
        # item, product_id, quantity, price
        # update_quantity(quantity)
    # Product
        # product_id, name, description, price, category, available_item_count, seller
        # ProductCategory
            # name, description
    # Order
        # status (unshipped, pending, shipped, completed, canceled), order_logs, 
            # order_number, status, order_date
        # send_for_shipment, make_payment(payment), add_order_log(order_log)
        # Order Log
            # order_number, creation_date, status
    # Shipping
        # shipment_number, shipment_date, estimated_arrival, shipment_method, 
            # order_details