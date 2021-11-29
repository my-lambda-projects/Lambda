# lets talk about bitshifting

LDI = 0b10000010
ADD = 0b00000000
# 000000AA
bob = LDI >> 6
bob == 0b00000010 => 2
add_to_pc = bob + 1

# FETCH
IR = 0b10000010

# DECODE
add_to_pc = (IR >> 6) + 1

if IR == LDI:
    # do the ldi thing
    pass
elif IR == ADD:
    #do the add thing
    pass

cpu.pc += add_to_pc