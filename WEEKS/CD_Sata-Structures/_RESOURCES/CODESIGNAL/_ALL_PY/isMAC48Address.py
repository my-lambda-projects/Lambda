import re

"""isMAC48Address

    A media access control address (MAC address) 
    is a unique identifier assigned to network 
    interfaces for communications on the physical 
    network segment.
    
    The standard (IEEE 802) format for printing 
    MAC-48 addresses in human-friendly form is six 
    groups of two hexadecimal digits (0 to 9 or A to F), 
    separated by hyphens (e.g. 01-23-45-67-89-AB).    
"""


def isMAC48Address(inputString):
    """Checks if inputString is a valid MAC48 address
    
    Args:
        inputString(string): String to check
        
    Return:
        Boolean indicating if string is valid MAC48 address
        
    Raises:
    """
    if re.match(
        "[0-9a-f]{2}([-:])[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$", inputString.lower()
    ):
        return True
    else:
        return False
