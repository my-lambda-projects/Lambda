import ipaddress


def isIPv4Address(inputString):
    try:
        ip = ipaddress.ip_address(inputString)
        return True
    except ValueError:
        return False
