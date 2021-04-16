# Given a string containing only digits, restore it by 
    # returning all possible valid IP address combinations.

# A valid IP address must be in the form of A.B.C.D, where 
    # A, B, C, and D are numbers from 0-255. 
# The numbers cannot be 0 prefixed unless they are 0.

# For anyone wondering, time complexity of this approach is a constant O(1):
    # O(nCr (11,3)) = O(11 * 10 * 9 / 3!) = O(11 * 5 * 3) = O(165) = O(1)

# -- whilst nCr(11, 3) is the amount of options to choose 3 dots from 
    # 11 possible indices (as max amount of digits is 12).

# Some optimizations can be used to avoid iterating over useless dot indices. 

# We can reduce to 3^3 = 27 iterations only (instead 165), as the leftmost dot cannot 
    # have more than 3 digits from its left (3 options only for the leftmost dot). 

# Now, assume the leftmost dot was chosen (fixed). 
# The middle dot cannot have more than 3 digits between it to the leftmost dot 
    # (3 options for choosing the middle dot). 

# Now, assume the middle dot was chosen (fixed). 
# The rightmost dot cannot have more than 3 digits between it and the middle dot. 

# Total: 3 * 3 * 3 iterations.

# time complexity:  O(1) because of the 3^3 iterations
# space complexity:  O(1)

# checks whether IP digits are valid or not
def is_valid(possible_ip): 

    # splitting at period
    ip_address = possible_ip.split(".") 

    # checking for corner cases 
    for subaddress in ip_address: 

        # get length of subaddress
        length_subaddress = len(subaddress)
        # get int of subaddress
        int_subaddress = int(subaddress)
        # get first digit of subaddress
        first_digit = subaddress[0]

        # if length > 3 OR subaddress int is outside 0-255 OR
        # if length > 1 AND subaddress int is 0 OR
        # if length > 1  AND subaddress int is NOT 0 and first digit is 0
            # return false for invalid ip
        if length_subaddress > 3 or int_subaddress < 0 or int_subaddress > 255: 
            return False
        elif length_subaddress > 1 and int_subaddress is 0: 
            return False
        elif length_subaddress > 1 and int_subaddress is not 0 and first_digit is '0': 
            return False

    # else return true for valid ip
    return True

# converts string to IP address 
def convert_string_to_ip(string): 

    # get string length
    length = len(string) 

    # if string of digits > 12, it's not an IP; return empty array
    if length > 12: 
        return [] 

    # else set current possible ip as string AND
    current_possible_ip = string 
    # initialize empty valid ip list
    valid_ip_list = [] 

    # loop through possible ips:
    # first period loop
    for i in range(1, length - 2): 
        # second period loop
        for j in range(i + 1, length - 1): 
            # third period loop
            for k in range(j + 1, length): 

                # add first period to ip to check
                begin_to_k = current_possible_ip[:k]
                k_to_end = current_possible_ip[k:]
                current_possible_ip = begin_to_k + "." + k_to_end

                # add second period to ip to check
                begin_to_j = current_possible_ip[:j]
                j_to_end = current_possible_ip[j:]
                current_possible_ip = begin_to_j + "." + j_to_end 

                # add third period to ip to check
                begin_to_i = current_possible_ip[:i]
                i_to_end = current_possible_ip[i:]
                current_possible_ip = begin_to_i + "." + i_to_end

                # if current combination is valid, add to valid ip list
                is_ip_valid = is_valid(current_possible_ip)
                if is_ip_valid: 
                    valid_ip_list.append(current_possible_ip) 

                # reset current possible id to original string before looping again
                current_possible_ip = string 

    # return valid ip list
    return valid_ip_list  
    
A = "25525511135"
# B = "25505011535"
print(convert_string_to_ip(A)) 
# print(convert_string_to_ip(B)) 