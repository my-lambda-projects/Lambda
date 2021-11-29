#
"""
"""

# end_pymotw_header
import base64

encoded_data = b"VGhpcyBpcyB0aGUgZGF0YSwgaW4gdGhlIGNsZWFyLg=="
decoded_data = base64.b64decode(encoded_data)
print("Encoded :", encoded_data)
print("Decoded :", decoded_data)
